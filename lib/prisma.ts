import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => new PrismaClient();

export const prisma = globalThis.prisma || prismaClientSingleton();

declare global {
	var prisma: ReturnType<typeof prismaClientSingleton> | undefined;
}

if (process.env.NODE_ENV !== 'production') {
	globalThis.prisma = prisma;
}
