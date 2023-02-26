/*
  Warnings:

  - Added the required column `body` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "body" TEXT NOT NULL,
ADD COLUMN     "links" TEXT[],
ADD COLUMN     "references" TEXT[],
ADD COLUMN     "tage" TEXT[],
ADD COLUMN     "title" TEXT NOT NULL;
