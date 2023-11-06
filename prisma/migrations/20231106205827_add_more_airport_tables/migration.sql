-- CreateTable
CREATE TABLE `Frequencies` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `airport_ref` INTEGER NULL,
    `airport_ident` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `frequency_mhz` DOUBLE NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Navaids` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `filename` VARCHAR(191) NULL,
    `ident` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `frequency_khz` INTEGER NULL,
    `latitude_deg` DOUBLE NULL,
    `longitude_deg` DOUBLE NULL,
    `elevation_ft` INTEGER NULL,
    `iso_country` VARCHAR(191) NULL,
    `dme_frequency_khz` INTEGER NULL,
    `dme_channel` VARCHAR(191) NULL,
    `dme_latitude_deg` DOUBLE NULL,
    `dme_longitude_deg` DOUBLE NULL,
    `dme_elevation_ft` INTEGER NULL,
    `slaved_variation_deg` DOUBLE NULL,
    `magnetic_variation_deg` DOUBLE NULL,
    `usageType` VARCHAR(191) NULL,
    `power` VARCHAR(191) NULL,
    `associated_airport` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Runways` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `airport_ref` INTEGER NULL,
    `airport_ident` VARCHAR(191) NULL,
    `length_ft` INTEGER NULL,
    `width_ft` INTEGER NULL,
    `surface` VARCHAR(191) NULL,
    `lighted` INTEGER NULL,
    `closed` INTEGER NULL,
    `le_ident` VARCHAR(191) NULL,
    `le_latitude_deg` DOUBLE NULL,
    `le_longitude_deg` DOUBLE NULL,
    `le_elevation_ft` INTEGER NULL,
    `le_heading_degT` DOUBLE NULL,
    `le_displaced_threshold_ft` INTEGER NULL,
    `he_ident` VARCHAR(191) NULL,
    `he_latitude_deg` DOUBLE NULL,
    `he_longitude_deg` DOUBLE NULL,
    `he_elevation_ft` INTEGER NULL,
    `he_heading_degT` INTEGER NULL,
    `he_displaced_threshold_ft` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
