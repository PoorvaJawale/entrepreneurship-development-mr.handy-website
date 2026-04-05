'use server';

import { prisma } from '@/lib/prisma';

export async function getWorkers(serviceType: string, city: string) {
  try {
    const workers = await prisma.worker.findMany({
      where: {
        serviceType,
        city: {
          contains: city,
        },
      },
    });
    return { success: true, workers };
  } catch (error) {
    console.error('Error fetching workers:', error);
    return { success: false, error: 'Failed to fetch workers', workers: [] };
  }
}
