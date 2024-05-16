/*
  Warnings:

  - Added the required column `ended` to the `mathes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mathes` ADD COLUMN `ended` BOOLEAN NOT NULL;
