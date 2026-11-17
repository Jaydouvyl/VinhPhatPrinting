/*
 * TRANG BẢNG GIÁ — sửa nội dung tại đây, lưu rồi tải lại bang-gia.html.
 * 6 dòng được nhập theo ảnh bảng giá mới do doanh nghiệp cung cấp.
 * Sửa product, size, finishing, quantity và price để cập nhật từng dòng.
 * Gia công của hai dòng vở để trống theo ảnh gốc; hiển thị dấu gạch ngang.
 * Logo, menu, số điện thoại, email và chân trang dùng chung từ data.js.
 */
window.PRICING_DATA = {
  page: {
    title: "Bảng giá",
    description: "Bảng giá tham khảo Hộp Bồi Sóng E, Hộp Giấy Ivory, Vở Ô Ly, Vở Kẻ Ngang và Tem Decal Nhựa tại Vinh Phát.",
    eyebrow: "THÔNG TIN DÀNH CHO KHÁCH HÀNG",
    heading: "Bảng giá",
    titleHighlight: "in ấn & bao bì",
    subtitle: "Tham khảo quy cách gia công và số lượng cho từng sản phẩm. Chia sẻ nhu cầu của bạn để nhận báo giá phù hợp."
  },
  table: {
    kicker: "BẢNG GIÁ THAM KHẢO",
    title: "Bảng giá in",
    caption: "Bảng tham khảo sản phẩm, kích thước, gia công sau in, số lượng và giá",
    emptyText: "—",
    emptyLabel: "Chưa cập nhật",
    columns: [
      { key: "product", label: "Sản phẩm" },
      { key: "size", label: "Kích thước" },
      { key: "finishing", label: "Gia công sau in" },
      { key: "quantity", label: "Số lượng" },
      { key: "price", label: "Giá" }
    ],
    rows: [
      { product: "Hộp Bồi Sóng E + Giấy Duplex 230 gsm", size: "175x110x170 mm", finishing: "Cán bóng", quantity: "20,000 hộp", price: "2.270 đ/hộp", icon: "assets/icons/carton.svg", href: "dich-vu.html#hop-carton-boi" },
      { product: "Hộp Giấy Ivory 350 gsm", size: "172x80x35 mm", finishing: "Cán mờ + Mực phủ bóng", quantity: "60,000 hộp", price: "890 đ/hộp", icon: "assets/icons/paper-box.svg", href: "dich-vu.html#hop-giay-ivory-duplex" },
      { product: "Hộp Giấy Ivory 350 gsm", size: "185x100x110 mm", finishing: "Cán mờ", quantity: "20,000 hộp", price: "1.785 đ/hộp", icon: "assets/icons/paper-box.svg", href: "dich-vu.html#hop-giay-ivory-duplex" },
      { product: "Vở Ô Ly 60 Trang", size: "170x140 mm", finishing: "", quantity: "10,000 quyển", price: "3.600 đ/quyển", icon: "assets/icons/notebook.svg", href: "dich-vu.html#vo-hoc-sinh-giay-thi" },
      { product: "Vở Kẻ Ngang 80 Trang", size: "175x142 mm", finishing: "", quantity: "10,000 quyển", price: "6.500 đ/quyển", icon: "assets/icons/notebook.svg", href: "dich-vu.html#vo-hoc-sinh-giay-thi" },
      { product: "Tem Decal Nhựa", size: "120x55 mm", finishing: "Cán mờ + Cắt thành phẩm", quantity: "12,000 tem", price: "305 đ/tem", icon: "assets/icons/sticker.svg", href: "" }
    ],
    note: "Đơn giá tham khảo áp dụng theo quy cách và số lượng trong bảng. Với nhu cầu khác, vui lòng liên hệ để được tư vấn và nhận báo giá riêng."
  },
  guide: {
    title: "Để nhận báo giá phù hợp",
    description: "Bạn chỉ cần chuẩn bị một vài thông tin về sản phẩm cần in.",
    items: [
      { title: "Gửi mẫu & kích thước", description: "Chia sẻ mẫu đang dùng, bản thiết kế hoặc kích thước sản phẩm bạn mong muốn." },
      { title: "Chọn cách hoàn thiện", description: "Trao đổi loại giấy, hình thức in và các yêu cầu gia công sau in." },
      { title: "Xác nhận số lượng", description: "Cung cấp số lượng dự kiến và thời gian cần nhận hàng để được tư vấn phương án phù hợp." }
    ]
  },
  cta: {
    kicker: "CÙNG VINH PHÁT HOÀN THIỆN SẢN PHẨM CỦA BẠN",
    title: "Bạn cần một báo giá riêng?",
    description: "Gửi thông tin sản phẩm và quy cách mong muốn. Chúng tôi sẽ cùng bạn lựa chọn phương án in ấn, bao bì phù hợp.",
    buttonLabel: "Yêu cầu báo giá",
    phoneLabel: "Trao đổi trực tiếp",
    emailLabel: "Gửi yêu cầu qua email"
  }
};
