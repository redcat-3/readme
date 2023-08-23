-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('VIDEO', 'TEXT', 'QUOTE', 'PHOTO', 'REF');

-- CreateTable
CREATE TABLE "Post" (
    "postId" SERIAL NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "author" TEXT NOT NULL,
    "content" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT '',
    "likesCount" INTEGER NOT NULL DEFAULT 0,
    "liked" BOOLEAN NOT NULL,
    "comments" TEXT[],
    "repost" BOOLEAN NOT NULL,
    "originAuthor" TEXT,
    "originId" TEXT,
    "type" "PostType" NOT NULL DEFAULT 'TEXT',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("postId")
);
