/*
  Warnings:

  - You are about to drop the column `name` on the `Exercise` table. All the data in the column will be lost.
  - Added the required column `exerciseTemplateId` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Set` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "name",
ADD COLUMN     "exerciseTemplateId" TEXT NOT NULL,
ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Set" ADD COLUMN     "order" INTEGER NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ExerciseTemplate" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "muscleGroup" TEXT NOT NULL,
    "isCustom" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT,

    CONSTRAINT "ExerciseTemplate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_exerciseTemplateId_fkey" FOREIGN KEY ("exerciseTemplateId") REFERENCES "ExerciseTemplate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseTemplate" ADD CONSTRAINT "ExerciseTemplate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
