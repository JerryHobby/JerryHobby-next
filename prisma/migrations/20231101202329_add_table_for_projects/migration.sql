-- CreateTable
CREATE TABLE `Project`
(
    `id`           INTEGER      NOT NULL AUTO_INCREMENT,
    `date`         DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `title`        VARCHAR(191) NOT NULL,
    `text`         TEXT         NOT NULL,
    `tools`        VARCHAR(191) NOT NULL,
    `url`          VARCHAR(191) NOT NULL,
    `thumbnailUrl` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Project_title_key` (`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
