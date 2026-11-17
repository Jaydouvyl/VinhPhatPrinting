/*
 * NỘI DUNG TRANG DỊCH VỤ — sửa chữ và đường dẫn ảnh ở đây, lưu rồi tải lại.
 * Logo, menu, tên thương hiệu, liên hệ và chân trang dùng chung từ data.js.
 * Ảnh sản phẩm lấy từ thư mục assets/Anh san pham theo tên tương ứng.
 * Giữ id của bốn dịch vụ để các liên kết từ trang chủ tiếp tục mở đúng dịch vụ.
 * {{name}} tự lấy site.name trong data.js.
 */
window.SERVICES_DATA = {
  page: {
    title: "Sản phẩm",
    description: "Các dịch vụ in ấn và bao bì của Vinh Phát: Hộp Bồi Carton, Hộp Giấy Ivory và duplex, Vở Học Sinh, Giấy Thi và Túi Giấy.",
    background: "#f8fafc",
    badge: "DỊCH VỤ IN ẤN & BAO BÌ",
    titleHighlight: "DỊCH VỤ CỦA",
    heading: "CHÚNG TÔI",
    subtitle: "Giải pháp in ấn và bao bì cho doanh nghiệp, cửa hàng và trường học: từ mẫu thiết kế đến sản phẩm hoàn thiện."
  },
  labels: {
    contact: "Liên hệ ngay",
    details: "Xem chi tiết",
    dialogCategory: "Dịch vụ",
    specifications: "Thông tin sản phẩm",
    process: "Quy trình thực hiện",
    dialogContact: "Liên hệ tư vấn ngay",
    close: "Đóng chi tiết dịch vụ"
  },

  items: [
    {
      id: "hop-carton-boi",
      title: "Hộp Bồi Carton",
      icon: "assets/icons/carton.svg",
      image: "assets/Anh san pham/Hộp bồi sóng E.jpg",
      imageAlt: "Hộp bồi sóng E",
      description: "Hộp Bồi Carton giấy in theo thiết kế, kết hợp kết cấu hộp và hình ảnh thương hiệu cho nhu cầu đóng gói sản phẩm.",
      tags: ["Carton bồi", "In theo thiết kế", "Đóng gói sản phẩm"],
      introduction: "Hộp Bồi Carton kết hợp phần giấy in bên ngoài với lớp carton bên trong. Kích thước, kiểu hộp và phương án hoàn thiện được lựa chọn theo sản phẩm cần đóng gói và nhu cầu sử dụng của bạn.",
      specifications: [
        { title: "1. Kích thước & kiểu hộp", description: "Trao đổi kích thước sản phẩm, cách sắp xếp bên trong và kiểu đóng mở để xác định quy cách hộp phù hợp." },
        { title: "2. Nội dung & thiết kế in", description: "Chuẩn bị logo, thông tin sản phẩm và bố cục in. Mẫu thiết kế được thống nhất trước khi triển khai." },
        { title: "3. Hoàn thiện & đóng gói", description: "Lựa chọn cách gia công và quy cách bàn giao theo yêu cầu cụ thể của từng đơn hàng." }
      ]
    },
    {
      id: "hop-giay-ivory-duplex",
      title: "Hộp Giấy Ivory, Duplex",
      icon: "assets/icons/paper-box.svg",
      image: "assets/Anh san pham/Hộp Giấy Ivory.jpg",
      imageAlt: "Hộp Giấy Ivory",
      description: "In Hộp Giấy Ivory và duplex theo kích thước, mẫu thiết kế và nhu cầu sử dụng, phù hợp nhiều dòng sản phẩm khác nhau.",
      tags: ["Giấy ivory", "Giấy duplex", "Thiết kế riêng"],
      introduction: "Hộp Giấy Ivory và duplex là lựa chọn bao bì cho nhiều nhóm sản phẩm. {{name}} trao đổi cùng bạn về chất liệu, kích thước, thiết kế và cách hoàn thiện để xây dựng phương án phù hợp.",
      specifications: [
        { title: "1. Lựa chọn chất liệu", description: "Cân nhắc giấy ivory hoặc duplex cùng định lượng theo trọng lượng sản phẩm, cách sử dụng và ngân sách dự kiến." },
        { title: "2. Cấu trúc hộp", description: "Thống nhất kích thước, kiểu nắp, đáy và cách gấp để thuận tiện cho việc đóng gói và trưng bày." },
        { title: "3. In ấn & gia công", description: "Xác nhận nội dung, màu sắc và các yêu cầu hoàn thiện trên mẫu trước khi thực hiện đơn hàng." }
      ]
    },
    {
      id: "vo-hoc-sinh-giay-thi",
      title: "Vở Học Sinh, Giấy Thi",
      icon: "assets/icons/notebook.svg",
      image: "assets/Anh san pham/Vở học sinh.jpg",
      imageAlt: "Vở học sinh",
      description: "In Vở Học Sinh và giấy thi theo mẫu, lựa chọn nội dung, định lượng giấy và quy cách phù hợp nhu cầu học tập, sử dụng.",
      tags: ["Vở Học Sinh", "Giấy thi", "In theo mẫu"],
      introduction: "Dịch vụ in Vở Học Sinh và giấy thi đáp ứng nhu cầu của trường học, đơn vị giáo dục và khách hàng đặt theo mẫu. Nội dung, khổ giấy và quy cách được thống nhất theo mục đích sử dụng.",
      specifications: [],
      note: "Có thể trao đổi về khổ giấy, số trang, kiểu dòng kẻ, mẫu bìa, nội dung biểu mẫu và số lượng. Vui lòng gửi mẫu đang sử dụng hoặc yêu cầu cụ thể để được tư vấn."
    },
    {
      id: "tui-giay",
      title: "Túi Giấy",
      icon: "assets/icons/paper-bag.svg",
      image: "assets/Anh san pham/Túi Giấy.jpg",
      imageAlt: "Túi Giấy",
      description: "Túi Giấy in logo và thiết kế riêng cho nhu cầu đựng sản phẩm, quà tặng và giới thiệu hình ảnh thương hiệu.",
      tags: ["In logo", "Quà tặng", "Nhận diện thương hiệu"],
      introduction: "Túi Giấy vừa phục vụ việc đựng sản phẩm, vừa thể hiện phong cách thương hiệu. Thiết kế, kích thước và quy cách túi được lựa chọn theo sản phẩm bên trong và cách bạn muốn trao đến khách hàng.",
      specifications: [],
      note: "Trao đổi kích thước, loại giấy, thiết kế in, kiểu quai và số lượng cần đặt. Phương án hoàn thiện sẽ được thống nhất theo trọng lượng sản phẩm và mục đích sử dụng."
    }
  ],

  // Quy trình dùng chung trong cửa sổ chi tiết; mỗi dịch vụ có thể thêm steps riêng để ghi đè.
  process: [
    { title: "Tiếp nhận yêu cầu từ khách hàng", description: "Đánh giá - Phân tích - Làm mẫu trực quan - Ký xác nhận mẫu từ khách hàng." },
    { title: "Ký hợp đồng và nhận đơn hàng", description: "Lập kế hoạch sản xuất - Đặt nguyên liệu giấy phù hợp - Đặt bản in, khuôn bế." },
    { title: "Tiến hành sản xuất", description: "Dưới sự giám sát chặt chẽ từng công đoạn bởi hệ thống quy trình chuẩn mực." },
    { title: "Kiểm tra - Nhập kho", description: "Kiểm tra kỹ lưỡng chất lượng sản phẩm bởi QC và nhập kho thành phẩm." },
    { title: "Giao hàng nhanh chóng", description: "Đến khách hàng bởi hệ thống vận chuyển linh hoạt và đội ngũ bốc xếp tận tình." },
    { title: "Hỗ trợ sau bán hàng", description: "Nhiệt tình bởi đội ngũ chăm sóc khách hàng chuyên nghiệp." }
  ],

  options: {
    kicker: "CHẤT LIỆU & QUY CÁCH",
    title: "Lựa chọn phù hợp cho từng sản phẩm"
  },
  consultation: {
    badge: "CHUYÊN NGHIỆP & TẬN TÂM",
    title: "Tư vấn thiết kế &",
    titleHighlight: "Giải pháp bao bì",
    description: "Chia sẻ ý tưởng và nhu cầu sử dụng để cùng lựa chọn chất liệu, kích thước và cách trình bày phù hợp cho sản phẩm của bạn.",
    benefits: ["Tư vấn chất liệu giấy", "Thống nhất quy cách", "Thiết kế theo yêu cầu", "Phương án hoàn thiện"],
    buttonLabel: "NHẬN TƯ VẤN NGAY",
    image: "assets/Anh san pham/Hộp Giấy Ivory.jpg",
    imageAlt: "Hộp Giấy Ivory in theo yêu cầu"
  },
  cta: {
    title: "Bạn cần sản phẩm in ấn theo yêu cầu?",
    description: "Liên hệ với {{name}} để trao đổi mẫu thiết kế, quy cách và nhận báo giá phù hợp với nhu cầu của bạn.",
    buttons: [
      { label: "Nhận báo giá ngay", href: "lien-he-va-bao-gia.html", style: "white" },
      { label: "Xem bảng giá", href: "bang-gia.html", style: "outline" }
    ]
  }
};
