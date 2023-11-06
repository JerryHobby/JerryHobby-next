-- AddForeignKey
ALTER TABLE `Airports` ADD CONSTRAINT `Airports_iso_region_fkey` FOREIGN KEY (`iso_region`) REFERENCES `Regions`(`code`) ON DELETE SET NULL ON UPDATE CASCADE;
