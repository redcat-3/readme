/*
  Warnings:

  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `publishAt` on the `Post` table. All the data in the column will be lost.
  - Added the required column `publish_at` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "postId",
DROP COLUMN "publishAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "post_id" SERIAL NOT NULL,
ADD COLUMN     "publish_at" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("post_id");
