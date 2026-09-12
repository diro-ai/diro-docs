---
sidebar_position: 1
title: Công cụ chỉnh sửa video
---

# 🎬 Công cụ chỉnh sửa video (Diro Video Editor)

**Diro Video Editor** là phần mềm cài trên máy tính, giúp bạn **thay giọng đọc
của một video** chỉ trong vài phút.

Bạn đưa video vào — từ file trên máy hoặc dán link TikTok. Phần mềm tự **nghe
video và gõ ra thành chữ**. Bạn sửa lại lời thoại tuỳ ý, cắt bớt đoạn thừa, chọn
một giọng đọc tiếng Việt, rồi bấm xuất. Video mới giữ nguyên hình ảnh nhưng lời
đọc là hoàn toàn mới.

![Màn hình làm việc của Diro Video Editor](03-man-lam-viec.png)

:::tip Điều đặc biệt nhất

**Lời đọc luôn dài đúng bằng video.** Bạn không phải căn chỉnh gì cả:

- Bạn **thêm chữ** vào → video xuất ra sẽ **đọc nhanh hơn** cho vừa
- Bạn **bớt chữ** đi → video sẽ **đọc chậm lại**
- Bạn **cắt bớt video** → lời đọc dồn vào khoảng thời gian ngắn hơn, tức là nhanh hơn

Thanh chỉ số ở góc trên bên phải cho bạn biết trước tốc độ đọc sẽ là bao nhiêu,
**trước khi** bạn tốn tiền gọi API.
:::

---

## 📥 Bước 1: Tải phần mềm về máy

| Máy của bạn | Bấm để tải | Sau khi tải xong |
|---|---|---|
| **Windows 10 / 11** | **[⬇️ TẢI CHO WINDOWS](https://github.com/nhatduy129/diro-video-editor/releases/download/v1.3.1/DiroVideoEditor-1.3.1-win-x64.zip)**<br />`DiroVideoEditor-1.3.1-win-x64.zip` · ≈104 MB | **Giải nén** rồi bấm đúp `DiroVideoEditor.exe` — **không cần cài đặt** |
| **macOS 14 trở lên**<br />(cả Apple Silicon và Intel) | **[⬇️ TẢI CHO macOS](https://github.com/nhatduy129/diro-video-editor/releases/download/v1.3.1/DiroVideoEditor-1.3.1-macos.zip)**<br />`DiroVideoEditor-1.3.1-macos.zip` · ≈1,4 MB | **Giải nén** rồi kéo `Video Editor.app` vào thư mục **Applications** |

Số `1.3.1` trong tên file là **phiên bản** — bạn nhìn tên file là biết mình đang
giữ bản nào. Xem các bản phát hành khác tại
[trang Releases](https://github.com/nhatduy129/diro-video-editor/releases).

:::note Cách giải nén
**Windows**: bấm chuột phải vào file `.zip` → **Extract All…** → **Extract**.
Nhớ giải nén ra rồi mới chạy — chạy thẳng từ trong file nén sẽ lỗi.

**macOS**: bấm đúp vào file `.zip` là tự giải nén.
:::

:::warning Lần đầu mở máy có thể cảnh báo — đây là bình thường

Phần mềm chưa mua chứng chỉ ký số nên hệ điều hành chưa "quen mặt":

**Trên Windows** — hiện bảng xanh *"Windows protected your PC"*:
🔹 Bấm **More info** → 🔹 Bấm **Run anyway**

**Trên macOS** — báo *"không mở được vì chưa xác minh nhà phát triển"*:

*Từ macOS 15 (Sequoia) trở lên* — Apple đã **bỏ** cách bấm chuột phải → Open,
nên phải đi đường này:
🔹 Bấm đúp vào app một lần (sẽ hiện cảnh báo, cứ bấm **Done**) →
🔹 Vào  **> System Settings > Privacy & Security** →
🔹 Kéo xuống cuối, chỗ nhắc tên *Video Editor*, bấm **Open Anyway** →
🔹 Xác nhận bằng vân tay hoặc mật khẩu máy

*macOS 14* — bấm **chuột phải** vào app → chọn **Open** → bấm **Open** lần nữa.

Chỉ phải làm một lần duy nhất. Các lần sau mở bình thường.

Vẫn không mở được, hoặc báo app *"bị hỏng"*? Mở **Terminal**, dán dòng này rồi
Enter, sau đó mở app lại:

```bash
xattr -dr com.apple.quarantine "/Applications/Video Editor.app"
```
:::

:::info Trong file zip bản Windows có gì
- `DiroVideoEditor.exe` — phần mềm, bấm đúp là chạy
- `HUONG-DAN.txt` — tóm tắt vài dòng cách mở lần đầu
- `FFMPEG-LICENSE.txt` — giấy phép của bộ xử lý video đi kèm
:::

:::note Vì sao file Windows nặng như vậy?
Vì phần mềm đóng gói sẵn **mọi thứ cần thiết** vào trong một file duy nhất, để
bạn tải về là chạy được ngay mà không phải cài thêm bất cứ thứ gì. Lần chạy đầu
tiên hơi lâu vài giây vì máy đang bung bộ xử lý video ra; những lần sau mở nhanh.
:::

---

## 🔑 Bước 2: Lấy API key

Phần mềm cần một dịch vụ để nghe video và tạo giọng đọc. Bạn chọn **một trong
hai**, tuỳ bạn thích giọng bên nào hơn:

| | Cartesia | ElevenLabs |
|---|---|---|
| Lấy key tại | [play.cartesia.ai/keys](https://play.cartesia.ai/keys) | [elevenlabs.io](https://elevenlabs.io/app/settings/api-keys) |
| Key trông như | `sk_car_…` | `sk_…` |
| Giọng đọc | danh sách giọng tiếng Việt sẵn có | cả thư viện giọng của tài khoản, giọng tiếng Việt xếp lên đầu |

Key gắn với tài khoản của bạn, và chi phí đọc tính vào tài khoản đó.

🔹 **Bước 2.1** — Vào trang của bên bạn chọn ở bảng trên và **đăng ký tài khoản**
(đăng nhập bằng Google cho nhanh).

🔹 **Bước 2.2** — Vào mục **API Keys** rồi bấm tạo key mới, đặt tên bất kỳ
(ví dụ `Diro Video Editor`).

🔹 **Bước 2.3** — Trang web hiện ra một chuỗi dài. **Sao chép ngay lúc đó** —
đóng cửa sổ đi là không xem lại được nữa, phải tạo key mới.

🔹 **Bước 2.4** — Mở Diro Video Editor, dán key vào ô rồi bấm **Kiểm tra & bắt đầu**.

![Màn hình nhập API key](01-nhap-key.png)

**Chỉ có một ô nhập key cho cả hai bên.** Phần mềm tự nhận ra bạn đang dán key
của ai và hiện tên bên đó ngay cạnh chữ **API KEY**, nên không phải chọn gì thêm.
Nó cũng **kiểm tra key trước khi lưu**, nên dán nhầm hoặc thiếu ký tự thì báo
ngay chứ không để bạn làm tiếp rồi mới hỏng.

Đổi từ bên này sang bên kia bất cứ lúc nào: vào **Cài đặt**, dán key mới đè lên.
Danh sách giọng sẽ tải lại theo bên mới.

:::info Key của bạn được cất ở đâu?
Key nằm trên chính máy bạn, chỉ tài khoản máy của bạn đọc được: trên Windows là
**kho bảo mật DPAPI** của hệ điều hành, trên macOS là file riêng trong thư mục
`Library` của bạn. Key không gửi đi đâu ngoài dịch vụ bạn chọn, và lần sau mở
phần mềm không phải nhập lại.

Muốn đổi hoặc xoá key: bấm nút **Cài đặt** ở góc trên bên phải.

**Đang dùng bản cũ hơn 1.3.0?** Key cũ được chuyển sang chỗ mới tự động, bạn
không phải nhập lại.

**Đang dùng bản macOS cũ hơn 1.1.0?** Bản 1.1.0 đổi chỗ cất key nên lần đầu mở
lên bạn phải dán key vào một lần nữa, sau đó thì thôi. Đổi lại, macOS không còn
hỏi mật khẩu đăng nhập mỗi lần mở phần mềm.
:::

![Hộp thoại Cài đặt](04-cai-dat.png)

### 💰 Chi phí khoảng bao nhiêu?

Cartesia tính theo **credit**. Ước lượng cho dễ hình dung:

| Việc | Cách tính |
|---|---|
| Nghe video → ra chữ | 1 credit cho mỗi 2 giây video |
| Tạo giọng đọc | khoảng 1 credit cho mỗi ký tự |

Một video 60 giây với lời đọc 700 chữ tốn khoảng **730 credit**. Mỗi gói của
Cartesia đều tặng sẵn một lượng credit hằng tháng. Xem mình đã dùng bao nhiêu
tại [play.cartesia.ai/usage](https://play.cartesia.ai/usage).

ElevenLabs cũng tính theo ký tự, xem mức dùng tại
[elevenlabs.io](https://elevenlabs.io/app/usage).

:::warning Gói miễn phí của ElevenLabs có hai giới hạn
Những giọng lấy từ **thư viện chung** (trong đó có phần lớn giọng tiếng Việt hay)
chỉ dùng được khi tài khoản đã nâng gói — gói miễn phí bấm vào sẽ báo lỗi cần
trả phí. Các giọng có sẵn của ElevenLabs thì dùng được, nhưng đọc tiếng Việt hơi
nặng giọng nước ngoài.

Muốn giọng Việt tự nhiên mà không nâng gói thì dùng **Cartesia**.
:::

:::tip Nghe thử không tốn tiền
Trong danh sách giọng đọc, nút ▷ là **nghe mẫu có sẵn — miễn phí**.
Nút 💬 bên cạnh mới là đọc thử chính nội dung của bạn, cái này có tính phí (rất nhỏ).
:::

---

## 🎥 Bước 3: Đưa video vào

![Màn hình chọn video](02-chon-video.png)

Có hai cách:

**Cách 1 — Tải lên từ máy.** Bấm **Chọn file video…** rồi chọn file. Nhận các
định dạng `.mp4`, `.mov`, `.m4v`, `.avi`, `.mkv`.

**Cách 2 — Từ link TikTok.** Dán link vào ô rồi bấm **Tải video này**. Phần mềm
tải về **bản không có logo TikTok**.

:::tip Dán nguyên câu chia sẻ cũng được
Nút Chia sẻ của TikTok chép ra cả câu mô tả dài kèm link. Bạn cứ dán nguyên vào,
phần mềm tự nhặt link ra — không cần cắt gọn.
:::

Sau khi có video, phần mềm mất một lúc để **nghe và gõ lại thành chữ**. Video
càng dài càng lâu, thường vài chục giây.

---

## ✏️ Bước 4: Sửa lời thoại

Nội dung nghe được hiện ở ô **NỘI DUNG SẼ ĐỌC** bên phải. Bạn sửa thoải mái:
viết lại cho hay hơn, đổi tên sản phẩm, thêm lời kêu gọi mua hàng, hoặc **xoá
hết gõ lại từ đầu** cũng được.

Bấm **Khôi phục bản gốc** nếu muốn quay lại nội dung ban đầu.

:::caution Nhớ nhìn thanh chỉ số
Sửa tới đâu, thanh chỉ số phía trên đổi tới đó. Đây là chỗ cho bạn biết giọng
đọc sắp tới nghe có tự nhiên không.
:::

---

## ✂️ Bước 5: Cắt bớt đoạn thừa

🔹 Bấm vào **thanh thời gian** để nhảy tới giây cần cắt
🔹 Gõ phím **←** hoặc **→** để xê dịch **từng 0,1 giây** cho đúng điểm
🔹 Bấm **Đánh dấu đầu tại …**
🔹 Kéo hoặc bấm tiếp tới điểm cuối, cũng chỉnh bằng **←** **→** cho chuẩn
🔹 Bấm **✂ Cắt đoạn này**

Đoạn bị cắt hiện **màu đỏ** trên thanh thời gian và liệt kê ở mục **ĐOẠN ĐÃ CẮT**
bên dưới. Bấm 👁 để xem lại đoạn đó, bấm ✕ để bỏ cắt.

Tích sẵn ô **Bỏ qua đoạn đã cắt khi xem** để lúc xem trước, phần mềm tự nhảy qua
những đoạn bạn đã bỏ — xem đúng như bản cuối cùng.

:::tip Canh điểm cắt cho chuẩn từng 0,1 giây (từ bản 1.2.0)
Bấm chuột thôi thì khó trúng: thanh thời gian chỉ rộng vài trăm điểm ảnh, video
dài 5 phút thì mỗi điểm ảnh đã là hơn nửa giây.

Bấm vào thanh một cái, **viền thanh sáng lên** — từ lúc đó phím **←** và **→**
dời vạch đỏ đi **0,1 giây** mỗi lần bấm. Giữ phím thì nó chạy đều. Con số giây
ngay bên trên đổi theo, bạn nhìn đó mà canh.

Đang phát mà gõ mũi tên thì phần mềm **tự dừng lại**, vì đang chạy thì canh
không nổi.
:::

:::note Cắt video KHÔNG tự xoá chữ tương ứng
Đây là cố ý, để bạn tự quyết định giữ hay bỏ câu nào. Cắt xong nhớ ngó lại ô nội
dung xem có cần bớt chữ không.
:::

---

## 🎙️ Bước 6: Chọn giọng đọc

Mỗi dòng có tên giọng, nhãn Nam/Nữ và mô tả ngắn.

- Bấm **▷** để nghe mẫu có sẵn (miễn phí)
- Bấm **💬** để nghe giọng đó đọc chính nội dung của bạn (tốn rất ít)
- Bấm **📌** để ghim giọng đó lên đầu danh sách
- Bấm vào dòng để chọn

Dùng key **Cartesia** thì danh sách chỉ hiện giọng tiếng Việt. Dùng key
**ElevenLabs** thì danh sách hiện cả thư viện giọng của tài khoản bạn, có nhãn
ngôn ngữ ở mỗi dòng và giọng tiếng Việt được xếp lên đầu.

:::tip Ghim giọng hay dùng (từ bản 1.3.0)
Hay dùng đi dùng lại một giọng thì bấm **📌** ở cuối dòng — giọng đó nhảy lên
đầu danh sách và **nằm nguyên ở đó những lần mở phần mềm sau**, khỏi phải cuộn
đi tìm. Giọng đầu danh sách cũng là giọng được chọn sẵn.

Ghim thêm giọng nữa thì giọng vừa ghim nằm trên cùng. Bấm lại **📌** là bỏ ghim,
giọng về đúng chỗ cũ. Ghim lưu ở máy bạn: đổi sang key của bên kia rồi quay lại
thì ghim cũ vẫn còn nguyên.
:::

---

## 📊 Hiểu thanh chỉ số

Đây là phần đáng để ý nhất của phần mềm.

![Thanh chỉ số báo tốc độ đọc](05-thanh-chi-so.png)

| Màu | Ý nghĩa | Nên làm gì |
|---|---|---|
| 🟢 **Xanh** — nghe tự nhiên | Tốc độ trong khoảng 0,85× – 1,20× | Cứ xuất video |
| 🟡 **Vàng** — hơi gượng | 0,70× – 1,50× | Vẫn nghe được, nhưng đã thấy nhanh/chậm |
| 🔴 **Đỏ** — sẽ méo tiếng | Ngoài khoảng trên | Nên sửa lại trước khi xuất |

**Gặp màu đỏ thì làm gì?**

- Giọng đọc **quá nhanh** → bớt chữ đi, hoặc bớt cắt video lại
- Giọng đọc **quá chậm** → thêm chữ vào, hoặc cắt bớt video

---

## 💾 Bước 7: Xuất video

Bấm **Xuất video**, chọn chỗ lưu. Phần mềm sẽ tạo giọng đọc, co cho khớp đúng
thời lượng, rồi ghép với hình.

Xong, nó báo cho bạn biết giọng đọc đã chạy ở tốc độ bao nhiêu, ví dụ
*"giọng đọc chạy ở 0,89× so với bình thường"*.

:::info Tiếng gốc của video bị thay hoàn toàn
Video xuất ra **chỉ còn giọng đọc mới**, không còn tiếng gốc và cũng không có
nhạc nền của video cũ. Muốn có nhạc nền thì ghép thêm ở phần mềm khác.
:::

---

## 📁 Lưu việc đang làm dở

Làm nửa chừng mà phải tắt máy? Bấm **Lưu phiên…** để lưu ra file `.dve`. File
này gói **cả video, nội dung chữ, các đoạn đã cắt và giọng đang chọn**.

Hôm sau mở phần mềm, bấm **Mở phiên đã lưu (.dve)…** là làm tiếp đúng chỗ cũ.

| Phím tắt | Việc |
|---|---|
| `Ctrl + S` (Mac: `⌘S`) | Lưu phiên |
| `Ctrl + Shift + S` (Mac: `⇧⌘S`) | Lưu thành file khác |
| `Ctrl + O` (Mac: `⌘O`) | Mở phiên đã lưu |

:::tip File lưu ở máy Windows mở được trên máy Mac
Hai bản dùng chung một định dạng file, nên bạn lưu ở máy bàn Windows rồi mở
trên MacBook vẫn chạy bình thường.
:::

---

## ❓ Gặp trục trặc

**Dán link TikTok mà báo link không mở được**
Link rút gọn đã hết hạn hoặc video bị gỡ. Mở lại video trên TikTok → **Chia sẻ**
→ **Sao chép liên kết**, rồi dán lại. Video ở chế độ riêng tư thì không tải được.

**Báo "API key không hợp lệ"**
Key bị thiếu ký tự lúc sao chép, hoặc đã bị xoá bên dịch vụ. Tạo key mới
([Cartesia](https://play.cartesia.ai/keys) ·
[ElevenLabs](https://elevenlabs.io/app/settings/api-keys)) rồi vào **Cài đặt**
dán lại.

**Báo lỗi cần trả phí khi tạo giọng đọc (ElevenLabs)**
Giọng bạn chọn lấy từ thư viện chung, gói miễn phí không dùng được. Chọn một
giọng có sẵn khác của ElevenLabs, hoặc nâng gói, hoặc chuyển sang key Cartesia.

**Nghe không ra chữ, ô nội dung để trống**
Video không có tiếng, hoặc tiếng quá nhỏ / lẫn nhiều tạp âm. Bạn vẫn **tự gõ nội
dung vào ô** rồi làm tiếp bình thường.

**Khung xem trước bị đen nhưng vẫn bấm được các nút**
Windows thiếu bộ giải mã cho định dạng video đó. Chỉ ảnh hưởng phần **xem trước**
— bạn vẫn cắt và xuất video được bình thường.

**Xuất video xong thấy hết credit**
Xem mức dùng tại [play.cartesia.ai/usage](https://play.cartesia.ai/usage) và
nâng gói tại [play.cartesia.ai/subscription](https://play.cartesia.ai/subscription).

---

## 📌 Cần chuẩn bị những gì

- Máy **Windows 10/11** hoặc **macOS 14** trở lên (macOS chạy được cả máy chip
  Apple lẫn máy chip Intel)
- Một tài khoản **Cartesia** hoặc **ElevenLabs** (đăng ký miễn phí) để lấy API key
- Kết nối mạng khi nghe video và khi tạo giọng đọc
