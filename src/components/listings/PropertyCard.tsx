import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Maximize2, Compass, MessageCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";
import {
  Property,
  formatPrice,
  formatArea,
  getTypeLabel,
  getStatusInfo,
} from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const statusInfo = getStatusInfo(property.status);
  const isSold = property.status === "sold";

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-border card-hover">
      {/* Image */}
      <Link href={`/listings/${property.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
          {property.images && property.images.length > 0 ? (
            <Image
              src={`/images/properties/${property.images[0]}`}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            /* Placeholder gradient for missing images */
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <div className="text-center">
                <Maximize2 size={32} className="text-primary/20 mx-auto mb-2" />
                <span className="text-primary/30 text-sm font-medium">
                  {formatArea(property.area)}
                </span>
              </div>
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
              {getTypeLabel(property.type)}
            </span>
            {property.status !== "available" && (
              <span
                className={`${statusInfo.colorClass} text-white text-xs font-semibold px-3 py-1 rounded-full`}
              >
                {statusInfo.label}
              </span>
            )}
          </div>

          {/* Project badge */}
          <div className="absolute bottom-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
              {property.projectName}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <Link href={`/listings/${property.id}`}>
          <h3
            className={`font-semibold text-lg mb-2 group-hover:text-accent transition-colors line-clamp-1 ${
              isSold ? "text-muted line-through" : "text-primary"
            }`}
          >
            {property.title}
          </h3>
        </Link>

        {/* Price */}
        <p
          className={`text-xl font-bold mb-4 ${
            isSold ? "text-muted" : "text-accent"
          }`}
        >
          {formatPrice(property.price, property.type)}
          {property.negotiable && (
            <span className="text-xs font-normal text-muted ml-2">
              (thương lượng)
            </span>
          )}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          <div className="flex items-center gap-2 text-muted text-sm">
            <Maximize2 size={14} className="text-primary/50" />
            <span>{formatArea(property.area)}</span>
          </div>
          <div className="flex items-center gap-2 text-muted text-sm">
            <Bed size={14} className="text-primary/50" />
            <span>{property.bedrooms} PN</span>
          </div>
          <div className="flex items-center gap-2 text-muted text-sm">
            <Bath size={14} className="text-primary/50" />
            <span>{property.bathrooms} VS</span>
          </div>
          <div className="flex items-center gap-2 text-muted text-sm">
            <Compass size={14} className="text-primary/50" />
            <span>{property.direction}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-3 border-t border-border">
          <Link
            href={`/listings/${property.id}`}
            className="flex-1 text-center py-2.5 text-sm font-medium text-primary 
                       bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
          >
            Xem chi tiết
          </Link>
          <a
            href="https://zalo.me/0389980626"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 text-sm font-medium 
                       text-white bg-accent rounded-lg hover:bg-accent-light transition-colors"
          >
            <MessageCircle size={14} />
            Zalo
          </a>
        </div>
      </div>
    </div>
  );
}
