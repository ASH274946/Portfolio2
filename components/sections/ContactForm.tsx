"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 4000);
    } catch {
      setSent(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-zinc-800/80 bg-zinc-950/80 px-4 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 transition-all duration-200 ease-out focus:border-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-600/40";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col gap-3">
      <div>
        <input {...register("name", { required: "Name is required" })} placeholder="Full Name" className={inputClass} />
        {errors.name && <p className="mt-1 text-xs text-red-400/90">{errors.name.message}</p>}
      </div>
      <div>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Email Address"
          className={inputClass}
        />
        {errors.email && <p className="mt-1 text-xs text-red-400/90">{errors.email.message}</p>}
      </div>
      <div>
        <textarea
          {...register("message", { required: "Message is required" })}
          rows={5}
          placeholder="Your Message"
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400/90">{errors.message.message}</p>}
      </div>
      <div className="mt-auto flex">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-5 py-2 text-sm text-zinc-300 transition-all duration-200 ease-out hover:border-zinc-700/80 hover:bg-zinc-800/50 hover:text-zinc-100 disabled:opacity-50"
        >
          {sent ? "Message Sent ✓" : isSubmitting ? "Sending..." : "Send Message →"}
        </button>
      </div>
    </form>
  );
}
