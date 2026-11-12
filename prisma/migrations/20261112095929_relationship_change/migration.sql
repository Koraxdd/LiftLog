/*
  Warnings:

  - You are about to drop the column `userId` on the `ExerciseTemplate` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExerciseTemplate" DROP CONSTRAINT "ExerciseTemplate_userId_fkey";

-- AlterTable
ALTER TABLE "ExerciseTemplate" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_ExerciseTemplateToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ExerciseTemplateToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ExerciseTemplateToUser_B_index" ON "_ExerciseTemplateToUser"("B");

-- AddForeignKey
ALTER TABLE "_ExerciseTemplateToUser" ADD CONSTRAINT "_ExerciseTemplateToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "ExerciseTemplate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseTemplateToUser" ADD CONSTRAINT "_ExerciseTemplateToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
