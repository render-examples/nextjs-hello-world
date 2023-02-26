/*
  Warnings:

  - You are about to drop the column `SubtopicsId` on the `Topic` table. All the data in the column will be lost.
  - You are about to drop the `Subtopic` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Topic" DROP COLUMN "SubtopicsId",
ADD COLUMN     "superTopicId" INTEGER,
ADD COLUMN     "topicId" INTEGER;

-- DropTable
DROP TABLE "Subtopic";

-- CreateTable
CREATE TABLE "Note" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "topicId" INTEGER,

    CONSTRAINT "Note_pkey" PRIMARY KEY ("id")
);
