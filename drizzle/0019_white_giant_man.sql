CREATE TABLE "message" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" char(100),
	"email" char(100) NOT NULL,
	"message" char(500) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
