/*
  --- ĐÂY LÀ "DATABASE" CỦA BẠN ---
  
  QUY TẮC:
  - Thêm tin mới nhất lên TRÊN CÙNG của danh sách.
  - Mỗi bài tin là một khối { ... }, cách nhau bằng dấu phẩy ,
*/

const ALL_NEWS_DATA = [
  // --- (MỚI) VÍ DỤ TIN TIỆN ÍCH ---
  // Bạn (admin) sẽ vào các link này mỗi ngày, xem kết quả,
  // và cập nhật lại "title", "description" cho đúng với ngày hôm đó.

  {
    "title": "Kết quả xổ số Miền Bắc (XSMB) hôm nay 08/11",
    "description": "Cập nhật kết quả xổ số kiến thiết Miền Bắc nhanh và chính xác nhất. Giải đặc biệt hôm nay là...",
    "link": "https://xosokienthiet.vn/", // Nơi bạn lấy thông tin
    "category": "Xổ Số",
    "isFeatured": false,
    "isHot": true
  },
  
  {
    "title": "Giá vàng SJC, 9999 hôm nay 08/11: Tăng nhẹ",
    "description": "Giá vàng SJC sáng nay được niêm yết ở mức 66,5 triệu (mua vào) và 67,5 triệu (bán ra).",
    "link": "https://sjc.com.vn/gia-vang/", // Nơi bạn lấy thông tin
    "category": "Giá Vàng",
    "isFeatured": false,
    "isHot": true
  },
  
  {
    "title": "Lịch thi đấu bóng đá Anh Tối & Đêm nay",
    "description": "Lịch thi đấu vòng 12 Ngoại hạng Anh: Man City vs. Fulham (22:00), Chelsea vs. Arsenal (19:00 Chủ Nhật).",
    "link": "https://vnexpress.net/the-thao", // Nơi bạn lấy thông tin
    "category": "Bóng Đá",
    "isFeatured": false,
    "isHot": true
  },
  
  {
    "title": "Dự báo thời tiết Hà Nội và TP.HCM ngày 09/11",
    "description": "Hà Nội trời se lạnh, không mưa. TP.HCM có mưa rào vào chiều tối.",
    "link": "https://www.google.com/search?q=thoi+tiet+ha+noi", // Nơi bạn lấy thông tin
    "category": "Thời Tiết",
    "isFeatured": false,
    "isHot": false
  },

  // --- (MỚI) VÍ DỤ VỀ GIÁ VÀNG (từ hôm qua, đã cũ hơn) ---
  {
    "title": "Giá vàng hôm nay 07/11: Vàng SJC đứng yên",
    "description": "Giá vàng SJC được cập nhật lúc 9:00 sáng, không đổi so với hôm qua.",
    "link": "https://www.google.com/search?q=gia+vang",
    "category": "Giá Vàng",
    "isFeatured": false,
    "isHot": false
  },
  
  // --- (MỚI) VÍ DỤ VỀ GIÁ XĂNG ---
  {
    "title": "Giá xăng trong nước có thể giảm vào kỳ điều hành tới",
    "description": "Dữ liệu cho thấy giá dầu thế giới giảm, dự báo giá xăng trong nước sẽ được điều chỉnh giảm vào ngày 11/11.",
    "link": "https://www.google.com/search?q=gia+xang",
    "category": "Giá Xăng",
    "isFeatured": false,
    "isHot": false
  },
  
  // --- (MỚI) VÍ DỤ TIN QUỐC TẾ ---
  {
    "title": "Cập nhật bầu cử giữa kỳ tại Mỹ",
    "description": "Kết quả sơ bộ cho thấy...",
    "link": "https://www.google.com/search?q=us+midterm+election",
    "category": "Thế giới",
    "isFeatured": false,
    "isHot": true
  },

  // --- BÀI VIẾT MẪU 3 (Tin Nổi Bật) ---
  {
    "title": "Tin Nổi Bật: Một sự kiện quan trọng vừa xảy ra",
    "description": "Bài viết này sẽ được hiển thị to nhất, ở trên cùng trang. Chỉ tin mới nhất được đánh dấu 'true' mới được chọn.",
    "link": "https://www.google.com/search?q=tin+tuc+3",
    "category": "Thế giới",
    "isFeatured": true,
    "isHot": true
  },
  
  // --- BÀI VIẾT MẪU 2 (Tin Hot) ---
  {
    "title": "Đây là một chủ đề đang RẤT HOT",
    "description": "Bài viết này sẽ xuất hiện ở cả cột 'Tin Mới Nhất' và cột 'Chủ Đề Hot'.",
    "link": "https://www.google.com/search?q=tin+tuc+2",
    "category": "Công nghệ",
    "isFeatured": false,
    "isHot": true
  },

  // --- BÀI VIẾT MẪU 1 (Tin thường) ---
  {
    "title": "Đây là tiêu đề bài viết mẫu đầu tiên",
    "description": "Mô tả ngắn cho bài viết đầu tiên. Bạn có thể viết vài dòng ở đây để thu hút người đọc.",
    "link": "https://www.google.com/search?q=tin+tuc+1",
    "category": "Xã hội",
    "isFeatured": false,
    "isHot": false
  }
  
  // KHỐI CUỐI CÙNG KHÔNG CÓ DẤU PHẨY
];