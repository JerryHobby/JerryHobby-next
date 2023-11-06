/*
  Warnings:

  - Made the column `iso_country` on table `Airports` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Airports` DROP FOREIGN KEY `Airports_iso_country_fkey`;

-- AlterTable
ALTER TABLE `Airports` MODIFY `iso_country` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Airports` ADD CONSTRAINT `Airports_iso_country_fkey` FOREIGN KEY (`iso_country`) REFERENCES `Countries`(`code`) ON DELETE RESTRICT ON UPDATE CASCADE;
