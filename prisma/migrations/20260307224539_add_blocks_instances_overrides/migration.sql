-- CreateEnum
CREATE TYPE "BlockType" AS ENUM ('Experience', 'Project', 'Education', 'Skill', 'Certification');

-- CreateTable
CREATE TABLE "Block" (
    "id" TEXT NOT NULL,
    "type" "BlockType" NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "date_start" DATE,
    "date_end" DATE,
    "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "media_urls" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Block_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Instance" (
    "id" TEXT NOT NULL,
    "category_slug" TEXT NOT NULL,
    "settings" JSONB NOT NULL,
    "tag_ids" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Instance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Override" (
    "id" TEXT NOT NULL,
    "instance_id" TEXT NOT NULL,
    "block_id" TEXT NOT NULL,
    "modified_body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Override_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instance_category_slug_key" ON "Instance"("category_slug");

-- CreateIndex
CREATE UNIQUE INDEX "Override_instance_id_block_id_key" ON "Override"("instance_id", "block_id");

-- AddForeignKey
ALTER TABLE "Override" ADD CONSTRAINT "Override_instance_id_fkey" FOREIGN KEY ("instance_id") REFERENCES "Instance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Override" ADD CONSTRAINT "Override_block_id_fkey" FOREIGN KEY ("block_id") REFERENCES "Block"("id") ON DELETE CASCADE ON UPDATE CASCADE;
