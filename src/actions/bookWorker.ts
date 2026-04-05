'use server';

import { prisma } from '@/lib/prisma';

export async function bookWorker(customerName: string, customerCity: string, workerId: string) {
  try {
    const booking = await prisma.booking.create({
      data: {
        workerId,
        customerName,
        customerCity,
      },
    });
    
    return { success: true, booking };
  } catch (error) {
    console.error('Error booking worker:', error);
    return { success: false, error: 'Failed to book worker' };
  }
}
