ALTER TABLE "resume_file" DROP CONSTRAINT "resume_file_about_id_about_id_fk";
--> statement-breakpoint
ALTER TABLE "social_link" DROP CONSTRAINT "social_link_about_id_about_id_fk";
--> statement-breakpoint
ALTER TABLE "resume_file" DROP COLUMN "about_id";--> statement-breakpoint
ALTER TABLE "social_link" DROP COLUMN "about_id";