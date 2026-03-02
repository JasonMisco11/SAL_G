import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--color-primary-dark] text-white pt-16 pb-8 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <Image src={siteConfig.logo} alt="Logo" width={120} height={120} />
            <p className="mt-2 text-gray-400 leading-relaxed mb-4">
              {siteConfig.slogan}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Delivering elegant, functional, and cost-effective interior
              spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {siteConfig.nav_Links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:underline transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {siteConfig.services.slice(0, 4).map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-white transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <span className="text-gray-400">
                  {siteConfig.contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm">
              Transforming Spaces, Inspiring Lifestyles
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
