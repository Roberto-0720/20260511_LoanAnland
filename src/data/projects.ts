import type { ProjectSlug } from "@/lib/utils";

export interface ProjectInfo {
  slug: string;
  dataSlug: ProjectSlug;
  name: string;
  shortName: string;
  tagline: string;
  developer: string;
  address: string;
  shortAddress: string;
  totalArea: string;
  buildingDensity?: string;
  blocks: string;
  totalUnits?: string;
  unitTypes: string[];
  handover: string;
  description: string;
  highlights: string[];
  amenities: { icon: string; label: string }[];
  connections: string[];
  imagesDir: string;
  heroImage: string;
  gallery: string[];
  unitDesigns?: { code: string; description?: string; image: string }[];
  interiorImages?: { caption?: string; image: string }[];
}

export const projects: ProjectInfo[] = [
  {
    slug: "anland-lakeview",
    dataSlug: "anland-nam-cuong",
    name: "Anland Lakeview",
    shortName: "Anland Lakeview",
    tagline: "Tổ hợp căn hộ cao cấp soi bóng hồ Bách Hợp Thủy",
    developer: "Tập đoàn Nam Cường",
    address:
      "Trung tâm Khu đô thị Dương Nội 1, soi bóng hồ Bách Hợp Thủy, Công viên Thiên văn học, Hà Đông, Hà Nội",
    shortAddress: "KĐT Dương Nội, Hà Đông, Hà Nội",
    totalArea: "15.766 m²",
    buildingDensity: "29.93%",
    blocks: "4 tòa A, B, C, D — cao 34 đến 52 tầng",
    unitTypes: ["Căn 2 phòng ngủ", "Căn 3 phòng ngủ"],
    handover: "Đã bàn giao Quý II/2021",
    description:
      "Anland Lakeview là tổ hợp căn hộ cao cấp do Tập đoàn Nam Cường phát triển, nằm tại vị trí trung tâm Khu đô thị Dương Nội, soi bóng bên hồ Bách Hợp Thủy 12 ha và Công viên Thiên văn học. Dự án gồm 4 tòa cao 34–52 tầng, đã hoàn thiện và bàn giao từ Quý II/2021, hiện đang là cộng đồng cư dân sôi động bậc nhất khu Hà Đông.",
    highlights: [
      "View hồ Bách Hợp Thủy & Công viên Thiên văn học hiếm có",
      "Đã hoàn thiện hệ tiện ích nội khu, cư dân về ở đông",
      "Cách Aeon Mall Hà Đông chỉ vài phút đi bộ",
      "Mật độ xây dựng thấp 29.93% — không gian thoáng đãng",
    ],
    amenities: [
      { icon: "TreePine", label: "11,2 ha cây xanh nội khu" },
      { icon: "GraduationCap", label: "3,56 ha trường liên cấp" },
      { icon: "Sparkles", label: "12 ha công viên Thiên văn học" },
      { icon: "Stethoscope", label: "2,9 ha bệnh viện quốc tế" },
      { icon: "ShoppingBag", label: "10 ha Aeon Mall Hà Đông" },
      { icon: "Waves", label: "Hồ Bách Hợp Thủy 12 ha" },
    ],
    connections: [
      "5 km đến Thiên đường Bảo Sơn",
      "6 km đến Bệnh viện K cơ sở Tân Triều",
      "14 km đến Hồ Gươm — trung tâm Hà Nội",
      "35 km đến Sân bay Nội Bài",
    ],
    imagesDir: "/images/anland-lakeview",
    heroImage: "hero.jpg",
    gallery: [
      "gallery-1.jpg",
      "gallery-2.jpg",
      "gallery-3.jpg",
      "gallery-4.jpg",
      "gallery-5.jpg",
      "gallery-6.jpg",
    ],
  },
  {
    slug: "anland-premium",
    dataSlug: "anland-nam-cuong",
    name: "Anland Premium",
    shortName: "Anland Premium",
    tagline: "Cửa ngõ Khu đô thị Dương Nội — căn hộ cao cấp 3 mặt tiền",
    developer: "Tập đoàn Nam Cường",
    address:
      "Cửa ngõ Khu đô thị Dương Nội, mặt chính đường Tố Hữu, quận Hà Đông, Hà Nội — vị trí 3 mặt tiền",
    shortAddress: "KĐT Dương Nội, Hà Đông, Hà Nội",
    totalArea: "8.500 m² đất — 2.570 m² xây dựng",
    blocks: "2 tòa A & B — 25 tầng nổi + 2 tầng hầm + 2 tầng thương mại",
    totalUnits: "575 căn hộ cao cấp",
    unitTypes: ["2 phòng ngủ – 2 vệ sinh", "3 phòng ngủ (số lượng ít)"],
    handover: "Đã bàn giao Quý III/2019",
    description:
      "Anland Premium (còn gọi là Anland 2) là tổ hợp căn hộ cao cấp do Tập đoàn Nam Cường phát triển, nằm tại cửa ngõ Khu đô thị Dương Nội với 3 mặt tiền và mặt chính là đường Tố Hữu. Dự án gồm 2 tòa tháp A và B cao 25 tầng, đã bàn giao từ Quý III/2019, hiện là cộng đồng cư dân đông đúc, thừa hưởng trọn vẹn hệ tiện ích của KĐT Dương Nội.",
    highlights: [
      "Vị trí 3 mặt tiền hiếm có, mặt chính đường Tố Hữu",
      "Thiết kế 8 căn góc/sàn — tối ưu ánh sáng & gió tự nhiên",
      "Đã bàn giao, sổ hồng đầy đủ, cư dân về ở đông",
      "Sát Aeon Mall Hà Đông chỉ 400 m, đi bộ vài phút",
    ],
    amenities: [
      { icon: "Waves", label: "Bể bơi 4 mùa" },
      { icon: "Dumbbell", label: "Phòng tập Gym hiện đại" },
      { icon: "TreePine", label: "Công viên cây xanh nội khu" },
      { icon: "Baby", label: "Khu vui chơi trẻ em" },
      { icon: "Utensils", label: "Vườn BBQ ngoài trời" },
      { icon: "ShieldCheck", label: "Bảo vệ & an ninh 24/7" },
    ],
    connections: [
      "400 m đến Aeon Mall Hà Đông",
      "300 m đến Trường Quốc tế Nhật Bản",
      "400 m đến Bệnh viện Quốc tế Hà Đông",
      "Tuyến BRT & xe bus 22 ngay cạnh dự án",
    ],
    imagesDir: "/images/anland-premium",
    heroImage: "hero.jpg",
    gallery: [
      "gallery-1.jpg",
      "gallery-2.jpg",
      "gallery-3.jpg",
      "gallery-4.jpg",
      "gallery-5.jpg",
      "gallery-6.jpg",
    ],
  },
  {
    slug: "the-charm-an-hung",
    dataSlug: "the-charm-an-hung",
    name: "The Charm An Hưng",
    shortName: "The Charm",
    tagline: "Tổ hợp căn hộ cao cấp giữa lòng KĐT An Hưng",
    developer: "Công ty Cổ phần Đầu tư Đô thị An Hưng",
    address:
      "Khu đô thị mới An Hưng, phường La Khê, quận Hà Đông, Hà Nội — trục Nguyễn Thanh Bình – Tố Hữu",
    shortAddress: "KĐT An Hưng, Hà Đông, Hà Nội",
    totalArea: "16.233 m² đất — 4.471 m² xây dựng chung cư",
    blocks: "2 tòa chung cư 30 tầng + 4 block shophouse liền kề",
    totalUnits: "592 căn hộ sổ đỏ lâu dài + 38 lô shophouse",
    unitTypes: ["2 phòng ngủ: 54 / 72 / 76 m²", "3 phòng ngủ: 91,5 / 95,9 m²"],
    handover: "Dự kiến Quý III/2026",
    description:
      "The Charm An Hưng là tổ hợp căn hộ cao cấp tọa lạc tại trung tâm Khu đô thị An Hưng, trục đường Tố Hữu – Lê Văn Lương. Dự án gồm 2 tòa chung cư 30 tầng với 592 căn hộ sổ đỏ lâu dài, bàn giao nội thất cao cấp kiểu khách sạn, dự kiến hoàn thiện Quý III/2026. Đây là lựa chọn lý tưởng cho cộng đồng cư dân tri thức tìm kiếm không gian sống đẳng cấp tại Hà Đông.",
    highlights: [
      "Sổ đỏ lâu dài cho từng căn hộ",
      "Nội thất bàn giao cao cấp kiểu khách sạn (HEFELE, LG Multi Inverter, khoá thông minh)",
      "Trục Tố Hữu – Lê Văn Lương – Láng Hạ về trung tâm thuận tiện",
      "Mặt bằng đa dạng từ 54 m² đến 95,9 m²",
    ],
    amenities: [
      { icon: "Baby", label: "Trường mầm non nội khu" },
      { icon: "Utensils", label: "Nhà hàng & cafeteria" },
      { icon: "Footprints", label: "Công viên dạo bộ" },
      { icon: "Dumbbell", label: "Gym & Fitness" },
      { icon: "ShieldCheck", label: "Cửa chống cháy + khoá thông minh" },
      { icon: "Snowflake", label: "Điều hoà LG Multi Inverter" },
    ],
    connections: [
      "6 phút đến Ga tàu điện La Khê",
      "7 phút đến Aeon Mall Hà Đông",
      "Trục Tố Hữu – Lê Văn Lương – Láng Hạ về trung tâm",
      "Kết nối nhanh KĐT Văn Khê – Dương Nội",
    ],
    imagesDir: "/images/the-charm",
    heroImage: "hero.jpg",
    gallery: [
      "gallery-1.jpg",
      "gallery-2.jpg",
      "gallery-3.jpg",
      "gallery-4.jpg",
      "gallery-5.jpg",
      "gallery-6.jpg",
    ],
    unitDesigns: [
      {
        code: "CH8",
        description: "Căn góc — view 2 mặt thoáng",
        image: "gallery-7.jpg",
      },
      {
        code: "CH2 · CH3 · CH4 · CH9 · CH10",
        description: "Nhóm căn điển hình — bố cục tối ưu",
        image: "gallery-8.jpg",
      },
      {
        code: "CH6",
        description: "Căn 2 phòng ngủ — view nội khu",
        image: "gallery-9.jpg",
      },
      {
        code: "CH7",
        description: "Căn 2 phòng ngủ — hướng đón sáng",
        image: "gallery-10.jpg",
      },
      {
        code: "CH5",
        description: "Căn 3 phòng ngủ — không gian rộng rãi",
        image: "gallery-11.jpg",
      },
      {
        code: "CH1 · CH11",
        description: "Căn góc đầu hồi — tầm view rộng",
        image: "gallery-12.jpg",
      },
    ],
    interiorImages: [
      { caption: "Phòng khách & bếp liên thông", image: "gallery-13.jpg" },
      { caption: "Phòng ngủ master", image: "gallery-14.jpg" },
      { caption: "Tủ bếp HEFELE Laminate cao cấp", image: "gallery-15.jpg" },
      { caption: "Phòng vệ sinh thiết bị cao cấp", image: "gallery-16.jpg" },
      { caption: "Khoá thông minh & thiết bị Hager (Đức)", image: "gallery-17.jpg" },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectInfo | undefined {
  return projects.find((p) => p.slug === slug);
}
