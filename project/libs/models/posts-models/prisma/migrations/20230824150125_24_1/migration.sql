/*
  Warnings:

  - You are about to drop the column `likesCount` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "likesCount",
ADD COLUMN     "likes_count" INTEGER NOT NULL DEFAULT 0;
