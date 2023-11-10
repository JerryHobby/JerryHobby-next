/*
  Warnings:

  - You are about to drop the `Airports` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Countries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Frequencies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Navaids` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Regions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Runways` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Airports` DROP FOREIGN KEY `Airports_iso_country_fkey`;

-- DropForeignKey
ALTER TABLE `Airports` DROP FOREIGN KEY `Airports_iso_region_fkey`;

-- DropForeignKey
ALTER TABLE `Article` DROP FOREIGN KEY `Article_userId_fkey`;

-- DropTable
DROP TABLE `Airports`;

-- DropTable
DROP TABLE `Countries`;

-- DropTable
DROP TABLE `Frequencies`;

-- DropTable
DROP TABLE `Navaids`;

-- DropTable
DROP TABLE `Regions`;

-- DropTable
DROP TABLE `Runways`;
