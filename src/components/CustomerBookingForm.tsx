"use client";

import { useState } from "react";
import { getWorkers } from "@/actions/getWorkers";
import { bookWorker } from "@/actions/bookWorker";
import { Worker } from "@prisma/client";

export default function CustomerBookingForm({ serviceType }: { serviceType: string }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bookingMessage, setBookingMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!city.trim()) return;
    setLoading(true);
    setBookingMessage(null);
    setHasSearched(true);
    
    const result = await getWorkers(serviceType, city.trim());
    if (result.success) {
      setWorkers(result.workers);
    } else {
      setWorkers([]);
    }
    setLoading(false);
  }

  async function handleBook(workerId: string) {
    if (!name.trim()) {
      setBookingMessage({ type: "error", text: "Please enter your name first." });
      window.scrollTo(0, 0);
      return;
    }

    setLoading(true);
    const result = await bookWorker(name.trim(), city.trim(), workerId);
    if (result.success) {
      setBookingMessage({ type: "success", text: "Booking confirmed successfully! The worker will contact you soon." });
      setWorkers([]); // Clear workers after booking
      setHasSearched(false); // Hide the section
    } else {
      setBookingMessage({ type: "error", text: result.error || "Failed to book" });
    }
    setLoading(false);
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Find a {serviceType}</h2>
        
        {bookingMessage && (
          <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${bookingMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {bookingMessage.text}
          </div>
        )}

        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Your Name</label>
            <input 
              required
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Your City</label>
            <div className="flex gap-2">
              <input 
                required
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder:text-gray-500"
              />
              <button 
                type="submit" 
                disabled={loading}
                className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 disabled:bg-gray-400 whitespace-nowrap transition-colors"
               >
                 {loading ? "Searching..." : "Search"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {hasSearched && !loading && (
        <div className="space-y-6">
          <h3 className="text-xl font-medium px-2">Available Workers</h3>
          {workers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workers.map((worker) => (
                <div key={worker.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {worker.name.charAt(0)}
                  </div>
                  <h4 className="font-semibold text-lg">{worker.name}</h4>
                  <p className="text-gray-500 text-sm mb-4">{worker.city} • {worker.phone}</p>
                  <button 
                    onClick={() => handleBook(worker.id)}
                    disabled={loading}
                    className="w-full mt-auto bg-blue-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-200">
              <h4 className="text-gray-900 font-medium mb-1">No workers found</h4>
              <p className="text-gray-500 text-sm">There are no available {serviceType}s in {city} right now. Try another city.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
