"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, ChevronRight } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function AgentSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <ScrollAnimation direction="right">
            <div className="relative">
              {/* Agent photo */}
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
                <Image
                  src="/images/agent-photo.png"
                  alt="Đỗ Thị Loan"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 md:right-4 bg-white rounded-xl shadow-xl p-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="relative w-16 h-12 rounded overflow-hidden border border-border shadow-sm">
                    <Image
                      src="/images/license.jpg"
                      alt="Chứng chỉ Môi giới BĐS"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-primary">
                      Chứng chỉ Môi giới BĐS
                    </p>
                    <p className="text-xs text-muted">
                      Sở Xây dựng Hà Nội
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Content Side */}
          <div>
            <ScrollAnimation>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Về tôi
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Đỗ Thị Loan
                <span className="block text-lg font-medium text-muted mt-1">
                  (Nam Loan)
                </span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.1}>
              <p className="text-text-primary leading-relaxed mb-4">
                Với hơn <strong>5 năm kinh nghiệm</strong> chuyên sâu trong lĩnh vực
                bất động sản tại khu vực Hà Đông, tôi tự hào là người đồng hành
                đáng tin cậy cho mọi nhu cầu an cư của bạn.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                Chuyên tư vấn mua bán, cho thuê căn hộ tại{" "}
                <strong className="text-primary">Anland Nam Cường</strong> và{" "}
                <strong className="text-primary">The Charm An Hưng</strong> — những dự
                án đẳng cấp bậc nhất Hà Đông, Hà Nội.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <ul className="space-y-3 mb-8">
                {[
                  "Tư vấn chọn căn phù hợp nhu cầu & ngân sách",
                  "Hỗ trợ thủ tục pháp lý từ A đến Z",
                  "Thông tin giá cả minh bạch, cập nhật liên tục",
                  "Chứng chỉ Môi giới BĐS — Sở Xây dựng Hà Nội",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ChevronRight
                      size={18}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://zalo.me/0389980626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  <MessageCircle size={18} />
                  Nhắn Zalo tư vấn
                </a>
                <a href="tel:0389980626" className="btn-outline">
                  <Phone size={18} />
                  Gọi: 0389 980 626
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
