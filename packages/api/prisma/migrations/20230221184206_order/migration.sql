/*
  Warnings:

  - You are about to drop the column `quantity` on the `products` table. All the data in the column will be lost.
  - You are about to drop the `CartItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_productId_fkey";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "orderItems" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "products" DROP COLUMN "quantity";

-- DropTable
DROP TABLE "CartItem";
