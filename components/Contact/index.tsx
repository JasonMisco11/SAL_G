"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"; // Icons

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Interior Design",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- OPTION 1: Send via Nodemailer ---
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        alert("Booking request sent successfully!");
        setFormData({ name: "", email: "", service: "Interior Design", message: "" });
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  // --- OPTION 2: Send via WhatsApp ---
  const handleWhatsApp = () => {
    const { name, service, message } = formData;
    if (!name || !message) {
      alert("Please fill in your name and message first.");
      return;
    }

    // Format the message for WhatsApp
    const text = `Hello Vevadecor, my name is ${name}. I am interested in ${service}. Message: ${message}`;
    const encodedText = encodeURIComponent(text);
    
    // Open WhatsApp Web/App
    window.open(`https://wa.me/${siteConfig.contact.phone.replace('+', '')}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#1a1a1a] text-white">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Contact Info */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Start your project today</h2>
            <p className="text-gray-400 text-lg max-w-md">
              Ready to transform your space? Book a consultation with us or send us a message directly.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-white">
                <Mail size={24} />
              </div>
             <div>
                {/* Fixed: Changed <p> to <a> */}
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
                {/* Fixed: Changed <p> to <a> */}
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
                <p className="text-sm text-gray-400 font-medium">Visit Us</p>
                <p className="text-lg font-semibold">{siteConfig.contact.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Booking Form */}
        <div className="bg-white text-black p-8 md:p-10 rounded-sm shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">Book a Consultation</h3>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Full Name</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors bg-gray-50"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors bg-gray-50"
                    placeholder="john@example.com"
                />
                </div>
                <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-semibold text-gray-700">Service Interest</label>
                <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors bg-gray-50 h-full"
                >
                    <option>Interior Design</option>
                    <option>Architecture</option>
                    <option>Lighting Design</option>
                    <option>Consultation</option>
                </select>
                </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Message</label>
              <textarea 
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-black transition-colors bg-gray-50 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-2">
                {/* Submit via Email */}
                <button 
                type="submit" 
                disabled={loading}
                className="flex-1 bg-black text-white py-3 font-semibold rounded-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                >
                {loading ? <Loader2 className="animate-spin" /> : "Send Request"}
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