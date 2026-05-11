import Link from "next/link";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-2">LoanAnLand</h3>
            <p className="text-white/60 text-sm italic mb-4">
              Chuyên tâm từng căn — An cư vững bước
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Chuyên bất động sản khu vực Anland Nam Cường & The Charm An Hưng,
              Hà Đông, Hà Nội.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Trang chủ" },
                { href: "/listings", label: "Danh sách căn hộ" },
                { href: "/about", label: "Giới thiệu" },
                { href: "/contact", label: "Liên hệ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
              Dự án chuyên
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/listings?project=anland-nam-cuong"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  Anland Nam Cường
                </Link>
              </li>
              <li>
                <Link
                  href="/listings?project=the-charm-an-hung"
                  className="text-white/70 hover:text-accent transition-colors text-sm"
                >
                  The Charm An Hưng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-accent mb-4 text-sm uppercase tracking-wider">
              Liên hệ
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:0389980626"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm group"
                >
                  <Phone
                    size={16}
                    className="text-accent group-hover:scale-110 transition-transform"
                  />
                  0389 980 626
                </a>
              </li>
              <li>
                <a
                  href="https://zalo.me/0389980626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm group"
                >
                  <span className="text-accent font-bold text-xs group-hover:scale-110 transition-transform">
                    Zalo
                  </span>
                  Nhắn Zalo tư vấn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/loan.nam.3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm group"
                >
                  <Facebook
                    size={16}
                    className="text-accent group-hover:scale-110 transition-transform"
                  />
                  Facebook
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Khu đô thị An Hưng, Hà Đông, Hà Nội</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} LoanAnLand. Đỗ Thị Loan — Môi giới BĐS chuyên nghiệp.
          </p>
          <p className="text-white/40 text-xs">
            Chứng chỉ Môi giới BĐS — Sở Xây dựng Hà Nội
          </p>
        </div>
      </div>
    </footer>
  );
}
