/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Products` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Products` MODIFY `description` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Products_name_key` ON `Products`(`name`);
