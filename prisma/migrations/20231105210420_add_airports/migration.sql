-- CreateTable
CREATE TABLE `Airports` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ident` TEXT NULL,
    `type` TEXT NULL,
    `name` TEXT NULL,
    `latitude_deg` DOUBLE NULL,
    `longitude_deg` DOUBLE NULL,
    `elevation_ft` INTEGER NULL,
    `continent` TEXT NULL,
    `iso_country` TEXT NULL,
    `iso_region` TEXT NULL,
    `municipality` TEXT NULL,
    `scheduled_service` TEXT NULL,
    `gps_code` TEXT NULL,
    `iata_code` TEXT NULL,
    `local_code` TEXT NULL,
    `home_link` TEXT NULL,
    `wikipedia_link` TEXT NULL,
    `keywords` TEXT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
