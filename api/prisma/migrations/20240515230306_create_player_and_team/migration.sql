-- CreateTable
CREATE TABLE `players` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `players_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `soccerTeam` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `foundation` DATETIME(3) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `coach` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `soccerTeam_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PlayerToSoccerTeam` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_PlayerToSoccerTeam_AB_unique`(`A`, `B`),
    INDEX `_PlayerToSoccerTeam_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_PlayerToSoccerTeam` ADD CONSTRAINT `_PlayerToSoccerTeam_A_fkey` FOREIGN KEY (`A`) REFERENCES `players`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PlayerToSoccerTeam` ADD CONSTRAINT `_PlayerToSoccerTeam_B_fkey` FOREIGN KEY (`B`) REFERENCES `soccerTeam`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
