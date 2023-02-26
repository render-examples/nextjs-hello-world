-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "SubtopicsId" INTEGER;

-- CreateTable
CREATE TABLE "Subtopic" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subtopic_pkey" PRIMARY KEY ("id")
);
