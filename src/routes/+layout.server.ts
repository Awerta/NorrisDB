import { db } from '$lib/server/db/index';
import { eq, and, desc } from 'drizzle-orm';
import {
	about,
	aboutTranslation,
	socialLink,
	resumeFile,
	workExperience,
	workExperienceTranslation
} from '$lib/server/db/schema/index';
import { error } from '@sveltejs/kit';

export async function load({ locals }) {
	const lang = locals.lang || 'en';
	try {
		const resume_work_experience = await db
			.select({
				company: workExperience.company,
				position: workExperienceTranslation.position
			})

			.from(workExperience)
			.innerJoin(
				workExperienceTranslation,
				and(
					eq(workExperienceTranslation.work_id, workExperience.id),
					eq(workExperienceTranslation.lang_code, lang)
				)
			)
			.orderBy(desc(workExperience.id));
		if (!resume_work_experience) throw new Error('Post not found');

		const aboutMe = await db.query.about.findFirst({
			with: {
				translations: { where: eq(aboutTranslation.lang_code, lang), limit: 1 },
				resumeFiles: { where: eq(resumeFile.lang_code, lang), limit: 1 },
				socialLinks: {
					orderBy: (socialLink, { asc }) => [asc(socialLink.id)]
				}
			}
		});

		if (!aboutMe) {
			throw error(404, 'Not Found!');
		}

		return {
			id: aboutMe.id,
			website: aboutMe.website,
			email: aboutMe.email,
			phone: aboutMe.phone,
			age: aboutMe.age,
			freelance: aboutMe.freelance,
			latitude: aboutMe.latitude,
			longitude: aboutMe.longitude,
			translation: aboutMe.translations?.[0] ?? null,
			resumeFile: aboutMe.resumeFiles?.[0] ?? null,
			socialLinks: aboutMe.socialLinks,
			latestJob: resume_work_experience?.[0] ?? null
		};
	} catch (err) {
		throw error(404, 'Not Found!');
	}
}
