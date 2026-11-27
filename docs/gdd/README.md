# THÚNG – Game Design Document

Phiên bản 0.2, cập nhật ngày 27/11/2026. Đây là bản điều chỉnh và phân tích từ bản 0.1 "Ý tưởng ban đầu".

Thư mục này là nguồn GDD duy nhất của dự án. Mọi thay đổi về thiết kế được sửa trực tiếp tại đây và đi qua Pull Request như code.

## Mục lục

| File                  | Nội dung                                                        |
| --------------------- | --------------------------------------------------------------- |
| `overview.md`         | Tóm tắt, tổng quan dự án, tầm nhìn và ba trụ cột thiết kế       |
| `market.md`           | Game tham chiếu, điểm khác biệt, điểm mạnh, điểm yếu, cơ hội    |
| `gameplay.md`         | Core loop và toàn bộ cơ chế: chèo, xoay, thăng bằng, môi trường |
| `controls.md`         | Bộ điều khiển, tutorial, camera, giao tiếp giữa hai người chơi  |
| `networking.md`       | Online co-op, độ trễ, hướng tiếp cận mạng, luồng vào phòng      |
| `level-design.md`     | Năm khu vực, tiến trình độ khó, phạm vi bản đầu                 |
| `game-modes.md`       | Chế độ chơi và khả năng chơi lại                                |
| `art-and-audio.md`    | Nhân vật, phong cách low poly, giao diện, âm thanh              |
| `mvp-and-playtest.md` | Mốc 0, MVP, bố cục demo, thước đo playtest                      |
| `business.md`         | Mô hình kinh doanh và marketing                                 |
| `roadmap.md`          | Lộ trình năm giai đoạn                                          |
| `risks.md`            | Rủi ro và phương án xử lý                                       |
| `decisions.md`        | Quyết định đã chốt, mặc định để thử, việc cần chốt              |

## Điều chỉnh chính so với bản 0.1

- Bổ sung mảng kỹ thuật mạng: vật lý dùng chung qua mạng được nâng thành rủi ro số 1 và đưa vào ngay Giai đoạn 1, thay vì chỉ thử trên một máy.
- Chốt mô hình điều khiển: hướng kéo chuột tính theo màn hình, mái chèo gắn với vị trí chú chó; thêm chế độ chèo nhẹ tay để tránh mỏi cổ tay.
- Thêm Mốc 0 – "Hồ trống": kiểm chứng cảm giác chèo trước khi làm câu đố, thăng bằng hay lobby.
- Thu gọn MVP: giữ thăng bằng chuyển thành tính năng thử nghiệm có thể bật/tắt; chỉ giữ hai loại vật cản trong bản đầu.
- Giảm rào cản mua hàng: đề xuất Friend's Pass, một người mua và hai người chơi, cùng hỗ trợ Steam Remote Play Together.
- Tên game: dùng tên tiếng Anh làm tên chính để dễ tìm trên Steam, giữ "Thúng" làm chi tiết nhận diện.
- Bổ sung các thước đo cụ thể cho playtest và các điều kiện dừng hoặc đổi hướng ở từng giai đoạn.

## Quy ước viết tài liệu

- Viết ngắn, ưu tiên gạch đầu dòng và bảng.
- Không dùng icon hay emoji, không dùng dấu ngoặc tròn.
- Ghi chú playtest để trong `docs/playtest/`, mỗi buổi một file, đặt tên theo ngày dạng `2026-11-27.md`.
