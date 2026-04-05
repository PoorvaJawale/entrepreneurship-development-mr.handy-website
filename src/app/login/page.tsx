"use client";

import { useState } from "react";
import { useI18n } from "@/components/LanguageProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUser } from "@/actions/auth";

export default function LoginPage() {
  const { t } = useI18n();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const result = await loginUser(formData);

    if (result.success) {
      setMessage({ type: "success", text: result.message + " Redirecting..." });
      setTimeout(() => {
        setLoading(false);
        router.push("/");
      }, 2000);
    } else {
      setMessage({ type: "error", text: result.error || "An error occurred" });
      setLoading(false);
    }
  }

  return (
    <section className="py-14 px-4 max-w-4xl mx-auto flex flex-col items-center min-h-[70vh] justify-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">{t("login_title") || "Welcome Back"}</h1>
        <p className="mt-4 max-w-2xl text-gray-600 mx-auto">
          {t("login_body") || "Sign in to your account with your email and password."}
        </p>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8">
        {message && (
          <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input 
              required
              id="email"
              name="email" 
              type="email" 
              placeholder="hello@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            </div>
            <input 
              required
              id="password"
              name="password" 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-black text-white hover:bg-gray-800 disabled:bg-gray-400 font-medium py-3 rounded-lg transition-colors duration-200 mt-4 shadow-md hover:shadow-lg flex justify-center items-center h-[52px]"
          >
            {loading ? (
               <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
            ) : "Log In"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <Link href="/signup" className="font-semibold text-black hover:underline">Sign Up</Link>
        </p>
      </div>
    </section>
  );
}
