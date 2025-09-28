import { db } from '$lib/server/db/index';
import { eq, and, desc } from 'drizzle-orm';
import { about, aboutTranslation, socialLink, resumeFile } from '$lib/server/db/schema/index';
import { error } from '@sveltejs/kit';
