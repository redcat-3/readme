/*
  Warnings:

  - You are about to drop the column `created_at` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `favorites` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `liked` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `originAuthor` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `originId` on the `posts` table. All the data in the column will be lost.
  - The `status` column on the `posts` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "PostStatus" AS ENUM ('PUBLISHED', 'DRAFT');

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "created_at",
ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "favorites" DROP COLUMN "created_at",
ADD COLUMN     "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "description",
DROP COLUMN "liked",
DROP COLUMN "originAuthor",
DROP COLUMN "originId",
ADD COLUMN     "origin_author" TEXT,
ADD COLUMN     "origin_id" TEXT,
ADD COLUMN     "tegs" TEXT[] DEFAULT ARRAY[]::TEXT[],
DROP COLUMN "status",
ADD COLUMN     "status" "PostStatus" NOT NULL DEFAULT 'DRAFT';
