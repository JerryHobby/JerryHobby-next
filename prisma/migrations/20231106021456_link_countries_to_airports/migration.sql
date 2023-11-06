-- AddForeignKey
ALTER TABLE `Airports` ADD CONSTRAINT `Airports_iso_country_fkey` FOREIGN KEY (`iso_country`) REFERENCES `Countries`(`code`) ON DELETE SET NULL ON UPDATE CASCADE;
