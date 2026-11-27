# Gameplay

## Core gameplay loop

1. Quan sát địa hình.
2. Thống nhất cách vượt.
3. Phối hợp chèo, xoay hoặc nghiêng.
4. Vượt vật cản.
5. Nhận phản hồi hoặc thất bại.
6. Thử lại tại checkpoint trong dưới 3 giây.
7. Mở thử thách tiếp theo.

Mỗi màn có mục tiêu đơn giản: tới bến cuối, đưa vật phẩm tới đích hoặc mở cổng. Một thử thách kéo dài từ 30 giây đến 3 phút, xen kẽ các đoạn thư giãn để hai người nghỉ tay và nói chuyện. Không cần cốt truyện hay hệ thống nhiệm vụ phức tạp.

Nhịp mỗi khu vực nên theo mẫu:

1. Giới thiệu một cơ chế mới ở nơi an toàn.
2. Thử thách dùng riêng cơ chế đó.
3. Kết hợp với cơ chế cũ.
4. Đoạn nghỉ.

Không giới thiệu hai cơ chế mới cùng lúc.

## Mô hình điều khiển mái chèo

Đây là hướng mặc định để thử trước, trả lời hai câu hỏi có ảnh hưởng lớn nhất tới cảm giác chơi mà bản 0.1 còn để mở.

- **Hướng kéo chuột tính theo màn hình, không theo thúng.** Camera không xoay theo thúng, nên nếu hướng kéo tính theo thúng thì cùng một thao tác sẽ cho kết quả khác nhau mỗi khi thúng xoay, người chơi sẽ mất định hướng liên tục. Kéo chuột xuống dưới màn hình luôn đẩy thúng lên trên màn hình.
- **Mái chèo gắn với vị trí chú chó.** Chú chó đứng ở đâu trong lòng thúng thì mái chèo nhúng ở mép thúng gần đó. Chuột chỉ dùng để quạt nước, không dùng để đặt vị trí chèo. Cách này bỏ được việc WASD và chuột cùng điều khiển vị trí mái chèo.
- **Lực tác động ngược hướng quạt**, tỉ lệ với tốc độ kéo trong một giới hạn tối đa, để kéo thật nhanh không cho lợi thế vô hạn.

Phương án thay thế cần so sánh khi playtest: chuột tự do đặt mái chèo quanh thúng như bản 0.1. Giữ phương án thắng theo số liệu trong `mvp-and-playtest.md`.

## Chèo và định hướng

Giữ chuột trái để nhúng chèo, kéo chuột để quạt nước, thả chuột để nhấc chèo. Ngừng chèo thì thúng trôi theo quán tính và chậm dần.

| Hai người làm gì                       | Thúng phản ứng |
| -------------------------------------- | -------------- |
| Cùng quạt về một phía với lực cân bằng | Tiến           |
| Một người quạt mạnh hơn                | Lệch hướng     |
| Hai lực ngược nhau                     | Xoay tại chỗ   |
| Cùng quạt ngang khi đứng cân hai bên   | Trượt ngang    |

**Phản hồi bắt buộc:** mũi tên lực nhỏ hiện ở mái chèo mỗi khi quạt, màu riêng cho từng người, để cả hai luôn thấy ai đang đẩy thúng về đâu. Đây là công cụ chính giúp thất bại có nguyên nhân rõ ràng.

**Chế độ chèo nhẹ tay**, tùy chọn trong cài đặt: giữ chuột trái và chỉ hướng bằng chuột, game tự quạt theo nhịp cố định với lực trung bình. Chế độ này giúp người dễ mỏi tay hoặc ít chơi game vẫn chơi được 2–3 giờ, đổi lại không đạt tốc độ tối đa.

Độ nhạy chuột và phạm vi chuyển động mái chèo sẽ được tinh chỉnh qua playtest.

## Xoay và trượt ngang

Xoay phải là kỹ năng có ích, không chỉ là hậu quả của chèo sai. Ví dụ:

- Xoay để đưa người cần làm việc tới gần công tắc.
- Quét mái chèo trúng các công tắc quanh thúng.
- Căn hướng đẩy vật thể.
- Gạt vật cản trôi tới.

Trượt ngang giúp cập bến và né vật cản mà không phải xoay cả thúng.

Lưu ý thiết kế: thân tròn không hẹp hơn khi xoay. Câu đố phải tận dụng vị trí mái chèo, vị trí người chơi, hàng hóa hoặc môi trường, không giả định xoay giúp lọt khe hẹp.

## Di chuyển trong thúng và giữ thăng bằng

WASD di chuyển chú chó trong lòng thúng, theo hướng màn hình. Vị trí chú chó quyết định chỗ nhúng mái chèo và trọng tâm của thúng.

Giữ thăng bằng là tính năng thử nghiệm, có thể bật/tắt trong bản dựng nội bộ để so sánh. Chỉ giữ lại nếu playtest cho thấy nó tạo ra tình huống vui mà không làm mệt. Nếu giữ:

- Thúng chỉ nghiêng rõ khi cả hai dồn về một phía.
- Có cảnh báo trước ít nhất 1 giây trước khi lật: thúng kêu cót két, nước tràn vào mép.
- Chỉ một số đoạn cụ thể như chở hàng hay sóng mới có nguy cơ lật.
- Không để thăng bằng trở thành việc phải canh liên tục suốt game.

## Môi trường và tương tác

- **Dòng nước** đẩy thúng theo một hướng xác định.
- **Xoáy nước** làm lệch hướng.
- **Sóng** gây nghiêng.
- **Vật cản động** yêu cầu căn thời điểm.

Người chơi có thể đẩy phao, chạm công tắc, kéo dây hoặc chở đồ bằng phím Space. Mỗi vật cản cần có dấu hiệu báo trước bằng hình ảnh và âm thanh, và một cách vượt ổn định khi làm đúng.

**Tình huống bất đối xứng tạm thời:** mỗi người có một việc khác nhau. Ví dụ một người hãm giữ thúng đứng yên giữa dòng chảy trong khi người kia với tay kéo dây; hoặc chỉ một người nhìn thấy dấu hiệu trên vách đá và phải chỉ đường. Đây là cách chính để tránh một người giỏi hơn điều khiển tất cả.

## Kỹ năng nâng cao

- **Chèo đồng nhịp:** khi hai người quạt trong cùng một khoảng thời gian ngắn, thúng được cộng thêm một chút lực và có hiệu ứng nước bắn, thưởng cho việc phối hợp.
- **Hãm phối hợp** bằng hai mái chèo.
- **Spin Boost:** thử nghiệm biến một vòng xoay phối hợp thành cú lướt theo hướng chọn. Đây là cơ chế arcade giả tưởng, chỉ giữ nếu thực sự vui và không làm chèo thường mất giá trị.

## Thất bại và checkpoint

Thất bại khi lật thúng, rơi khỏi đường chơi hoặc mất vật phẩm nhiệm vụ. Va chạm thường chỉ làm lệch hướng hoặc giảm tốc.

Checkpoint đặt trước mỗi cụm thử thách khó, thời gian reset dưới 3 giây. Hoạt cảnh thất bại nên ngắn và buồn cười, ví dụ hai chú chó rơi xuống nước rồi lắc người, để biến thất bại thành khoảnh khắc đáng chia sẻ.

Tùy chọn hỗ trợ: giảm tốc xoay, tăng độ ổn định, thêm checkpoint, chế độ chèo nhẹ tay. Các tùy chọn này áp dụng cho cả phòng và cả hai người đều thấy đang bật.
