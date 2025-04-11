const storyDB = [
  {
    id: "1", //id từ 1 đến hết
    title: "Thiết Huyết Kiếm Sĩ Hồi Quy", //tên truyện
    origin_name: "Thiết Huyết Cẩu Kiếm Sĩ Báo Thù", //tên thứ 2
    author: "Đang cập nhật", //tên tác giả
    content:
      "1 tác phẩm đến từ Red Ice Studio, studio đã thực hiện Tử Thần Phiêu Nguyệt, Thợ Rèn Huyền Thoại, Cửu Thiên Cực Kiếm...", //giới thiệu cơ bản
    thumb_url:
      "https://img.otruyenapi.com/uploads/comics/thiet-huyet-kiem-si-hoi-quy-thumb.jpg", //ảnh bìa(lưu ý copy link ảnh trên mạng hoặc lưu ảnh về)
    status: "Đang ra", //trạng thái truyện(đang ra,đã full)
    categories: ["Action", "Manhwa", "Truyện Màu"], //thể loại
    chapters: [
      {
        name: "chapter1",
        img_chap: ["anh1.jpg", "anh2.jpg", "....."], //đổi tên ảnh thành 1 2 3 4 5.jpg
      },
      {
        name: "chapter2",
        img_chap: ["anh1.jpg", "anh2.jpg"],
      },
      //mỗi chuyện chỉ cần 5 chapter đề mô thôi
    ],
  },
];
