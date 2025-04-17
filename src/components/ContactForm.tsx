"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Button from "./Button";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      setError(error.message || "Failed to send message.");
    }

    setLoading(false);
  };

  // Here you would send data to an API or server
  // console.log("Form Submitted:", formData);

  // // Simulate success response
  // setSuccess(true);
  // setFormData({ name: "", email: "", message: "" });
  //};

  return (
    <div className="w-150 mx-auto p-10 rounded-4xl border border-white/15 shadow-md text-white/70">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">Message sent successfully!</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-white/15 rounded"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-white/15 rounded"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label className="block text-white">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-white/15 rounded"
            placeholder="Your Message"
            rows={4}
          />
        </div>
        <div className="flex justify-end">
        <Button  href="/contact" text={loading ? "Sending..." : "Send Message"} className="w-40" />     
         </div>
      </form>
    </div>
  );
}
