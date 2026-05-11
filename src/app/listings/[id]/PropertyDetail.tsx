"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Bed,
  Bath,
  Maximize2,
  Compass,
  Building2,
  Eye,
  Sofa,
  Phone,
  MessageCircle,
  Share2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
} from "lucide-react";
import PropertyCard from "@/components/listings/PropertyCard";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import {
  Property,
  formatPrice,
  formatArea,
  getTypeLabel,
  getStatusInfo,
  getFurnishedLabel,
} from "@/lib/utils";

interface PropertyDetailProps {
  property: Property;
  similarProperties: Property[];
}

export default function PropertyDetail({
  property,
  similarProperties,
}: PropertyDetailProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const statusInfo = getStatusInfo(property.status);

  const specs = [
    { icon: Maximize2, label: "Diện tích", value: formatArea(property.area) },
    { icon: Bed, label: "Phòng ngủ", value: `${property.bedrooms} phòng` },
    { icon: Bath, label: "Phòng VS", value: `${property.bathrooms} phòng` },
    { icon: Compass, label: "Hướng", value: property.direction },
    {
      icon: Building2,
      label: "Tầng",
      value: property.floor ? `Tầng ${property.floor}` : "Liên hệ",
    },
    { icon: Eye, label: "View", value: property.view },
    { icon: Sofa, label: "Nội thất", value: getFurnishedLabel(property.furnished) },
    {
      icon: Calendar,
      label: "Ngày đăng",
      value: new Date(property.postedAt).toLocaleDateString("vi-VN"),
    },
  ];

  return (
    <div className="pt-20 md:pt-24 pb-16 bg-background min-h-screen">
      <div className="section-container">
        {/* Breadcrumb */}
        <ScrollAnimation>
          <div className="flex items-center gap-2 text-sm text-muted mb-6">
            <Link
              href="/listings"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <ArrowLeft size={16} />
              Danh sách căn hộ
            </Link>
            <span>/</span>
            <span className="text-primary font-medium truncate">
              {property.title}
            </span>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <ScrollAnimation>
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary/5 to-accent/5">
                {property.images && property.images.length > 0 ? (
                  <Image
                    src={`/images/properties/${property.images[0]}`}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Maximize2 size={48} className="text-primary/15 mx-auto mb-3" />
                      <span className="text-primary/25 text-lg font-medium">
                        {formatArea(property.area)} — {property.projectName}
                      </span>
                    </div>
                  </div>
                )}

                {/* Status badge */}
                {property.status !== "available" && (
                  <div className="absolute top-4 right-4">
                    <span
                      className={`${statusInfo.colorClass} text-white text-sm font-semibold px-4 py-2 rounded-full`}
                    >
                      {statusInfo.label}
                    </span>
                  </div>
                )}

                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full">
                    {getTypeLabel(property.type)}
                  </span>
                </div>
              </div>
            </ScrollAnimation>

            {/* Title & Price */}
            <ScrollAnimation delay={0.1}>
              <div className="mb-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h1 className="text-2xl md:text-3xl font-bold text-primary">
                    {property.title}
                  </h1>
                </div>
                <div className="flex items-center gap-3 text-muted text-sm mb-4">
                  <MapPin size={14} />
                  <span>{property.projectName}, An Hưng, Hà Đông, Hà Nội</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-accent">
                    {formatPrice(property.price, property.type)}
                  </span>
                  {property.negotiable && (
                    <span className="text-sm text-muted bg-accent/10 px-3 py-1 rounded-full">
                      Có thương lượng
                    </span>
                  )}
                </div>
              </div>
            </ScrollAnimation>

            {/* Specs Grid */}
            <ScrollAnimation delay={0.2}>
              <div className="bg-white rounded-2xl border border-border p-6 mb-8">
                <h2 className="text-lg font-semibold text-primary mb-4">
                  Thông tin chi tiết
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-start gap-3 p-3 rounded-xl bg-background"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <spec.icon size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted">{spec.label}</p>
                        <p className="text-sm font-semibold text-primary">
                          {spec.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Description */}
            <ScrollAnimation delay={0.3}>
              <div className="bg-white rounded-2xl border border-border p-6 mb-8">
                <h2 className="text-lg font-semibold text-primary mb-4">
                  Mô tả
                </h2>
                <p className="text-text-primary leading-relaxed">
                  {property.description}
                </p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ScrollAnimation delay={0.2}>
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <div className="bg-white rounded-2xl border border-border p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary">L</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Đỗ Thị Loan</h3>
                      <p className="text-xs text-muted">
                        Chuyên viên BĐS — LoanAnLand
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="https://zalo.me/0389980626"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-accent w-full"
                    >
                      <MessageCircle size={18} />
                      Nhắn Zalo tư vấn
                    </a>
                    <a href="tel:0389980626" className="btn-outline w-full">
                      <Phone size={18} />
                      Gọi: 0389 980 626
                    </a>
                  </div>

                  <p className="text-xs text-muted text-center mt-4">
                    Liên hệ ngay để được tư vấn miễn phí
                  </p>
                </div>

                {/* Quick Info */}
                <div className="bg-primary/5 rounded-2xl p-6">
                  <h3 className="font-semibold text-primary text-sm mb-3">
                    Tại sao chọn LoanAnLand?
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Thông tin minh bạch, giá tốt nhất",
                      "Hỗ trợ thủ tục pháp lý A-Z",
                      "Chứng chỉ hành nghề chính thức",
                      "5+ năm kinh nghiệm khu vực",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-text-primary"
                      >
                        <span className="text-accent mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-16">
            <ScrollAnimation>
              <h2 className="text-2xl font-bold text-primary mb-8">
                Căn hộ tương tự
              </h2>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((p, i) => (
                <ScrollAnimation key={p.id} delay={i * 0.1}>
                  <PropertyCard property={p} />
                </ScrollAnimation>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
