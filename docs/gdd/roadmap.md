# Roadmap phát triển

| Giai đoạn | Thời gian  | Mốc trên GitHub  | Nội dung                                                                                                                       | Đầu ra                                             |
| --------- | ---------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| 1         | Tuần 1–4   | Mốc 0 – Hồ trống | Chọn engine và giải pháp mạng; dựng "Hồ trống" chạy online giữa hai máy; thử hai mô hình điều khiển; test độ trễ giả lập       | Quyết định có tiếp tục mô hình kéo chuột hay không |
| 2         | Tháng 2–3  | MVP              | Màn 10–15 phút, hai loại vật cản, checkpoint, lobby; playtest vòng 1; cắt tính năng không tạo giá trị; ước lượng Friend's Pass | MVP đạt thước đo playtest                          |
| 3         | Tháng 4–5  | Vertical slice   | Mỹ thuật, âm thanh, tutorial hoàn chỉnh cho một khu vực; chốt tên game; mở trang Steam                                         | Một khu vực chất lượng gần bản thương mại          |
| 4         | Tháng 6–8  | Demo             | Mở rộng lên ba khu vực, cân bằng độ khó, kiểm tra kết nối trên nhiều điều kiện mạng                                            | Demo công khai                                     |
| 5         | Tháng 9–14 | Chưa tạo         | Hoàn thiện, sửa lỗi, tối ưu hiệu năng, chuẩn bị phát hành                                                                      | Bản thương mại                                     |

Lịch này đã kéo dài thêm khoảng 2 tháng so với bản 0.1 để tính đến công việc mạng. Đây vẫn là lịch giả định cho nhóm indie nhỏ, chưa có cam kết nguồn lực hay ngày ra mắt. Cần điều chỉnh khi xác định quy mô nhóm và sau khi Mốc 0 cho biết độ khó thực tế của phần mạng.

## Việc của Mốc 0 trên GitHub

1. Dựng scene mặt hồ, thúng, camera chếch cao không xoay theo thúng.
2. Server chạy Rapier: thúng có quán tính, nhận lực từ hai người chơi.
3. Input kéo chuột bằng Pointer Lock, gửi `PaddleInput` lên server.
4. Client hiển thị thúng theo state server, có nội suy cho mượt.
5. Mũi tên lực có màu riêng cho từng người.
6. Menu debug: thanh giả lập độ trễ 0–200ms, chỉnh `TUNING` trực tiếp.
7. Ba cổng và vài chiếc phao để thử.
