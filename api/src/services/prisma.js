import { PrismaClient } from '@prisma/client';
let prisma = null;

if (!prisma) {
  prisma = new PrismaClient();
}

export default prisma;
