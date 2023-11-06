-- CreateTable
CREATE TABLE `Countries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `continent` VARCHAR(191) NULL,
    `wikipedia_link` VARCHAR(191) NULL,
    `keywords` VARCHAR(191) NULL,

    UNIQUE INDEX `Countries_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
-- ALTER TABLE `Airports` ADD CONSTRAINT `Airports_iso_country_fkey` FOREIGN KEY (`iso_country`) REFERENCES `Countries`(`code`) ON DELETE SET NULL ON UPDATE CASCADE;
