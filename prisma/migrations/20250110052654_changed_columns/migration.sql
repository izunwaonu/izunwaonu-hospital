/*
  Warnings:

  - You are about to drop the column `date` on the `appointments` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `appointments` table. All the data in the column will be lost.
  - Added the required column `appointmentDate` to the `appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preferredTime` to the `appointments` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "appointments_date_idx";

-- AlterTable
ALTER TABLE "appointments" DROP COLUMN "date",
DROP COLUMN "time",
ADD COLUMN     "appointmentDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "preferredTime" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "appointments_appointmentDate_idx" ON "appointments"("appointmentDate");
