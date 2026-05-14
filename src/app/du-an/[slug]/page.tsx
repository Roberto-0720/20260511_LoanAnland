import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  MapPin,
  Building2,
  Calendar,
  Maximize2,
  Home,
  Layers,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
  TreePine,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Waves,
  Baby,
  Utensils,
  Footprints,
  Dumbbell,
  ShieldCheck,
  Snowflake,
  CheckCircle2,
  LayoutGrid,
  Sofa,
  type LucideIcon,
} from "lucide-react";
import PropertyCard from "@/components/listings/PropertyCard";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import UnitDesignsGallery from "@/components/projects/UnitDesignsGallery";
import { projects, getProjectBySlug } from "@/data/projects";
import properties from "@/data/properties.json";
import { Property } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  TreePine,
  GraduationCap,
  Sparkles,
  Stethoscope,
  ShoppingBag,
  Waves,
  Baby,
  Utensils,
  Footprints,
  Dumbbell,
  ShieldCheck,
  Snowflake,
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.name} — Tổng quan dự án`,
    description: `${project.tagline}. ${project.developer}. ${project.shortAddress}. LH: 0389980626`,
    openGraph: {
      title: `${project.name} | LoanAnLand`,
      description: project.tagline,
      images: [`${project.imagesDir}/${project.heroImage}`],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const projectListings = (properties as Property[]).filter(
    (p) => p.project === project.dataSlug && p.status === "available"
  );

  const heroSrc = `${project.imagesDir}/${project.heroImage}`;

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary-dark" />
        <Image
          src={heroSrc}
          alt={project.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />

        <div className="relative h-full section-container flex flex-col justify-end pb-16 md:pb-24">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 text-white text-xs md:text-sm font-medium px-4 py-2 rounded-full mb-5 w-fit">
              <Building2 size={14} />
              {project.developer}
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              {project.name}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mb-3">
              {project.tagline}
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <p className="flex items-center gap-2 text-white/80 text-sm md:text-base mb-8">
              <MapPin size={16} className="text-accent" />
              {project.shortAddress}
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <div className="flex flex-wrap gap-3">
              <a href="#listings" className="btn-accent">
                <Home size={18} />
                Xem căn đang giao dịch
              </a>
              <a
                href="https://zalo.me/0389980626"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-white/10 !text-white hover:!bg-white/20 backdrop-blur-sm border border-white/30"
              >
                <MessageCircle size={18} />
                Nhắn Zalo tư vấn
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="relative -mt-20 z-10 section-container">
        <ScrollAnimation>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 bg-white rounded-2xl shadow-xl p-5 md:p-7 border border-border">
            <StatBox
              icon={Maximize2}
              label="Tổng diện tích"
              value={project.totalArea}
            />
            <StatBox icon={Layers} label="Quy mô" value={project.blocks} />
            <StatBox
              icon={Home}
              label="Loại căn hộ"
              value={project.unitTypes.join(" • ")}
            />
            <StatBox icon={Calendar} label="Bàn giao" value={project.handover} />
          </div>
        </ScrollAnimation>
      </section>

      {/* OVERVIEW + HIGHLIGHTS */}
      <section className="section-container section-padding">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Description */}
          <ScrollAnimation className="lg:col-span-3">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 block">
              Tổng quan dự án
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Không gian sống đẳng cấp
              <br />
              giữa lòng Hà Đông
            </h2>
            <p className="text-text-primary/80 text-base md:text-lg leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              <InfoRow label="Chủ đầu tư" value={project.developer} />
              <InfoRow label="Vị trí" value={project.shortAddress} />
              {project.buildingDensity && (
                <InfoRow
                  label="Mật độ xây dựng"
                  value={project.buildingDensity}
                />
              )}
              {project.totalUnits && (
                <InfoRow label="Số căn" value={project.totalUnits} />
              )}
            </div>
          </ScrollAnimation>

          {/* Highlights */}
          <ScrollAnimation className="lg:col-span-2" delay={0.15}>
            <div className="bg-primary text-white rounded-2xl p-7 md:p-8 sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="text-accent" size={22} />
                <h3 className="text-xl font-bold">Điểm nổi bật</h3>
              </div>
              <ul className="space-y-4">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <span className="text-white/90 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-white section-padding">
        <div className="section-container">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 block">
                Tiện ích nội khu
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Đặc quyền sống của cư dân
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {project.amenities.map((a, i) => {
              const Icon = iconMap[a.icon] ?? Sparkles;
              return (
                <ScrollAnimation key={i} delay={i * 0.05}>
                  <div className="group bg-background hover:bg-primary hover:text-white rounded-2xl p-6 md:p-7 text-center transition-all duration-300 border border-border hover:border-primary card-hover">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 group-hover:bg-accent text-accent group-hover:text-white mb-4 transition-colors">
                      <Icon size={26} />
                    </div>
                    <p className="font-semibold text-base md:text-lg">
                      {a.label}
                    </p>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATION & CONNECTIONS */}
      <section className="section-container section-padding">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollAnimation>
            <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 block">
              Vị trí & Kết nối
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Trung tâm của những tiện ích
            </h2>
            <p className="text-text-primary/80 leading-relaxed mb-8">
              <span className="inline-flex items-start gap-2">
                <MapPin
                  size={18}
                  className="text-accent flex-shrink-0 mt-1"
                />
                <span>{project.address}</span>
              </span>
            </p>

            <ul className="space-y-3">
              {project.connections.map((c, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border"
                >
                  <ArrowRight size={16} className="text-accent flex-shrink-0" />
                  <span className="text-text-primary">{c}</span>
                </li>
              ))}
            </ul>
          </ScrollAnimation>

          <ScrollAnimation delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-border">
              {project.gallery[0] && (
                <Image
                  src={`${project.imagesDir}/${project.gallery[0]}`}
                  alt={`Vị trí ${project.name}`}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-xs text-muted uppercase tracking-wider mb-1">
                  Địa chỉ
                </p>
                <p className="text-primary font-semibold text-sm">
                  {project.shortAddress}
                </p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-white section-padding">
        <div className="section-container">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 block">
                Hình ảnh dự án
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Khám phá {project.name}
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {project.gallery.map((img, i) => (
              <ScrollAnimation key={img} delay={i * 0.05}>
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border group ${
                    i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={`${project.imagesDir}/${img}`}
                    alt={`${project.name} — ảnh ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* UNIT DESIGNS */}
      {project.unitDesigns && project.unitDesigns.length > 0 && (
        <section className="section-container section-padding">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm tracking-widest uppercase mb-3">
                <LayoutGrid size={16} />
                Thiết kế căn hộ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                Mặt bằng các loại căn
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                Mỗi sàn có 11 căn được nhóm thành 6 thiết kế mặt bằng, đáp ứng
                đa dạng nhu cầu từ căn 2 phòng ngủ đến căn góc 3 phòng ngủ.
              </p>
            </div>
          </ScrollAnimation>

          <UnitDesignsGallery
            imagesDir={project.imagesDir}
            unitDesigns={project.unitDesigns}
          />

        </section>
      )}

      {/* INTERIOR HANDOVER */}
      {project.interiorImages && project.interiorImages.length > 0 && (
        <section className="bg-white section-padding">
          <div className="section-container">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 text-accent font-semibold text-sm tracking-widest uppercase mb-3">
                  <Sofa size={16} />
                  Nội thất bàn giao
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                  Tiêu chuẩn bàn giao cao cấp
                </h2>
                <p className="text-muted max-w-2xl mx-auto">
                  Nội thất kiểu khách sạn với thương hiệu HEFELE (Đức),
                  điều hoà LG Multi Inverter, thiết bị điện Hager — sẵn ở ngay
                  khi nhận căn.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 md:gap-4">
              {project.interiorImages.map((item, i) => (
                <ScrollAnimation
                  key={item.image}
                  delay={i * 0.05}
                  className={
                    i === 0
                      ? "lg:col-span-3 lg:row-span-2"
                      : "lg:col-span-3"
                  }
                >
                  <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border h-full">
                    <div
                      className={`relative ${
                        i === 0 ? "aspect-[4/5] lg:aspect-auto lg:h-full" : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={`${project.imagesDir}/${item.image}`}
                        alt={item.caption ?? `Nội thất ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {item.caption && (
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent p-4 pt-12">
                          <p className="text-white text-sm md:text-base font-medium">
                            {item.caption}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AVAILABLE LISTINGS */}
      <section id="listings" className="section-container section-padding scroll-mt-24">
        <ScrollAnimation>
          <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
            <div>
              <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 block">
                Căn hộ đang giao dịch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Tại {project.name}
              </h2>
            </div>
            <Link
              href={`/listings?project=${project.dataSlug}`}
              className="text-accent hover:text-accent-dark font-medium flex items-center gap-2 text-sm md:text-base"
            >
              Xem tất cả
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollAnimation>

        {projectListings.length === 0 ? (
          <ScrollAnimation>
            <div className="text-center py-16 bg-white rounded-2xl border border-border">
              <Home size={40} className="text-muted/40 mx-auto mb-4" />
              <p className="text-muted mb-4">
                Hiện chưa có căn nào đang mở bán tại dự án này.
              </p>
              <a
                href="https://zalo.me/0389980626"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                <MessageCircle size={18} />
                Liên hệ Zalo để được tư vấn
              </a>
            </div>
          </ScrollAnimation>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectListings.slice(0, 6).map((p, i) => (
              <ScrollAnimation key={p.id} delay={i * 0.05}>
                <PropertyCard property={p} />
              </ScrollAnimation>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="section-container pb-16 md:pb-24">
        <ScrollAnimation>
          <div className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-light rounded-3xl p-10 md:p-14 text-center text-white">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Quan tâm dự án {project.name}?
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
                Liên hệ Loan để được tư vấn miễn phí về căn hộ phù hợp, giá tốt
                nhất và hỗ trợ thủ tục A–Z.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="tel:0389980626" className="btn-accent">
                  <Phone size={18} />
                  Gọi 0389 980 626
                </a>
                <a
                  href="https://zalo.me/0389980626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !bg-white !text-primary hover:!bg-white/90"
                >
                  <MessageCircle size={18} />
                  Nhắn Zalo
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}

function StatBox({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1.5 px-2">
      <div className="flex items-center gap-2 text-accent">
        <Icon size={16} />
        <span className="text-xs uppercase tracking-wider font-semibold">
          {label}
        </span>
      </div>
      <p className="text-primary font-bold text-sm md:text-base leading-tight">
        {value}
      </p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 p-3 bg-white rounded-lg border border-border">
      <span className="text-xs text-muted uppercase tracking-wider">
        {label}
      </span>
      <span className="text-primary font-semibold text-sm">{value}</span>
    </div>
  );
}
