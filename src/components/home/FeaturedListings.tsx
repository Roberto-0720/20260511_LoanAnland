import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PropertyCard from "@/components/listings/PropertyCard";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import properties from "@/data/properties.json";
import { Property } from "@/lib/utils";

export default function FeaturedListings() {
  const featured = (properties as Property[])
    .filter((p) => p.featured && p.status === "available")
    .slice(0, 6);

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Căn hộ nổi bật
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Lựa chọn hàng đầu cho bạn
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Những căn hộ được chọn lọc kỹ lưỡng từ các dự án Anland Nam Cường
              và The Charm An Hưng
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((property, index) => (
            <ScrollAnimation key={property.id} delay={index * 0.1}>
              <PropertyCard property={property} />
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/listings" className="btn-outline text-base">
              Xem tất cả căn hộ
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
