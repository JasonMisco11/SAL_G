"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Send, Loader2, X } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: [] as string[],
    message: "",
  });

  const serviceOptions = [
    "Residential Interior & Exterior Design",
    "Office & Commercial Interiors",
    "Furniture Design & Supply",
    "Curtains & Window Blinds",
    "Space Planning & 3D Visualization",
    "Interior Renovation & Remodeling",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.services.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: formData.services.join(", "), // Convert array to string for email
        }),
      });

      if (res.ok) {
        alert("Booking request sent successfully!");
        setFormData({
          name: "",
          email: "",
          services: [],
          message: "",
        });
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const { name, services, message } = formData;
    if (!name || !message) {
      alert("Please fill in your name and message first.");
      return;
    }

    if (services.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    const text = `Hello SAF, my name is ${name}. I am interested in ${services.join(", ")}. Message: ${message}`;
    const encodedText = encodeURIComponent(text);

    // Open WhatsApp
    window.open(
      `https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=${encodedText}`,
      "_blank",
    );
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[--color-primary-dark] text-white"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Start your project today
            </h2>
            <p className="text-gray-400 text-lg max-w-md">
              Ready to transform your space? Book a consultation with us or send
              us a message directly.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-white">
                <Mail size={24} />
              </div>
              <div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm text-gray-400 font-medium hover:text-white transition-colors block"
                >
                  Email Us
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-lg font-semibold hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-white">
                <Phone size={24} />
              </div>
              <div>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-sm text-gray-400 font-medium hover:text-white transition-colors block"
                >
                  Call / WhatsApp
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-lg font-semibold hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-white">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">Located in</p>
                <p className="text-lg font-semibold">
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white text-black p-8 md:p-10 rounded-sm shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">Book a Consultation</h3>

          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[--color-primary] focus:ring-1 focus:ring-[--color-primary] transition-all bg-gray-50"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[--color-primary] focus:ring-1 focus:ring-[--color-primary] transition-all bg-gray-50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Service Interest{" "}
                <span className="text-gray-500 font-normal">
                  (Select all that apply)
                </span>
              </label>
              <div className="grid grid-cols-1 gap-2">
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-sm hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => toggleService(service)}
                      className="w-4 h-4 accent-[--color-primary] cursor-pointer"
                    />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>

              {/* Selected services tags */}
              {formData.services.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.services.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center gap-1 bg-[--color-primary] text-white px-3 py-1 rounded-sm text-xs font-medium"
                    >
                      {service}
                      <button
                        type="button"
                        onClick={() => toggleService(service)}
                        className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                      >
                        <X size={12} />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[--color-primary] focus:ring-1 focus:ring-[--color-primary] transition-all bg-gray-50 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-2">
              {/* Submit via Email */}
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[--color-primary] text-white py-3 font-semibold rounded-sm hover:bg-[--color-primary-hover] transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Send Request"
                )}
              </button>

              {/* Submit via WhatsApp */}
              <button
                type="button"
                onClick={handleWhatsApp}
                className="flex-1 border-2 border-[#25D366] text-[#25D366] py-3 font-semibold rounded-sm hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Book via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
