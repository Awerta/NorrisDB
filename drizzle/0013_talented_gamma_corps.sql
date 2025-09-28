CREATE TABLE "about" (
	"id" serial PRIMARY KEY NOT NULL,
	"website" text,
	"email" char(100) NOT NULL,
	"phone" char(30),
	"age" integer,
	"freelance" boolean DEFAULT false NOT NULL,
	"latitude" integer,
	"longitude" integer
);
--> statement-breakpoint
CREATE TABLE "about_translation" (
	"id" serial PRIMARY KEY NOT NULL,
	"about_id" integer NOT NULL,
	"lang_code" char(2) NOT NULL,
	"first_name" char(50) NOT NULL,
	"last_name" char(50) NOT NULL,
	"residence" char(100) NOT NULL,
	"citizenship" char(100) NOT NULL,
	"address" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "resume_file" (
	"id" serial PRIMARY KEY NOT NULL,
	"about_id" integer NOT NULL,
	"lang_code" char(2) NOT NULL,
	"file_url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "social_link" (
	"id" serial PRIMARY KEY NOT NULL,
	"about_id" integer NOT NULL,
	"platform_name" char(50) NOT NULL,
	"icon" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "about_translation" ADD CONSTRAINT "about_translation_about_id_about_id_fk" FOREIGN KEY ("about_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "resume_file" ADD CONSTRAINT "resume_file_about_id_about_id_fk" FOREIGN KEY ("about_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "social_link" ADD CONSTRAINT "social_link_about_id_about_id_fk" FOREIGN KEY ("about_id") REFERENCES "public"."about"("id") ON DELETE cascade ON UPDATE no action;