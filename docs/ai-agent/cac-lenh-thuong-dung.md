---
sidebar_position: 4
title: Các việc hay giao cho AI
---

# Các việc hay giao cho AI

Trang này gom các việc chủ shop hay muốn AI làm, và chỉ chỗ bật/viết cho từng việc. Có việc chỉ cần bật công tắc, có việc cần viết mệnh lệnh.

## Nhắn tin cho khách bình luận và trả lời bình luận

- Bật **Tự động nhắn tin cho khách hàng bình luận vào bài viết** ở [Thiết lập chung](./thiet-lap-chung.md). Khi khách bình luận, AI nhắn tin riêng cho khách và trả lời bình luận để báo khách xem tin nhắn.
- Câu trả lời bình luận lấy từ **Mẫu câu trả lời bình luận** trong **Cài đặt nâng cao**. Sửa cho hợp giọng shop, ví dụ: `{{TEN_KHACH_HANG}} ơi, Nón Bebe đã inbox bạn size và giá rồi nha`.

## Ẩn bình luận tiêu cực

Bật **Tự động ẩn bình luận tiêu cực vào bài viết** ở [Thiết lập chung](./thiet-lap-chung.md). AI ẩn bình luận chê bai, phàn nàn giá, thô tục, quảng cáo sản phẩm khác, và bình luận **có số điện thoại** để khách không bị lộ thông tin.

## Chuyển hội thoại cho nhân viên

AI tự chuyển hội thoại cho nhân viên khi gặp câu hỏi chưa được dạy. Bạn chỉnh thêm bằng:

- **Mệnh lệnh** — Chat Agent mới có sẵn các mệnh lệnh chuyển nhân viên khi khách muốn **thay đổi thông tin đơn**, **huỷ đơn**, hoặc **hỏi tình trạng giao hàng**. Bạn thêm tình huống riêng, hoặc dùng mẫu **Chuyển nhân viên → Khiếu nại / Hỏi ngoài phạm vi** trong nút **Chọn mẫu**. Ví dụ:
  > Nếu khách muốn đặt từ 20 sản phẩm trở lên (mua sỉ), hãy chuyển cuộc hội thoại cho nhân viên.
- **Chuyển cuộc hội thoại cho nhân viên khi phát hiện SĐT trong ảnh** (công tắc ở Thiết lập chung).
- **Tạm ngắt AI bằng tin nhắn trích dẫn** — nhân viên trả lời bằng nút **Trả lời** là AI tạm dừng vài phút.
- **Tự động chuyển hội thoại về AI** — sau một số giờ không ai nhắn, hội thoại tự về lại AI.

## Kéo tương tác khách im lặng

Dùng **Kéo tương tác** trong [Tin nhắn tự động](./tin-nhan-tu-dong.md): Diro tự nhắn lại khách chưa để số điện thoại sau một khoảng im lặng, có thể kèm ưu đãi giá hoặc freeship. Muốn AI tự viết tin cho từng khách thì chọn **Dùng AI**.

## Chào bán thêm sau khi chốt đơn

Dùng **Upsell** trong [Tin nhắn tự động](./tin-nhan-tu-dong.md).

## Báo giá, combo và phí ship

Giá, combo (mua 2 giảm…), hết hàng và phí giao hàng nên nhập **trên trang sản phẩm** dạng bảng (chế độ **Bảng giá mới**), không viết trong mệnh lệnh. AI đọc các khối **💰 Giá & combo**, **🚚 Phí giao hàng**… từ sản phẩm; bạn xem lại AI đang hiểu thế nào ở tab **Sản phẩm** của [Mệnh lệnh](./menh-lenh.md). Cách nhập giá có ở mục **Sản phẩm & kho**.

Nếu mệnh lệnh có ghi số tiền hoặc phí ship, Diro sẽ cảnh báo vì AI có thể nhận hai thông tin khác nhau.

## Gửi ảnh, bảng size, mã QR

Tạo tập ảnh ở [Hình ảnh/Video](./hinh-anh-video.md), rồi viết mệnh lệnh nhắc tên tập (gõ `@` để chọn).

## Xưng hô, độ dài câu trả lời, ngôn ngữ

Viết mệnh lệnh ở nhóm **Quy tắc chung**, hoặc dùng mẫu **Xưng hô** / **Cách trả lời** trong nút **Chọn mẫu**. Ví dụ:

> Gọi khách là "chị" nếu khách là nữ, "anh" nếu là nam, xưng "em". Mỗi tin nhắn không quá 40 từ.

## Nói gì sau khi lên đơn

Sửa mệnh lệnh trong nhóm **Sau khi lên đơn**, ví dụ dặn AI cảm ơn khách và báo thời gian giao dự kiến.

## Không trả lời khi không cần

Bật **Sau khi đã chốt đơn, cho phép AI không phản hồi trong ngữ cảnh phù hợp** ở Thiết lập chung để AI không trả lời những tin kiểu "cảm ơn shop" sau khi đã chốt đơn.
