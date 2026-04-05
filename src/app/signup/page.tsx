"use client";

import { useState } from "react";
import { useI18n } from "@/components/LanguageProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signUpUser } from "@/actions/auth";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const { t } = useI18n();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const result = await signUpUser(formData);

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
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900">{t("signup") || "Create an Account"}</h1>
        <p className="mt-4 max-w-2xl text-gray-600 mx-auto">
          Sign up with your name, email, and password to get started.
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
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">Name</label>
            <input 
              required
              id="name"
              name="name" 
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
            </div>
            <div className="relative">
              <input 
                required
                id="password"
                name="password" 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-500 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
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
            ) : "Sign Up"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <Link href="/login" className="font-semibold text-black hover:underline">Log In</Link>
        </p>
      </div>
    </section>
  );
}
