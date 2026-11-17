/*
 * NỘI DUNG TRANG GIỚI THIỆU — sửa ở đây, lưu rồi tải lại trang.
 * Logo, tên thương hiệu, menu và liên hệ dùng chung từ data.js.
 * {{name}} tự lấy site.name trong data.js (hiện là Vinh Phát).
 * Ảnh nhà máy, nhà xưởng và nhân viên tư vấn lấy từ assets/Anh Xuong.
 * Có thể thêm/bớt đoạn văn và giá trị trong các danh sách.
 */
window.ABOUT_DATA = {
  page: {
    title: "Giới thiệu",
    description:
      "Giới thiệu về {{name}}, định hướng phát triển, giá trị cốt lõi và đội ngũ nhân sự.",
    heading: "Về Chúng Tôi",
    background: "#f8fafc", // Màu nền giống trang mẫu; đổi thành #ffffff nếu muốn nền trắng.
  },

  overview: {
    title: "Công Ty TNHH Sản Xuất và Dịch vụ In Vinh Phát",
    // Mỗi thẻ có ảnh, tiêu đề và paragraphs. Chuỗi = đoạn văn; { list: [...] } = danh sách.
    cards: [
      {
        title: "Hành trình phát triển",
        image: "assets/Anh Xuong/Ảnh nhà máy .jpg",
        imageAlt: "Nhà máy bao bì Vinh Phát",
        paragraphs: [
          "Công Ty TNHH Sản Xuất và Dịch vụ In Vinh Phát tiền thân là Công Ty TNHH MTV Sản xuất Thương Mại In Huy Chúc được thành lập từ những năm 2000, tại TP Hải Dương cũ với mục đích sản xuất bao bì giấy cung cấp cho địa bàn lân cận.",
          "Đến năm 2025, nhận thấy nhu cầu ngày một lớn của thị trường, công ty quyết định đầu tư nhà máy bao bì Vinh Phát với diện tích 5000 m² tại địa chỉ cụm công nghiệp Thạch Khôi, Phường Thạch Khôi, Thành phố Hải Phòng.",
          "Với kinh nghiệm, nội lực lâu năm và hướng đầu tư bài bản, từ một phân xưởng sản xuất bao bì nhỏ phục vụ khu vực trong tỉnh, Bao Bì Vinh Phát đã nhanh chóng vươn lên và phát triển trở thành một trong những công ty cung cấp bao bì giấy số một Hải Phòng, là công ty đi đầu trong ngành sản xuất bao bì đóng gói, chuyên sản xuất và phân phối các sản phẩm hộp carton sóng 3 - 5 - 7 lớp bồi, Hộp Giấy Ivory, Duplex, Vở Học Sinh, Tem Decal… chất lượng cao.",
        ],
      },
      {
        title: "Năng lực sản xuất & sản phẩm",
        image: "assets/Anh Xuong/Ảnh bên trong.png",
        imageAlt: "Không gian sản xuất bên trong nhà xưởng Vinh Phát",
        paragraphs: [
          "Trên 20 năm kinh nghiệm với dây chuyền sản xuất hiện đại, năng suất cao, kết hợp với khả năng thiết kế mẫu bao bì đẹp và chất lượng, CÔNG TY BAO BÌ VINH PHÁT chuyên cung cấp các sản phẩm bao bì đa dạng, phục vụ được nhu cầu đóng gói của các khách hàng trong nhiều lĩnh vực sản xuất khác nhau:",
          {
            list: [
              "Đặc sản địa phương, sản phẩm nông nghiệp",
              "Đồ dùng thiết yếu như khẩu trang, găng tay,...",
              "Vở kẻ ngang, vở ô ly, giấy thi.",
              "Túi quà tặng doanh nghiệp",
              "Tem decal các loại",
            ],
          },
          "Dây chuyền sản xuất năng suất cao, đáp ứng được các đơn đặt hàng số lượng lớn và cực lớn.",
          "Cùng đội ngũ kỹ thuật lành nghề, dây chuyền sản xuất tiên tiến luôn cập nhật những công nghệ mới nhất, chúng tôi cam kết luôn đáp ứng tốt nhất mọi yêu cầu của khách hàng về sản phẩm.",
          {
            list: [
              "Yêu cầu về chất lượng",
              "Yêu cầu về kích thước",
              "Yêu cầu về loại giấy, loại sóng",
              "Yêu cầu về thời gian cấp hàng",
            ],
          },
        ],
      },
      {
        title: "Chất lượng & cam kết đồng hành",
        image: "assets/Anh Xuong/Anh Nhan Vien Tu Van.png",
        imageAlt: "Nhân viên tư vấn Vinh Phát",
        paragraphs: [
          "Nguyên liệu đầu vào được kiểm soát chặt chẽ về chất lượng, đội ngũ kỹ thuật chuyên môn cao và nhân công lành nghề, tất cả đều nhằm đáp ứng tốt nhất yêu cầu của khách hàng về chất lượng, số lượng, thời gian cam kết và giá cả phù hợp nhất.",
          "Đến với Bao bì Vinh Phát, khách hàng được cung cấp dịch vụ tư vấn, thiết kế & báo giá hoàn toàn miễn phí đối với mỗi nhu cầu bao bì đóng gói. Chúng tôi áp dụng chính sách ưu đãi đặc biệt về giá thành, chất lượng & thời gian sản xuất, giao hàng cho các khách hàng với đơn đặt hàng số lượng lớn & thường xuyên.",
        ],
      },
    ],
    stats: [
      { value: "20+", label: "NĂM KINH NGHIỆM" },
      { value: "50+", label: "KHÁCH HÀNG LỚN" },
      { value: "100K+", label: "ĐƠN HÀNG" },
      { value: "5000", label: "M² DIỆN TÍCH NHÀ XƯỞNG" },
    ],
    valuesTitle: "Giá trị cốt lõi",
    values: [
      {
        title: "Minh bạch",
        icon: "assets/about/PREMIUM.svg",
        description:
          "Thông tin rõ ràng, chi phí và quy trình được trao đổi đầy đủ.",
      },
      {
        title: "Chuyên nghiệp",
        icon: "assets/about/PREMIUM.svg",
        description:
          "Làm việc có trách nhiệm, luôn lắng nghe và hỗ trợ khách hàng.",
      },
      {
        title: "Hiệu quả",
        icon: "assets/about/PREMIUM.svg",
        description:
          "Lựa chọn phương án phù hợp để sử dụng tốt thời gian và nguồn lực.",
      },
    ],
  },

  cta: {
    title: "Sẵn sàng đồng hành cùng {{name}}",
    description:
      "Khám phá các sản phẩm và giải pháp bao bì toàn diện của chúng tôi để tối ưu hóa chi phí cho doanh nghiệp của bạn ngay hôm nay.",
    buttons: [
      { label: "Khám phá Sản phẩm", href: "dich-vu.html", style: "white" },
      { label: "Bảng giá", href: "bang-gia.html", style: "outline" },
    ],
  },
};
