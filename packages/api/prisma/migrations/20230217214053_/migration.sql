/*
  Warnings:

  - The primary key for the `CartItem` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id");
