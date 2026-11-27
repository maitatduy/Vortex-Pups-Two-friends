# Online co-op và kỹ thuật mạng

Bản 0.1 chưa đề cập phần này, nhưng đây là rủi ro lớn nhất của dự án: hai người trên hai máy cùng tác động lực lên một vật thể vật lý dùng chung.

## Vấn đề cần giải quyết

Nếu một máy giữ quyền tính toàn bộ vật lý, máy còn lại sẽ thấy mái chèo của mình phản hồi chậm theo độ trễ mạng, thường từ vài chục tới hơn 100 mili giây. Với cơ chế kéo chuột để quạt nước, cảm giác chậm này dễ khiến người chơi thấy thúng "không nghe lời" và đổ lỗi cho game, trong khi người giữ quyền vật lý lại thấy mượt. Đây chính là kiểu bất công mà trụ cột "thất bại có nguyên nhân rõ ràng" muốn tránh.

## Hướng tiếp cận đề xuất để thử

- **Một nơi duy nhất giữ quyền tính vật lý thúng** để tránh hai máy lệch nhau. Các máy chơi chỉ gửi thao tác chèo lên.
- **Phản hồi tức thì ở máy người chơi:** hoạt ảnh mái chèo, nước bắn và âm thanh chạy ngay khi bấm, không chờ phía tính vật lý, để cảm giác nhập liệu không bị trễ dù chuyển động của thúng có trễ.
- **Dự đoán và làm mượt:** máy người chơi dự đoán chuyển động thúng trong thời gian ngắn rồi điều chỉnh dần theo kết quả chính thức, tránh giật hình.
- **Thiết kế dễ chịu độ trễ:** thúng có quán tính lớn, chuyển động chậm và mềm, nên một độ trễ nhỏ khó nhận ra hơn so với game hành động nhanh. Tránh thử thách đòi phản xạ chính xác dưới 200 mili giây.

## Bài test bắt buộc ở Giai đoạn 1

- Chơi với độ trễ giả lập 50, 100 và 150 mili giây.
- Đổi vai giữa hai người và hỏi xem người không giữ quyền vật lý có cảm thấy khác không.
- Nếu ở 100 mili giây người chơi vẫn thấy khó chịu rõ rệt, cần đổi mô hình điều khiển, ví dụ chèo nhịp thay vì kéo chuột tự do, trước khi làm tiếp.

## Luồng vào game và kết nối

1. Menu chính.
2. Một người tạo phòng.
3. Người còn lại tham gia bằng lời mời Steam hoặc mã phòng.
4. Chọn chó và trang phục.
5. Cả hai bấm Ready.
6. Bắt đầu hành trình.

Khi mất kết nối: tạm dừng game, cho phép người kia vào lại và tiếp tục từ checkpoint gần nhất. Tiến trình campaign được lưu, và cả hai người đều được ghi nhận các màn đã hoàn thành.

## Hiện trạng kỹ thuật trong repo

GDD bản 0.2 dự kiến chốt engine và giải pháp mạng ở Giai đoạn 1. Prototype Mốc 0 trong repo đang dùng:

| Thành phần      | Lựa chọn hiện tại                                                           |
| --------------- | --------------------------------------------------------------------------- |
| Client          | Vite, React, Three.js qua react-three-fiber, chạy trên trình duyệt          |
| Server          | Colyseus, máy chủ riêng giữ quyền tính vật lý thay cho mô hình host/client  |
| Vật lý          | Rapier, chạy trên server                                                    |
| Code dùng chung | `packages/shared`: thông số `TUNING`, kiểu message `PaddleInput`, tên phòng |
| Giả lập độ trễ  | Thông số `simulatedLatencyMs` trong `TUNING`, chỉnh bằng menu debug 0–200ms |

Server riêng đóng vai trò nơi duy nhất tính vật lý, nên cả hai người chơi đều chịu độ trễ như nhau, không ai được lợi như host. Việc chuyển sang nền tảng Steam và lời mời Steam sẽ quyết định sau khi Mốc 0 trả lời được câu hỏi về cảm giác chèo.
