"use server";

import { prisma } from "@/lib/prisma";

export async function submitJoinWorker(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const city = formData.get("city") as string;
    const serviceType = formData.get("serviceType") as string;

    if (!name || !phone || !city || !serviceType) {
      return { success: false, error: "Please fill out all fields." };
    }

    await prisma.worker.create({
      data: {
        name,
        phone,
        city,
        serviceType,
      },
    });

    return { success: true, message: "Thank you for joining as a worker!" };
  } catch (error) {
    console.error("Error creating worker:", error);
    return { success: false, error: "An unexpected error occurred while submitting." };
  }
}
