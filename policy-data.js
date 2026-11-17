/*
 * TRANG CHÍNH SÁCH & QUY ĐỊNH — sửa nội dung tại đây, lưu rồi tải lại trang.
 * sections: mỗi phần có id (dùng cho liên kết), title, navLabel, icon và blocks.
 * blocks: { type: "paragraph" | "heading", text: "..." } hoặc
 * { type: "list", items: ["...", { text: "...", children: ["..."] }] }.
 * Nội dung được nhập từ tài liệu doanh nghiệp cung cấp.
 * Menu, chân trang và thông tin liên hệ nhanh dùng chung từ data.js.
 */
window.POLICY_DATA = {
  "page": {
    "title": "Chính sách & Quy định",
    "description": "Chính sách bảo mật, điều khoản sử dụng, giao hàng, bảo hành và giải quyết khiếu nại của In Vinh Phát.",
    "eyebrow": "THÔNG TIN DÀNH CHO KHÁCH HÀNG",
    "heading": "Chính sách",
    "highlight": "& Quy định",
    "introduction": "Tìm hiểu cách Vinh Phát bảo vệ thông tin và đồng hành cùng bạn trong từng đơn hàng.",
    "contentsLabel": "Nội dung chính sách",
    "contentsNote": "Chọn một mục để đọc nội dung chi tiết.",
    "contactTitle": "Bạn cần giải đáp thêm?",
    "contactDescription": "Liên hệ với Vinh Phát để được hỗ trợ về chính sách và yêu cầu của bạn.",
    "contactButton": "Liên hệ với chúng tôi"
  },
  "sections": [
    {
      "id": "bao-mat",
      "title": "Chính sách bảo mật và bảo vệ dữ liệu cá nhân",
      "navLabel": "Bảo mật thông tin",
      "icon": "assets/icons/shield.svg",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Chào mừng bạn đến với website của Công ty TNHH Sản xuất và Dịch vụ In Vinh Phát. Chúng tôi hiểu rằng quyền riêng tư và bảo vệ dữ liệu cá nhân là vô cùng quan trọng. Chính sách này được lập ra nhằm tuân thủ Nghị định 13/2023/NĐ-CP của Chính phủ Việt Nam, giúp bạn hiểu rõ cách chúng tôi thu thập, sử dụng và bảo vệ thông tin khi bạn để lại yêu cầu báo giá trên website."
        },
        {
          "type": "heading",
          "text": "1. Mục đích và phạm vi thu thập thông tin"
        },
        {
          "type": "paragraph",
          "text": "Việc thu thập dữ liệu trên website chủ yếu bao gồm các thông tin do khách hàng chủ động cung cấp qua Form \"Liên hệ / Nhận báo giá\"."
        },
        {
          "type": "list",
          "items": [
            "Thông tin thu thập bao gồm: Họ tên, Số điện thoại, Địa chỉ Email, Tên công ty (nếu có), và nội dung yêu cầu báo giá (quy cách in ấn, số lượng hộp/túi giấy...).",
            {
              "text": "Mục đích thu thập:",
              "children": [
                "Liên hệ để tư vấn, giải đáp thắc mắc và gửi bảng báo giá dịch vụ in ấn theo yêu cầu của khách hàng.",
                "Hỗ trợ xử lý các vấn đề liên quan đến đơn đặt hàng, thiết kế và giao nhận sau này.",
                "Gửi các thông báo về chính sách, ưu đãi (chỉ khi khách hàng đồng ý nhận)."
              ]
            }
          ]
        },
        {
          "type": "heading",
          "text": "2. Phạm vi sử dụng thông tin"
        },
        {
          "type": "paragraph",
          "text": "Chúng tôi sử dụng thông tin cá nhân của khách hàng đúng với mục đích đã nêu trên. Chúng tôi cam kết không bán, cho thuê hoặc chia sẻ thông tin của khách hàng cho bất kỳ bên thứ ba nào vì mục đích thương mại."
        },
        {
          "type": "heading",
          "text": "3. Thời gian lưu trữ dữ liệu"
        },
        {
          "type": "paragraph",
          "text": "Dữ liệu cá nhân của khách hàng sẽ được lưu trữ trên hệ thống nội bộ của chúng tôi cho đến khi:"
        },
        {
          "type": "list",
          "items": [
            "Khách hàng có yêu cầu hủy bỏ hoặc chỉnh sửa gửi tới ban quản trị.",
            "Hoàn thành xong mục đích tư vấn, báo giá và không phát sinh giao dịch trong vòng 01 năm. Trong mọi trường hợp còn lại, thông tin cá nhân của khách hàng sẽ được bảo mật tuyệt đối trên máy chủ của chúng tôi."
          ]
        },
        {
          "type": "heading",
          "text": "4. Những người hoặc tổ chức có thể tiếp cận thông tin"
        },
        {
          "type": "paragraph",
          "text": "Chỉ những đối tượng sau đây mới được quyền tiếp cận dữ liệu của khách hàng:"
        },
        {
          "type": "list",
          "items": [
            "Nhân viên tư vấn, bộ phận kinh doanh và chăm sóc khách hàng của Công ty TNHH Sản xuất và Dịch vụ In Vinh Phát để thực hiện việc báo giá và hỗ trợ.",
            "Cơ quan nhà nước có thẩm quyền trong trường hợp có yêu cầu hợp pháp theo quy định của pháp luật Việt Nam."
          ]
        },
        {
          "type": "heading",
          "text": "5. Quyền của chủ thể dữ liệu (Khách hàng)"
        },
        {
          "type": "paragraph",
          "text": "Theo quy định pháp luật, khách hàng có các quyền sau đối với dữ liệu cá nhân của mình:"
        },
        {
          "type": "list",
          "items": [
            "Quyền được biết và đồng ý: Khách hàng được biết mục đích thu thập và phải đồng ý trước khi gửi thông tin qua form.",
            "Quyền truy cập và chỉnh sửa: Yêu cầu chúng tôi cung cấp, kiểm tra hoặc chỉnh sửa lại thông tin cá nhân đã cung cấp.",
            "Quyền xóa dữ liệu: Yêu cầu chúng tôi xóa bỏ hoàn toàn thông tin cá nhân khỏi hệ thống lưu trữ. Khách hàng có thể thực hiện các quyền này bằng cách liên hệ trực tiếp với chúng tôi qua Email hoặc Hotline cung cấp ở mục 6."
          ]
        },
        {
          "type": "heading",
          "text": "6. Cơ chế tiếp nhận và giải quyết khiếu nại"
        },
        {
          "type": "paragraph",
          "text": "Mọi thắc mắc, yêu cầu chỉnh sửa/xóa dữ liệu hoặc khiếu nại liên quan đến việc thông tin cá nhân bị sử dụng sai mục đích, xin vui lòng liên hệ với chúng tôi qua:"
        },
        {
          "type": "list",
          "items": [
            "Công ty: Công ty TNHH Sản xuất và Dịch vụ In Vinh Phát",
            "Địa chỉ nhà máy/VPGD: Cụm CN Thạch Khôi, Phường Thạch Khôi, Thành phố Hải Phòng",
            "Hotline / Zalo: 084.690.1111 - 0965.952.000",
            "Email: invinhphat6886@gmail.com"
          ]
        },
        {
          "type": "paragraph",
          "text": "Ngay sau khi tiếp nhận phản ánh, chúng tôi sẽ tiến hành xác minh và có biện pháp xử lý, phản hồi lại khách hàng chậm nhất trong vòng 48 giờ làm việc."
        }
      ]
    },
    {
      "id": "dieu-khoan-su-dung",
      "title": "Điều khoản sử dụng và chính sách dịch vụ",
      "navLabel": "Điều khoản sử dụng",
      "icon": "assets/icons/paper-box.svg",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Chào mừng quý khách đến với website của Công ty TNHH Sản xuất và Dịch vụ In  Vinh Phát. Khi quý khách truy cập vào website và gửi yêu cầu báo giá, đồng nghĩa với việc quý khách đã đọc, hiểu và đồng ý với các điều khoản và chính sách dịch vụ dưới đây của chúng tôi."
        },
        {
          "type": "heading",
          "text": "1. Quyền sở hữu trí tuệ:"
        },
        {
          "type": "paragraph",
          "text": "Toàn bộ nội dung, hình ảnh sản phẩm (hộp giấy, túi giấy, tem nhãn...), thiết kế đồ họa và tài liệu trên website đều thuộc quyền sở hữu của Công ty TNHH Sản xuất và Dịch vụ In Vinh Phát hoặc được cấp phép sử dụng hợp pháp. Quý khách không được sao chép, sử dụng lại các mẫu thiết kế trên website cho mục đích thương mại khi chưa có sự đồng ý bằng văn bản."
        },
        {
          "type": "heading",
          "text": "2. Thông tin dịch vụ và báo giá"
        },
        {
          "type": "list",
          "items": [
            "Các thông tin quy cách, thông số kỹ thuật và bài viết trên website mang tính chất tham khảo và giới thiệu năng lực sản xuất.",
            "Do đặc thù ngành in ấn, giá cả phụ thuộc vào số lượng, chất liệu giấy, kích thước và quy cách gia công cụ thể của từng đơn hàng. Báo giá chính thức sẽ được gửi trực tiếp qua Email hoặc Zalo sau khi chúng tôi tiếp nhận đủ yêu cầu từ quý khách."
          ]
        }
      ]
    },
    {
      "id": "giao-hang",
      "title": "Chính sách giao hàng",
      "navLabel": "Giao hàng & Vận chuyển",
      "icon": "assets/icons/carton.svg",
      "blocks": [
        {
          "type": "heading",
          "text": "1. Phương thức và khu vực giao hàng"
        },
        {
          "type": "list",
          "items": [
            "Khu vực nội thành (Hải Dương, Hải Phòng, Hà Nội...): Giao hàng trực tiếp bằng hệ thống xe tải của công ty hoặc xe chuyển phát.",
            "Các tỉnh thành khác: Gửi hàng qua các đơn vị vận chuyển trung gian (Viettel Post, GHTK...) hoặc gửi qua các chành xe, nhà xe tải theo chỉ định hoặc thỏa thuận với khách hàng."
          ]
        },
        {
          "type": "heading",
          "text": "2. Thời gian giao hàng"
        },
        {
          "type": "list",
          "items": [
            "Thời gian giao hàng tiêu chuẩn tính từ thời điểm quý khách duyệt file thiết kế cuối cùng (Maquette) và hoàn tất tạm ứng.",
            "Thời gian cụ thể (từ 3 - 7 ngày hoặc hơn) sẽ được quy định rõ trong Hợp đồng/Đơn đặt hàng tùy thuộc vào số lượng và độ phức tạp của khâu gia công sau in (ép kim, bế nổi, cán màng, bế dán...).",
            "Trong trường hợp bất khả kháng (thiên tai, dịch bệnh, sự cố điện lưới diện rộng...), chúng tôi sẽ thông báo trước để thỏa thuận lại thời gian giao hàng."
          ]
        },
        {
          "type": "heading",
          "text": "3. Trách nhiệm đối với hàng hóa vận chuyển"
        },
        {
          "type": "list",
          "items": [
            "Nếu Công ty TNHH Sản xuất và Dịch vụ In Vinh Phát trực tiếp vận chuyển: Chúng tôi chịu trách nhiệm hoàn toàn về các rủi ro mất mát, móp méo, ướt hỏng bao bì trong quá trình vận chuyển đến điểm giao nhận.",
            "Nếu giao qua nhà xe/đơn vị vận chuyển do quý khách chỉ định: Trách nhiệm bảo quản hàng hóa thuộc về đơn vị vận chuyển tính từ lúc hàng được bàn giao lên xe. Quý khách vui lòng kiểm tra kỹ tình trạng thùng carton bên ngoài khi nhận hàng."
          ]
        }
      ]
    },
    {
      "id": "bao-hanh",
      "title": "Tiêu chuẩn kỹ thuật và bảo hành",
      "navLabel": "Chính sách bảo hành",
      "icon": "assets/icons/shield.svg",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Đặc thù của ngành in công nghiệp (in offset/flexo) có những dung sai nhất định. Chúng tôi áp dụng chính sách bảo hành dựa trên các tiêu chuẩn kỹ thuật sau:"
        },
        {
          "type": "heading",
          "text": "1. Dung sai màu sắc (Bảo hành màu in)"
        },
        {
          "type": "list",
          "items": [
            "Màu sắc thành phẩm in ra có thể chênh lệch từ 5% - 10% so với màu hiển thị trên màn hình điện thoại/máy tính (hệ màu RGB) hoặc so với bản in test bằng máy in kỹ thuật số. Đây là dung sai cho phép của công nghệ in offset.",
            "Chúng tôi bảo hành in lại miễn phí nếu sai lệch màu quá lớn (sai hẳn tông màu) do lỗi từ phía xưởng in."
          ]
        },
        {
          "type": "heading",
          "text": "2. Dung sai quy cách gia công"
        },
        {
          "type": "list",
          "items": [
            "Kích thước bế dán, cắt xén có dung sai cho phép là ± 1mm đến 2mm.",
            "Định lượng giấy và độ dày của vật liệu có thể chênh lệch ± 5% tùy theo từng lô giấy của nhà máy sản xuất giấy (nhưng vẫn đảm bảo đúng loại giấy đã cam kết: Kraft, Ivory, Duplex...)."
          ]
        },
        {
          "type": "heading",
          "text": "3. Các trường hợp TỪ CHỐI bảo hành"
        },
        {
          "type": "list",
          "items": [
            "Lỗi chính tả, nội dung, sai mã vạch... nhưng khách hàng đã ký duyệt trên Maquette trước khi in.",
            "Sản phẩm bị ẩm mốc, rách hỏng do khách hàng bảo quản lưu kho không đúng cách (để nơi ẩm ướt, chuột bọ, nắng gắt).",
            "Khách hàng tự ý thay đổi kết cấu, gấp/lắp ráp hộp không đúng hướng dẫn gây rách nát."
          ]
        }
      ]
    },
    {
      "id": "khieu-nai",
      "title": "Tiếp nhận và giải quyết khiếu nại",
      "navLabel": "Giải quyết khiếu nại",
      "icon": "assets/icons/notebook.svg",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Chúng tôi luôn đặt quyền lợi của khách hàng lên hàng đầu. Quy trình xử lý khiếu nại được thực hiện như sau:"
        },
        {
          "type": "heading",
          "text": "1. Tiếp nhận khiếu nại"
        },
        {
          "type": "list",
          "items": [
            "Thời gian tiếp nhận: Trong vòng 05 ngày làm việc kể từ khi quý khách nhận được hàng. Quá thời hạn này, chúng tôi mặc định quý khách đã nghiệm thu toàn bộ chất lượng đơn hàng.",
            "Cách thức: Quý khách gửi hình ảnh/video quay rõ tình trạng hàng lỗi, số lượng hàng lỗi qua Zalo người phụ trách đơn hàng hoặc qua Email công ty."
          ]
        },
        {
          "type": "heading",
          "text": "2. Hướng giải quyết"
        },
        {
          "type": "paragraph",
          "text": "Sau khi thẩm định nguyên nhân, nếu lỗi thuộc về quá trình sản xuất của Công ty TNHH Sản xuất và Dịch vụ In Vinh Phát (in sai nội dung so với file đã duyệt, bế dán sai cấu trúc không thể sử dụng, bong tróc màng, dán lỗi...), chúng tôi cam kết:"
        },
        {
          "type": "list",
          "items": [
            "Phương án 1 (Ưu tiên): Thu hồi toàn bộ hàng lỗi và tiến hành in lại, sản xuất lại số lượng lỗi trong thời gian nhanh nhất, hoàn toàn miễn phí.",
            "Phương án 2: Nếu khách hàng có thể châm chước sử dụng được (lỗi nhẹ về mặt thẩm mỹ không ảnh hưởng kết cấu), chúng tôi sẽ thỏa thuận giảm giá/chiết khấu trực tiếp vào đơn hàng.",
            "Phương án 3: Hoàn trả 100% giá trị tương ứng với số lượng hàng lỗi không thể khắc phục và khách hàng không có nhu cầu in lại."
          ]
        }
      ]
    },
    {
      "id": "lien-he-ho-tro",
      "title": "Thông tin liên hệ hỗ trợ",
      "navLabel": "Liên hệ hỗ trợ",
      "icon": "assets/icons/paper-bag.svg",
      "blocks": [
        {
          "type": "paragraph",
          "text": "Nếu có bất kỳ thắc mắc nào về Điều khoản sử dụng, Chính sách vận chuyển hay cần hỗ trợ xử lý sự cố đơn hàng, quý khách vui lòng liên hệ:"
        },
        {
          "type": "list",
          "items": [
            "Công ty: Công ty TNHH Sản xuất và Dịch vụ In Vinh Phát",
            "Địa chỉ nhà máy/VPGD: Cụm CN Thạch Khôi, Phường Thạch Khôi, Thành phố Hải Phòng",
            "Hotline / Zalo: 084.690.1111 - 0965.952.000",
            "Email: invinhphat6886@gmail.com"
          ]
        }
      ]
    }
  ]
};
