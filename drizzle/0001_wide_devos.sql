CREATE TABLE "client" (
	"id" serial PRIMARY KEY NOT NULL,
	"image" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "client_translation" (
	"client_id" integer NOT NULL,
	"lang_code" char(2) NOT NULL,
	"title" char(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "education" (
	"id" serial PRIMARY KEY NOT NULL,
	"institution" char(100) NOT NULL,
	"start_year" integer NOT NULL,
	"end_year" char(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "education_translation" (
	"education_id" integer NOT NULL,
	"lang_code" char(2) NOT NULL,
	"major" char(100) NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "knowledge" (
	"id" serial PRIMARY KEY NOT NULL,
	"order" integer
);
--> statement-breakpoint
CREATE TABLE "knowledge_translation" (
	"knowledge_id" integer NOT NULL,
	"lang_code" char(2) NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "service" (
	"id" serial PRIMARY KEY NOT NULL,
	"image" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "service_translation" (
	"service_id" integer NOT NULL,
	"lang_code" char(2) NOT NULL,
	"title" char(100) NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "skill" (
	"id" serial PRIMARY KEY NOT NULL,
	"category" char(20) NOT NULL,
	"percentage" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "skill_translation" (
	"skill_id" integer NOT NULL,
	"lang_code" char(2) NOT NULL,
	"skill_name" char(100) NOT NULL,
	"badge" char(50)
);
--> statement-breakpoint
CREATE TABLE "work_experience" (
	"id" serial PRIMARY KEY NOT NULL,
	"company" char(100) NOT NULL,
	"start_year" integer NOT NULL,
	"end_year" char(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "work_experience_translation" (
	"work_id" integer NOT NULL,
	"lang_code" char(2) NOT NULL,
	"position" char(100) NOT NULL,
	"description" text
);
--> statement-breakpoint
ALTER TABLE "client_translation" ADD CONSTRAINT "client_translation_client_id_client_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."client"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "education_translation" ADD CONSTRAINT "education_translation_education_id_education_id_fk" FOREIGN KEY ("education_id") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "knowledge_translation" ADD CONSTRAINT "knowledge_translation_knowledge_id_knowledge_id_fk" FOREIGN KEY ("knowledge_id") REFERENCES "public"."knowledge"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "service_translation" ADD CONSTRAINT "service_translation_service_id_service_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."service"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "skill_translation" ADD CONSTRAINT "skill_translation_skill_id_skill_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skill"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "work_experience_translation" ADD CONSTRAINT "work_experience_translation_work_id_work_experience_id_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work_experience"("id") ON DELETE cascade ON UPDATE no action;