import { db } from '$lib/server/db/index';
import { eq, and, desc } from 'drizzle-orm';
import {
	workExperience,
	workExperienceTranslation,
	education,
	educationTranslation,
	skill,
	skillTranslation,
	knowledge,
	knowledgeTranslation,
	service,
	serviceTranslation,
	client
} from '$lib/server/db/schema/index';
import { error } from '@sveltejs/kit';

export async function load({ locals }) {
	const lang = locals.lang || 'en';
	try {
		const resume_work_experience = await db
			.select({
				id: workExperience.id,
				company: workExperience.company,
				start_year: workExperience.start_year,
				end_year: workExperience.end_year,
				lang_code: workExperienceTranslation.lang_code,
				position: workExperienceTranslation.position,
				description: workExperienceTranslation.description
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

		const resume_education = await db
			.select({
				id: education.id,
				start_year: education.start_year,
				end_year: education.end_year,
				lang_code: educationTranslation.lang_code,
				institution: educationTranslation.institution,
				major: educationTranslation.major,
				description: educationTranslation.description
			})
			.from(education)
			.innerJoin(
				educationTranslation,
				and(
					eq(educationTranslation.education_id, education.id),
					eq(educationTranslation.lang_code, lang)
				)
			)
			.orderBy(desc(education.id));
		if (!resume_education) throw new Error('Post not found');

		const resume_skill_language = await db
			.select({
				id: skill.id,
				category: skill.category,
				percentage: skill.percentage,
				icon: skill.icon,
				lang_code: skillTranslation.lang_code,
				skill_name: skillTranslation.skill_name,
				badge: skillTranslation.badge
			})
			.from(skill)
			.where(eq(skill.category, 'language_skill'))
			.innerJoin(
				skillTranslation,
				and(eq(skillTranslation.skill_id, skill.id), eq(skillTranslation.lang_code, lang))
			);
		if (!resume_skill_language) throw new Error('Post not found');

		const resume_coding_skill = await db
			.select({
				id: skill.id,
				category: skill.category,
				percentage: skill.percentage,
				icon: skill.icon,
				lang_code: skillTranslation.lang_code,
				skill_name: skillTranslation.skill_name,
				badge: skillTranslation.badge
			})
			.from(skill)
			.where(eq(skill.category, 'coding_skill'))
			.innerJoin(skillTranslation, and(eq(skillTranslation.skill_id, skill.id)));
		if (!resume_skill_language) throw new Error('Post not found');

		const resume_design_skill = await db
			.select({
				id: skill.id,
				category: skill.category,
				percentage: skill.percentage,
				icon: skill.icon,
				lang_code: skillTranslation.lang_code,
				skill_name: skillTranslation.skill_name,
				badge: skillTranslation.badge
			})
			.from(skill)
			.where(eq(skill.category, 'design_skill'))
			.innerJoin(
				skillTranslation,
				and(eq(skillTranslation.skill_id, skill.id), eq(skillTranslation.lang_code, lang))
			);
		if (!resume_design_skill) throw new Error('Post not found');

		const resume_knowledge = await db
			.select({
				id: knowledge.id,
				order: knowledge.order,
				lang_code: knowledgeTranslation.lang_code,
				content: knowledgeTranslation.content
			})
			.from(knowledge)
			.innerJoin(
				knowledgeTranslation,
				and(
					eq(knowledgeTranslation.knowledge_id, knowledge.id),
					eq(knowledgeTranslation.lang_code, lang)
				)
			);
		if (!resume_knowledge) throw new Error('Post not found');

		const resume_services = await db
			.select({
				id: service.id,
				icon: service.icon,
				lang_code: serviceTranslation.lang_code,
				title: serviceTranslation.title,
				description: serviceTranslation.description
			})
			.from(service)
			.innerJoin(
				serviceTranslation,
				and(eq(serviceTranslation.service_id, service.id), eq(serviceTranslation.lang_code, lang))
			);

		if (!resume_services) throw new Error('Post not found');

		const resume_clients = await db
			.select({
				id: client.id,
				image: client.image,
				name: client.name
			})
			.from(client);

		if (!resume_clients) throw new Error('Post not found');

		return {
			resume_work_experience,
			resume_education,
			resume_skill_set: { resume_skill_language, resume_coding_skill, resume_design_skill },
			resume_knowledge,
			resume_services,
			resume_clients
		};
	} catch (err) {
		throw error(404, 'Not Found!');
	}
}
