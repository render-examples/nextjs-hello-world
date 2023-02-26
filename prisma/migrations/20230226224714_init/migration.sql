/*
  Warnings:

  - You are about to drop the column `tage` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Note" DROP COLUMN "tage",
ADD COLUMN     "tags" TEXT[];
