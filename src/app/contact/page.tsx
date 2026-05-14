"use client";

import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Facebook,
  MapPin,
  Send,
  Home,
  User,
  Building2,
} from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ContactPage() {
  const [activeForm, setActiveForm] = useState<"seller" | "buyer">("buyer");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-background min-h-screen">
      <div className="section-container">
        {/* Page Header */}
        <ScrollAnimation>
          <div className="text-center mb-12 md:mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Liên hệ
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Kết nối với LoanAnLand
            </h1>
            <p className="text-muted max-w-2xl mx-auto">
              Dù bạn muốn mua, thuê hay gửi bán căn hộ — tôi luôn sẵn sàng hỗ trợ
              bạn. Liên hệ ngay!
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <ScrollAnimation>
              <div className="bg-primary rounded-2xl p-8 text-white mb-6">
                <h2 className="text-xl font-bold mb-6">Thông tin liên hệ</h2>

                <div className="space-y-5">
                  <a
                    href="tel:0389980626"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 mb-0.5">Điện thoại / Zalo</p>
                      <p className="font-semibold text-lg">0389 980 626</p>
                    </div>
                  </a>

                  <a
                    href="https://zalo.me/0389980626"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <MessageCircle size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 mb-0.5">Zalo</p>
                      <p className="font-medium">Nhắn tin tư vấn</p>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/loan.nam.3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <Facebook size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 mb-0.5">Facebook</p>
                      <p className="font-medium">loan.nam.3</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 mb-0.5">Khu vực</p>
                      <p className="font-medium">
                        Khu đô thị Dương Nội, An Hưng, Hà Đông, Hà Nội
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs">
                    Thời gian làm việc: 8:00 – 21:00 hàng ngày
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Agent card */}
            <ScrollAnimation delay={0.1}>
              <div className="bg-white rounded-2xl border border-border p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">L</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Đỗ Thị Loan</h3>
                    <p className="text-xs text-muted">
                      Chứng chỉ Môi giới BĐS — Sở XD Hà Nội
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Chuyên tư vấn mua bán, cho thuê căn hộ tại Anland Nam Cường &
                  The Charm An Hưng.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Forms */}
          <div className="lg:col-span-2">
            <ScrollAnimation delay={0.1}>
              {/* Form Tabs */}
              <div className="flex bg-white rounded-xl p-1.5 border border-border mb-6">
                <button
                  onClick={() => {
                    setActiveForm("buyer");
                    setSubmitted(false);
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeForm === "buyer"
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  <User size={16} />
                  Khách hàng có nhu cầu
                </button>
                <button
                  onClick={() => {
                    setActiveForm("seller");
                    setSubmitted(false);
                  }}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeForm === "seller"
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted hover:text-primary"
                  }`}
                >
                  <Home size={16} />
                  Chủ nhà gửi căn
                </button>
              </div>

              {submitted ? (
                <div className="bg-white rounded-2xl border border-border p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    Gửi thành công!
                  </h3>
                  <p className="text-muted max-w-md mx-auto">
                    Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi trong thời gian sớm
                    nhất qua số điện thoại bạn đã cung cấp.
                  </p>
                </div>
              ) : activeForm === "buyer" ? (
                /* Buyer Form */
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-border p-6 md:p-8"
                >
                  <h2 className="text-lg font-semibold text-primary mb-6">
                    Bạn đang tìm căn hộ?
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Loại nhu cầu <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm 
                                   bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      >
                        <option value="">Chọn loại nhu cầu</option>
                        <option value="buy">Mua căn hộ</option>
                        <option value="rent">Thuê căn hộ</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Diện tích mong muốn
                      </label>
                      <select
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm 
                                   bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      >
                        <option value="">Không giới hạn</option>
                        <option value="50-60">50 – 60 m²</option>
                        <option value="60-70">60 – 70 m²</option>
                        <option value="70-80">70 – 80 m²</option>
                        <option value="80-100">80 – 100 m²</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Ngân sách
                      </label>
                      <select
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm 
                                   bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      >
                        <option value="">Chưa xác định</option>
                        <option value="<5">Dưới 5 tỷ</option>
                        <option value="5-6">5 – 6 tỷ</option>
                        <option value="6-7">6 – 7 tỷ</option>
                        <option value=">7">Trên 7 tỷ</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Nhập số điện thoại"
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm
                                   focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-accent w-full mt-6">
                    <Send size={16} />
                    Gửi yêu cầu tư vấn
                  </button>
                </form>
              ) : (
                /* Seller Form */
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-border p-6 md:p-8"
                >
                  <h2 className="text-lg font-semibold text-primary mb-6">
                    Gửi căn hộ cần bán / cho thuê
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nhập họ và tên"
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm
                                   focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Nhập số điện thoại"
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm
                                   focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Dự án <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm 
                                   bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      >
                        <option value="">Chọn dự án</option>
                        <option value="anland-nam-cuong">Anland Nam Cường</option>
                        <option value="the-charm-an-hung">The Charm An Hưng</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Diện tích (m²)
                      </label>
                      <input
                        type="number"
                        placeholder="VD: 67"
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm
                                   focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Tầng
                      </label>
                      <input
                        type="number"
                        placeholder="VD: 12"
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm
                                   focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Hướng
                      </label>
                      <select
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm 
                                   bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      >
                        <option value="">Chọn hướng</option>
                        <option value="dong-nam">Đông Nam</option>
                        <option value="tay">Tây</option>
                        <option value="dong">Đông</option>
                        <option value="bac">Bắc</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Giá kỳ vọng
                      </label>
                      <input
                        type="text"
                        placeholder="VD: 5.7 tỷ"
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm
                                   focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Loại giao dịch
                      </label>
                      <select
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm 
                                   bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      >
                        <option value="sale">Bán</option>
                        <option value="rent">Cho thuê</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-text-primary mb-1.5">
                        Ghi chú
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Thông tin thêm về căn hộ (nội thất, tình trạng...)"
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm
                                   focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none resize-none"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-accent w-full mt-6">
                    <Send size={16} />
                    Gửi thông tin căn hộ
                  </button>
                </form>
              )}
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
