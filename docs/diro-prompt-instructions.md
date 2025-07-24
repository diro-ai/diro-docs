---
sidebar_position: 3
---

# Hướng dẫn ra lệnh cho Diro AI

### Nguyên tắc chung khi viết lệnh cho AI
1. Rõ ràng và cụ thể: Viết lệnh càng rõ thì kết quả càng chính xác.
2. Có ví dụ cho những trường hợp phức tạp. Nếu AI cần phải phản hồi liên quan tới toán, thí dụ báo giá cho khách hàng, thì lệnh cho AI nên có các ví dụ cụ thể về cách tính giá.

### 1. Rõ ràng và cụ thể: Viết lệnh càng rõ thì kết quả càng chính xác.
#### Ví dụ 1:
> ❌ "Nếu tổng đơn hàng trên 180000 VNĐ trở lên thì bạn có thể cân nhắc miễn phí ship cho khách nha"  

> ✅ "Nếu tổng đơn hàng có giá trị từ 180000 VNĐ trở lên thì miễn phí ship (miễn phí giao hàng)"
#### Ví dụ 2:
> ❌ "Mua một lốc 12 chai dầu gió xanh có giá là 900000 VNĐ nha bạn, giá này sẽ rẻ hơn giá mua lẻ nhé"

> ✅ "Mua một lốc 12 chai dầu gió xanh có giá là 900000 VNĐ. Tức là mua theo lốc 12 chai thì sẽ rẻ hơn là mua lẻ từng chai. Thí dụ khách hàng mua lẻ 11 chai dầu gió xanh thì sẽ có giá là 90000x11 = 990000 VNĐ. Giá như vậy là mắc hơn mua sỉ (mua theo lốc) 12 chai."  

*Ở ví dụ ở trên, 1 chai dầu gió xanh bán lẻ có giá 90k*
### 2. Có ví dụ cho những trường hợp phức tạp. Nếu AI cần phải phản hồi liên quan tới toán, thí dụ báo giá cho khách hàng, thì lệnh cho AI nên có các ví dụ cụ thể về cách tính giá.

> ❌  
> Giá sản phẩm như sau:
> - Một chai dầu gió xanh có giá là 90000 VNĐ
> - Một chai dầu gió vàng có giá là 120000 VNĐ
> - Mua một lốc 12 chai dầu gió xanh có giá là 900000 VNĐ.
> - Mua một lốc 12 chai dầu gió vàng có giá là 1200000 VNĐ

> ✅  
> Giá sản phẩm như sau:
> - Một chai dầu gió xanh có giá là 90000 VNĐ
> - Một chai dầu gió vàng có giá là 120000 VNĐ
> - Mua một lốc 12 chai dầu gió xanh có giá là 900000 VNĐ.
> - Mua một lốc 12 chai dầu gió vàng có giá là 1200000 VNĐ  
>
> Ví dụ về cách tính giá
> - Khách hàng mua 1 chai dầu gió xanh và 1 chai dầu gió vàng, thì tổng giá trị đơn hàng là 90000 + 120000 = 210000 VNĐ
> - Khách hàng mua 5 chai dầu gió xanh và 2 lốc dầu gió vàng. Thì giá là 90000x5 = 450k cho 5 chai dầu gió xanh và 120000x2 = 2.400k cho 2 lốc 12 chai dầu gió vàng. Tổng giá trị đơn hàng là 450k + 2.400k = 2.850k
> - Khách hàng mua sỉ 3 lốc dầu gió xanh và 2 chai dầu gió xanh lẻ. Thì giá là 3 x 900k = 2.700k cho 3 lốc dầu gió xanh và 2x90000 = 180k cho 2 chai dầu gió lẻ. Tổng giá trị đơn hàng là 2.700k + 180k = 2.850k
> - Khách hàng mua sỉ 30 chai dầu gió xanh. Lúc này, 30 chai dầu gió xanh sẽ được tính với giả của 2 lốc dầu gió xanh là 24 chai, cộng với 6 chai dầu gió xanh lẻ. Giá của 2 lốc dầu gió xanh là 2 x 900k = 1.800k, cộng với 6 chai dầu gió xanh lẻ là 6 x 90k = 540k. Tổng giá trị đơn hàng là 1.800k + 540k = 2.340k