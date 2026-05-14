import { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  Home,
  Handshake,
  Shield,
  Phone,
  MessageCircle,
  ChevronRight,
  MapPin,
  Facebook,
  Clock,
  Users,
  Star,
} from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Đỗ Thị Loan (LoanAnLand) — Chuyên gia bất động sản khu vực Anland Nam Cường & The Charm An Hưng, Hà Đông, Hà Nội.",
};

const services = [
  {
    icon: Home,
    title: "Mua bán căn hộ",
    description:
      "Tư vấn và hỗ trợ mua bán căn hộ tại Anland Nam Cường và The Charm An Hưng với giá tốt nhất thị trường.",
  },
  {
    icon: Handshake,
    title: "Cho thuê căn hộ",
    description:
      "Kết nối chủ nhà và người thuê nhanh chóng, đảm bảo quyền lợi cả hai bên.",
  },
  {
    icon: Shield,
    title: "Hỗ trợ pháp lý A-Z",
    description:
      "Hỗ trợ toàn bộ thủ tục pháp lý: hợp đồng, công chứng, sang tên, thuế... để bạn an tâm giao dịch.",
  },
];

const milestones = [
  { year: "2019", event: "Bắt đầu hoạt động môi giới bất động sản" },
  { year: "2021", event: "Chuyên sâu khu vực Anland Nam Cường" },
  { year: "2023", event: "Mở rộng sang The Charm An Hưng" },
  {
    year: "2024",
    event: "Được cấp Chứng chỉ Môi giới BĐS — Sở Xây dựng Hà Nội",
  },
  { year: "2025", event: "200+ giao dịch thành công, ra mắt LoanAnLand" },
];

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24 bg-background">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Về LoanAnLand
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6">
                Đỗ Thị Loan
                <span className="block text-xl font-medium text-white/60 mt-2">
                  (Nam Loan) — Chuyên viên BĐS
                </span>
              </h1>
              <p className="text-white/70 leading-relaxed text-lg mb-8">
                Với hơn 5 năm gắn bó cùng khu vực An Hưng, Hà Đông, tôi hiểu rõ
                từng góc nhỏ, từng căn hộ, từng lợi thế của mỗi dự án. Tôi không
                chỉ bán nhà — tôi giúp bạn tìm thấy <em>tổ ấm</em>.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Clock, label: "5+ năm kinh nghiệm" },
                  { icon: Users, label: "200+ giao dịch" },
                  { icon: Star, label: "Chứng chỉ hành nghề" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2">
                    <stat.icon size={18} className="text-accent" />
                    <span className="text-white/80 text-sm font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            {/* Photo placeholder */}
            <ScrollAnimation delay={0.2}>
              <div className="relative max-w-sm mx-auto">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <Image
                    src="/images/agent-photo.png"
                    alt="Đỗ Thị Loan"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimation>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Câu chuyện của tôi
              </span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                Từ đam mê đến chuyên nghiệp
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.1}>
              <div className="prose prose-lg max-w-none text-text-primary">
                <p className="leading-relaxed mb-4">
                  Tôi bắt đầu bước vào lĩnh vực bất động sản từ năm 2019. Ngay từ
                  những ngày đầu, tôi đã chọn khu vực Hà Đông làm "địa bàn"
                  chính vì nhận thấy tiềm năng phát triển rất lớn của khu vực này.
                </p>
                <p className="leading-relaxed mb-4">
                  Qua hơn 5 năm, tôi đã đồng hành cùng hàng trăm gia đình tìm được
                  ngôi nhà mơ ước tại <strong>Anland Nam Cường</strong> và{" "}
                  <strong>The Charm An Hưng</strong>. Mỗi giao dịch thành công không
                  chỉ là niềm vui nghề nghiệp, mà còn là sự tin tưởng mà khách hàng
                  dành cho tôi.
                </p>
                <p className="leading-relaxed">
                  Năm 2024, tôi vinh dự được Sở Xây dựng Hà Nội cấp{" "}
                  <strong>Chứng chỉ hành nghề Môi giới Bất Động Sản</strong> — minh
                  chứng cho sự chuyên nghiệp và cam kết phục vụ khách hàng tốt nhất.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Hành trình
              </span>
              <h2 className="text-3xl font-bold text-primary mt-2">
                Các cột mốc quan trọng
              </h2>
            </div>
          </ScrollAnimation>

          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, index) => (
              <ScrollAnimation key={milestone.year} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm">
                        {milestone.year}
                      </span>
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 bg-accent/20 mt-2" />
                    )}
                  </div>
                  <div className="pt-3">
                    <p className="text-text-primary font-medium">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Uy tín & Chuyên nghiệp
              </span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-6">
                Chứng chỉ hành nghề
              </h2>
              <p className="text-text-primary leading-relaxed mb-4">
                Được cấp bởi <strong>Sở Xây dựng Hà Nội</strong> vào ngày
                15/05/2024, hiệu lực 5 năm. Chứng chỉ Môi giới Bất Động Sản là cam
                kết về năng lực chuyên môn và đạo đức nghề nghiệp.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Đào tạo chuyên sâu về pháp luật bất động sản",
                  "Kỹ năng thẩm định và định giá tài sản",
                  "Am hiểu quy trình giao dịch và thủ tục pháp lý",
                  "Cam kết bảo vệ quyền lợi khách hàng",
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

            <ScrollAnimation delay={0.2}>
              <div className="relative max-w-md mx-auto">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-md">
                  <Image
                    src="/images/license.jpg"
                    alt="Chứng chỉ Môi giới Bất Động Sản"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Dịch vụ
              </span>
              <h2 className="text-3xl font-bold text-primary mt-2">
                Tôi có thể giúp gì cho bạn?
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={service.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl border border-border p-8 card-hover text-center">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <service.icon size={26} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="section-container text-center">
          <ScrollAnimation>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Bạn cần tư vấn?
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Liên hệ ngay để được tư vấn miễn phí về mua bán, cho thuê căn hộ
              tại Anland Nam Cường và The Charm An Hưng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://zalo.me/0389980626"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-base"
              >
                <MessageCircle size={18} />
                Nhắn Zalo tư vấn
              </a>
              <a href="tel:0389980626" className="btn-outline !border-white/30 !text-white hover:!bg-white/10 hover:!text-white text-base">
                <Phone size={18} />
                Gọi: 0389 980 626
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
