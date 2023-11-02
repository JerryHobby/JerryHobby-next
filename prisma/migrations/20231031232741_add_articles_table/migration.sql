-- CreateTable
CREATE TABLE `Page`
(
    `id`    INTEGER      NOT NULL AUTO_INCREMENT,
    `date`  DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `title` VARCHAR(191) NOT NULL,
    `text`  TEXT         NOT NULL,

    UNIQUE INDEX `Page_title_key` (`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
