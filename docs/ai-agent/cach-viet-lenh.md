---
sidebar_position: 9
title: Cách viết lệnh cho AI
---

# Cách viết lệnh cho AI

Mệnh lệnh tốt giúp AI trả lời đúng ý và ít phải chuyển cho nhân viên. Hãy viết mệnh lệnh như khi **giao việc cho một nhân viên mới**: rõ ràng, cụ thể, không vòng vo.

## Nguyên tắc chung

1. **Rõ ràng và cụ thể** — viết càng rõ, AI làm càng đúng.
2. **Có ví dụ cho trường hợp phức tạp** — đặc biệt khi AI phải tính toán (tính tiền, combo, freeship).
3. **Giao việc cho AI, không viết sẵn tin gửi khách** — "Khi khách hỏi…, hãy…" thay vì "Dạ chị ơi…".
4. **Giá và phí ship để ở trang sản phẩm** — nhập dạng bảng trên sản phẩm, đừng lặp lại trong mệnh lệnh để AI không nhận hai con số khác nhau.

## 1. Rõ ràng và cụ thể

### Ví dụ 1

> ❌ "Nếu đơn trên 300k thì shop có thể cân nhắc freeship cho khách nha"

> ✅ "Nếu tổng đơn hàng từ 300.000 đ trở lên thì miễn phí giao hàng."

Câu đầu dùng "có thể cân nhắc" — AI không biết lúc nào thì freeship, lúc nào thì không.

### Ví dụ 2

> ❌ "Combo 2 nón bucket giá 230k nha, rẻ hơn mua lẻ đó"

> ✅ "Mua combo 2 nón bucket kaki có giá 230.000 đ. Nghĩa là mua theo combo thì rẻ hơn mua lẻ. Ví dụ khách mua lẻ 2 nón thì giá là 129.000 x 2 = 258.000 đ, đắt hơn mua combo 28.000 đ."

*Ở ví dụ trên, một nón bucket kaki giá lẻ 129.000 đ.*

## 2. Có ví dụ cho trường hợp phức tạp

Khi AI cần tính toán, hãy đưa ví dụ cách tính.

> ❌
> Giá sản phẩm như sau:
> - Nón bucket kaki: 129.000 đ
> - Nón lưỡi trai thêu chữ bebe: 99.000 đ
> - Combo 2 nón bucket: 230.000 đ
> - Combo 2 nón lưỡi trai: 180.000 đ

> ✅
> Giá sản phẩm như sau:
> - Nón bucket kaki: 129.000 đ
> - Nón lưỡi trai thêu chữ bebe: 99.000 đ
> - Combo 2 nón bucket: 230.000 đ
> - Combo 2 nón lưỡi trai: 180.000 đ
>
> Ví dụ cách tính giá:
> - Khách mua 1 nón bucket và 1 nón lưỡi trai: 129.000 + 99.000 = 228.000 đ.
> - Khách mua 3 nón bucket: 1 combo 2 nón (230.000 đ) + 1 nón lẻ (129.000 đ) = 359.000 đ.
> - Khách mua 4 nón lưỡi trai: 2 combo x 180.000 = 360.000 đ.
> - Khách mua 2 nón bucket và 3 nón lưỡi trai: 230.000 (combo bucket) + 180.000 (combo lưỡi trai) + 99.000 (1 nón lưỡi trai lẻ) = 509.000 đ.

:::tip Với bảng giá trên sản phẩm
Nếu sản phẩm dùng **Bảng giá mới**, bạn nhập các mức combo ngay trên trang sản phẩm và Diro tự viết phần giá cho AI. Mở tab **Sản phẩm** trong [Mệnh lệnh](./menh-lenh.md) để xem AI đang hiểu giá thế nào.
:::

## 3. Mỗi mệnh lệnh một ý

Tách các ý khác nhau thành nhiều mệnh lệnh. Bạn dễ bật/tắt, sửa từng ý, và Diro dễ phát hiện mệnh lệnh mâu thuẫn nhau.

> ❌ "Xưng em gọi chị, trả lời ngắn, khách hỏi giao hàng thì nói 2-4 ngày, khách khiếu nại thì chuyển nhân viên."

> ✅ Bốn mệnh lệnh riêng: xưng hô · độ dài câu trả lời · thời gian giao hàng · chuyển nhân viên khi khiếu nại.

## 4. Nói rõ khi nào chuyển nhân viên

AI không nên tự bịa câu trả lời. Hãy nói rõ tình huống nào thì chuyển:

> "Nếu khách hỏi về chương trình khuyến mãi mà bạn không có thông tin, đừng tự trả lời, hãy chuyển cuộc hội thoại cho nhân viên."

## 5. Thử lại sau mỗi lần sửa

Sau khi thêm hoặc sửa mệnh lệnh, vào [Chat thử](./chat-thu.md) và hỏi đúng tình huống đó. Nếu Diro báo **mệnh lệnh không rõ** hoặc **bị xung đột** khi lưu, đọc phần **Lý do** và cân nhắc dùng **Mệnh lệnh gợi ý**.
