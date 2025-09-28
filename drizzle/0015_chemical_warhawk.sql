ALTER TABLE "resume_file" ADD COLUMN "about_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "social_link" ADD COLUMN "about_id" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "resume_file" ADD CONSTRAINT "resume_file_about_id_about_id_fk" FOREIGN KEY ("about_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "social_link" ADD CONSTRAINT "social_link_about_id_about_id_fk" FOREIGN KEY ("about_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;