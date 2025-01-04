import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}
// This checks if globalThis.prisma already exists:
// If yes, it reuses the existing instance to avoid creating multiple Prisma Client instances.
// If no, it creates a new PrismaClient instance and assigns it to client.
export const client = globalThis.prisma || new PrismaClient()

// If you're in a development environment, assign the Prisma Client instance to globalThis.prisma:
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client


// This code sets up a Prisma Client instance, with a mechanism to ensure that the client is 
// reused across multiple requests or module reloads in a non-production environment.