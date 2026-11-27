# Tổng quan dự án

## Tóm tắt và kết luận

Ý tưởng đáng để làm prototype. Hình ảnh hai chú chó chèo một chiếc thúng tròn quay mòng mòng dễ hiểu trong vài giây, hợp với clip ngắn và streamer, và khác biệt đủ rõ so với các game chèo thuyền co-op hiện có nếu việc xoay thúng thực sự trở thành kỹ năng.

Thành bại của dự án không nằm ở số màn chơi hay mỹ thuật mà ở hai câu hỏi cần trả lời trong 4 tuần đầu:

1. Chèo bằng chuột có còn sướng tay khi chơi online có độ trễ không.
2. Người chơi có tự định hướng được khi thúng xoay liên tục không.

Nếu một trong hai câu trả lời là không, cần đổi thiết kế điều khiển trước khi làm thêm nội dung.

## Mô tả

Game phiêu lưu co-op hai người, trong đó cả hai cùng điều khiển một chiếc thuyền thúng hình tròn để vượt địa hình, chướng ngại vật và thử thách phối hợp. Thúng có thể tiến, trượt ngang, xoay và nghiêng. Mỗi hành động của một người đều ảnh hưởng tới người còn lại.

| Mục                | Nội dung                                                                                                                    |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| Thể loại           | Physics-based co-op, adventure, comedy, obstacle course                                                                     |
| Nền tảng           | PC/Steam                                                                                                                    |
| Số người chơi      | Online co-op đúng 2 người trên 2 máy, mỗi người dùng chuột và bàn phím riêng                                                |
| Remote Play        | Hỗ trợ Steam Remote Play Together để hai người chơi chung khi chỉ một người sở hữu game                                     |
| Nhân vật           | Hai chú chó có khả năng như nhau                                                                                            |
| Góc nhìn           | Từ phía sau, chếch cao, camera không xoay theo thúng                                                                        |
| Thời lượng bản đầu | 2–3 giờ cho lần chơi đầu, cộng thêm nội dung chơi lại: Time Attack, huy chương, đường tắt                                   |
| Đối tượng          | Bạn bè, cặp đôi, streamer, người thích game phối hợp, cả người ít chơi game                                                 |
| Tên tạm thời       | Basket Buddies hoặc Round Trip làm tên chính; "THÚNG" là tên dự án nội bộ hoặc phụ đề. Chưa kiểm tra trùng tên và nhãn hiệu |
| Tagline            | Two friends. One basket. Zero sense of direction.                                                                           |

## Tầm nhìn

Game dễ hiểu nhưng khó thành thạo, khiến người chơi vừa cười vừa muốn thử lại. Chiếc thúng tròn là yếu tố nhận diện, nhưng cảm giác hai người phối hợp ngày càng ăn ý mới là lý do để chơi tiếp.

Văn hóa Việt Nam là nguồn cảm hứng tùy chọn, không phải trọng tâm. Bản đồ có thể hoàn toàn giả tưởng, không cần địa danh thật, cốt truyện hay yếu tố dân gian. Ưu tiên giá trị giải trí.

## Ba trụ cột thiết kế

1. **Điều khiển chung một phương tiện.** Không ai tự đi được một mình. Cả hai đều có vai trò chủ động, không ai trở thành hành khách.
2. **Hỗn loạn có thể kiểm soát.** Thất bại phải buồn cười và có nguyên nhân rõ ràng, để người chơi đổ lỗi cho nhau một cách vui vẻ chứ không đổ lỗi cho game.
3. **Thử thách dựa trên chuyển động tròn.** Xoay, trượt ngang và đổi vị trí mái chèo phải là công cụ để giải quyết vấn đề, không chỉ là hậu quả của chèo sai.

## Nguyên tắc kiểm tra tính năng mới

Tính năng đó có làm hai người phải nói chuyện với nhau nhiều hơn không? Nếu không, cân nhắc cắt.
