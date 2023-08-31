/*
  Warnings:

  - The values [PUBLISHED,DRAFT] on the enum `PostStatus` will be removed. If these variants are still used in the database, this will fail.
  - The values [VIDEO,TEXT,QUOTE,PHOTO,REF] on the enum `PostType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PostStatus_new" AS ENUM ('published', 'draft');
ALTER TABLE "posts" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "posts" ALTER COLUMN "status" TYPE "PostStatus_new" USING ("status"::text::"PostStatus_new");
ALTER TYPE "PostStatus" RENAME TO "PostStatus_old";
ALTER TYPE "PostStatus_new" RENAME TO "PostStatus";
DROP TYPE "PostStatus_old";
ALTER TABLE "posts" ALTER COLUMN "status" SET DEFAULT 'draft';
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PostType_new" AS ENUM ('video', 'text', 'quote', 'photo', 'reference');
ALTER TABLE "posts" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "posts" ALTER COLUMN "type" TYPE "PostType_new" USING ("type"::text::"PostType_new");
ALTER TYPE "PostType" RENAME TO "PostType_old";
ALTER TYPE "PostType_new" RENAME TO "PostType";
DROP TYPE "PostType_old";
ALTER TABLE "posts" ALTER COLUMN "type" SET DEFAULT 'text';
COMMIT;

-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "type" SET DEFAULT 'text',
ALTER COLUMN "status" SET DEFAULT 'draft';
