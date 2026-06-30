/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, ChangeEvent } from "react";
import { Send, CheckCircle2, AlertTriangle, Mail } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    setStatus("submitting");

    try {
      // TODO: Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="p-6 md:p-10 rounded-2xl bg-[#1E1E1E] border border-white/5 relative overflow-hidden shadow-2xl">
      {status === "success" ? (
        <div className="py-12 px-4 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Message Sent</h3>
            <p className="text-zinc-400 text-sm max-w-sm mx-auto">
              Thanks for reaching out. I'll review your message and get back to you as soon as possible.
            </p>
          </div>
          <button
            onClick={() => setStatus("idle")}
            className="px-6 py-2.5 bg-zinc-800 text-white hover:bg-zinc-700 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                Name <span className="text-primary">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                Email <span className="text-primary">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
              <label htmlFor="subject" className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300"
            />
          </div>

          <div className="space-y-2">
              <label htmlFor="message" className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
            />
          </div>

          {status === "error" && (
            <div className="flex items-start gap-3 p-4 bg-red-950/30 border border-red-900/40 text-red-400 rounded-xl text-xs leading-relaxed">
              <AlertTriangle className="w-4.5 h-4.5 shrink-0 text-red-400 mt-0.5" />
              <div>
                <span className="font-bold uppercase tracking-wider block mb-0.5">Error</span>
                {errorMessage}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 bg-primary hover:bg-primary-container text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
