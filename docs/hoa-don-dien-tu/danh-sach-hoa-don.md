---
sidebar_position: 3
title: Danh sách hoá đơn
---

# Danh sách hoá đơn

Mọi hoá đơn Diro đã xuất nằm ở **Đơn hàng → Hoá đơn**. Tại đây bạn tra cứu hoá đơn, xem bản
PDF và xử lý các hoá đơn lỗi.

## Khi nào hoá đơn được phát hành

Diro xuất hoá đơn khi đơn chuyển sang **Đã giao hàng** hoặc **Đã thu tiền**, nếu đủ các điều kiện:

- Đơn có tick **Xuất hoá đơn**.
- Công tắc **Tự xuất hoá đơn khi đơn giao thành công** đang bật, và đơn giao thành công
  **sau** thời điểm bật.

Diro gửi hoá đơn sang M-Invoice, **ký và phát hành ngay**, không có bước nháp. Ngày hoá đơn là
ngày gửi đi. Sau đó hoá đơn chờ cơ quan thuế (CQT) cấp mã. Diro tự kiểm tra kết quả từ CQT
trong tối đa 7 ngày.

- Lỗi mạng: Diro tự thử lại tối đa 6 lần (cách nhau 1, 2, 4, 8, 16, 32 phút).
- Lỗi dữ liệu hoặc M-Invoice báo lỗi: hoá đơn chuyển **Lỗi xuất** ngay, chờ bạn xử lý.
- Mỗi đơn chỉ có một hoá đơn. Diro chặn xuất trùng.

## Trang danh sách

Khi đã có hoá đơn, trang gồm:

- **Thẻ tổng hợp**: **Đã xuất** và **Tổng tiền đã xuất** (trong khoảng ngày đang chọn),
  **Cần xử lý** (tính mọi thời điểm). Bấm vào thẻ để lọc nhanh.
- **Các thẻ lọc**: **Cần xử lý**, **Đang xử lý**, **Thành công**, **Tất cả**.
- **Bộ lọc**: ô tìm theo **Số HĐ / Mã đơn / SĐT / Tên KH / Mã tra cứu**; khoảng ngày (mặc định
  tháng này); trạng thái; trang; ký hiệu; ô **Đơn đã hoàn**. Có nút **Xuất Excel** (tối đa 5.000 dòng).
- **Bảng**: **Ngày HĐ**, **Ký hiệu – Số**, **Đơn hàng**, **Khách hàng**, **Tổng tiền**,
  **Trạng thái**, **Mã tra cứu**.

Trên trang **Đơn hàng** cũng có cột **Hoá đơn**, hiện số hoá đơn và mã tra cứu của từng đơn.

## Các trạng thái hoá đơn

| Trạng thái | Ý nghĩa |
|---|---|
| **Đang xuất** | Diro đang gửi sang M-Invoice |
| **Chờ CQT** | Đã phát hành, đang chờ cơ quan thuế cấp mã. Quá 24 giờ sẽ hiện **Chờ CQT lâu** |
| **Thành công** | Cơ quan thuế đã chấp nhận |
| **Lỗi xuất** | Không gửi được, cần sửa và xuất lại |
| **CQT từ chối** | Cơ quan thuế từ chối, xem lý do trong chi tiết |

Hoá đơn của đơn bị **hoàn hàng** sau khi đã xuất có thêm cảnh báo **Đơn đã hoàn — cần điều chỉnh
HĐ trên M-Invoice**.

## Xử lý hoá đơn cần xử lý

Thẻ **Cần xử lý** gom hoá đơn **Lỗi xuất**, **CQT từ chối** và hoá đơn của đơn đã hoàn mà bạn
chưa đánh dấu xử lý. Bấm vào một hoá đơn để mở khung chi tiết, đọc mục **Bạn cần làm gì**.

Menu **⋯** ở cuối mỗi dòng có:

- **Xem hoá đơn (PDF)**, **Sao chép mã tra cứu**, **Mở M-Invoice**, **Xem đơn**, **Mở hội thoại**.
- **Xuất lại**: chỉ có cho hoá đơn **Lỗi xuất**. Diro dựng lại hoá đơn từ dữ liệu đơn hiện tại,
  nên bạn sửa đơn trước rồi bấm Xuất lại. Thao tác này **phát hành hoá đơn thật**.
- **Đánh dấu đã xử lý** / **Bỏ đánh dấu**: chỉ ghi chú trên Diro, không gửi gì sang M-Invoice.

Tick nhiều dòng để **Xuất lại** hoặc **Đánh dấu đã xử lý** hàng loạt, tối đa 50 hoá đơn mỗi lần.

:::caution Huỷ hoặc điều chỉnh hoá đơn
Diro **không** huỷ, thay thế hay điều chỉnh hoá đơn đã phát hành. Bạn làm việc đó trên
M-Invoice (bấm **Mở M-Invoice**), rồi quay lại Diro bấm **Đánh dấu đã xử lý**.
:::
