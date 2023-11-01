-- CreateTable
CREATE TABLE `Account`
(
    `id`                VARCHAR(191) NOT NULL,
    `userId`            VARCHAR(191) NOT NULL,
    `type`              VARCHAR(191) NOT NULL,
    `provider`          VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token`     TEXT         NULL,
    `access_token`      TEXT         NULL,
    `expires_at`        INTEGER      NULL,
    `token_type`        VARCHAR(191) NULL,
    `scope`             VARCHAR(191) NULL,
    `id_token`          TEXT         NULL,
    `session_state`     VARCHAR(191) NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key` (`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session`
(
    `id`           VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId`       VARCHAR(191) NOT NULL,
    `expires`      DATETIME(3)  NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key` (`sessionToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User`
(
    `id`             VARCHAR(191) NOT NULL,
    `name`           VARCHAR(191) NULL,
    `email`          VARCHAR(191) NULL,
    `company`        VARCHAR(191) NULL,
    `emailVerified`  DATETIME(3)  NULL,
    `hashedPassword` VARCHAR(191) NULL,
    `image`          VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key` (`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken`
(
    `identifier` VARCHAR(191) NOT NULL,
    `token`      VARCHAR(191) NOT NULL,
    `expires`    DATETIME(3)  NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key` (`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key` (`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Article`
(
    `id`              INTEGER      NOT NULL AUTO_INCREMENT,
    `date`            DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `title`           VARCHAR(191) NOT NULL,
    `summary`         TEXT         NOT NULL,
    `text`            MEDIUMTEXT   NOT NULL,
    `userId`          VARCHAR(191) NOT NULL,
    `categoryId`      INTEGER      NOT NULL,
    `image`           VARCHAR(191) NOT NULL,
    `tags`            VARCHAR(191) NOT NULL,
    `commentsEnabled` BOOLEAN      NOT NULL,

    UNIQUE INDEX `Article_title_key` (`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category`
(
    `id`       INTEGER      NOT NULL AUTO_INCREMENT,
    `parentId` INTEGER      NULL,
    `name`     VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_name_key` (`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment`
(
    `id`        INTEGER      NOT NULL AUTO_INCREMENT,
    `date`      DATETIME(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `text`      TEXT         NOT NULL,
    `userId`    VARCHAR(191) NOT NULL,
    `articleId` INTEGER      NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Like`
(
    `id`        INTEGER      NOT NULL AUTO_INCREMENT,
    `userId`    VARCHAR(191) NOT NULL,
    `articleId` INTEGER      NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Account`
    ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session`
    ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article`
    ADD CONSTRAINT `Article_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article`
    ADD CONSTRAINT `Article_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment`
    ADD CONSTRAINT `Comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment`
    ADD CONSTRAINT `Comment_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `Article` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like`
    ADD CONSTRAINT `Like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like`
    ADD CONSTRAINT `Like_articleId_fkey` FOREIGN KEY (`articleId`) REFERENCES `Article` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
