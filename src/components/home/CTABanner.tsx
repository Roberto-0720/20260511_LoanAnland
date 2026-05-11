"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, MessageCircle } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function CTABanner() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative section-container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text side */}
              <div className="p-8 md:p-12 bg-primary text-white flex flex-col justify-center">
                <ScrollAnimation>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Bạn muốn bán hoặc
                    <br />
                    cho thuê căn hộ?
                  </h2>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Gửi thông tin cho tôi — tôi sẽ giúp bạn tìm khách hàng phù hợp
                    trong thời gian ngắn nhất.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://zalo.me/0389980626"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 
                                 text-white px-4 py-2.5 rounded-lg transition-colors text-sm font-medium"
                    >
                      <MessageCircle size={16} />
                      Zalo: 0389 980 626
                    </a>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Form side */}
              <div className="p-8 md:p-12">
                <ScrollAnimation delay={0.1}>
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                        <span className="text-2xl">✓</span>
                      </div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        Cảm ơn bạn!
                      </h3>
                      <p className="text-muted text-sm">
                        Tôi sẽ liên hệ lại trong thời gian sớm nhất.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <h3 className="font-semibold text-primary mb-4">
                        Gửi thông tin nhanh
                      </h3>
                      <input
                        type="text"
                        placeholder="Họ và tên"
                        required
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm
                                   focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      />
                      <input
                        type="tel"
                        placeholder="Số điện thoại"
                        required
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm
                                   focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none"
                      />
                      <textarea
                        placeholder="Mô tả ngắn (dự án, diện tích, tầng...)"
                        rows={3}
                        className="w-full rounded-lg border border-border px-4 py-3 text-sm
                                   focus:ring-2 focus:ring-accent/20 focus:border-accent 
                                   transition-all outline-none resize-none"
                      />
                      <button type="submit" className="btn-accent w-full">
                        <Send size={16} />
                        Gửi thông tin
                      </button>
                    </form>
                  )}
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
