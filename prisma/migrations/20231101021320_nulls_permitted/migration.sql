-- AlterTable
ALTER TABLE `Article`
    MODIFY `image` VARCHAR(191) NULL,
    MODIFY `tags` VARCHAR(191) NULL,
    MODIFY `commentsEnabled` BOOLEAN NOT NULL DEFAULT true;
