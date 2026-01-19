'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-100 bg-[#f8fafc]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="ScoreUp RiseUp"
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-[#1f2937]">
              Strategic alliances powering ScoreUp Riseup's growth through trusted partnerships.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#0a2540]">
              Current Partners
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#partners"
                  className="text-[#1f2937] transition-colors hover:text-[#1e40af]"
                >
                  View All Partners
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-[#1f2937] transition-colors hover:text-[#1e40af]"
                >
                  Partnership Inquiry
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#1f2937] transition-colors hover:text-[#1e40af]"
                >
                  Legal & Terms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-[#0a2540]">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#1f2937]">
              <li>
                <a
                  href="tel:+18004217558"
                  className="flex items-start gap-2 transition-colors hover:text-[#1e40af]"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>+1 800 421 7558</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@lmxsolutions.info"
                  className="flex items-start gap-2 transition-colors hover:text-[#1e40af]"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>support@lmxsolutions.info</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    629 Maple Valley Dr, PMB 2013<br />
                    Farmington, MO 63640
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-100 pt-8 text-center text-sm text-[#1f2937]">
          <p>&copy; {currentYear} ScoreUp RiseUp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
