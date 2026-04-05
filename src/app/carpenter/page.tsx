import CustomerBookingForm from "@/components/CustomerBookingForm";

export default function CarpenterPage() {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12">
      <div className="max-w-4xl mx-auto px-4 mb-8 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">Need a Carpenter?</h1>
        <p className="mt-4 text-gray-600">Enter your details below to browse and book the best carpenters in your city.</p>
      </div>
      <CustomerBookingForm serviceType="Carpenter" />
    </div>
  );
}
