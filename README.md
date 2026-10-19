# IPAG Glossary — giao diện 5.1

Cập nhật **19/10/2026**. Nội dung lấy từ **Glossary IPAG_19102026 (4).docx**, phiên bản nội dung 2.0, tháng 10/2026.

## Áp dụng

ZIP này chỉ chứa các file thay đổi so với 5.0. Giải nén và ghi đè đúng vị trí trong thư mục ứng dụng; giữ lại các file khác. Khi upload trên GitHub, giữ đúng thư mục `tests/` của file kiểm tra.

Có thể mở riêng `index.html` bằng trình duyệt hoặc gửi file này cho người khác; dữ liệu, giao diện và ảnh đã nhúng, dùng được khi không có Internet.

## Thay đổi từ 5.0

- Tìm trên cả mã, tên đầy đủ và toàn bộ giải nghĩa, hỗ trợ chuỗi ký tự ở đầu, giữa hoặc cuối từ, kể cả chuỗi một hoặc hai ký tự. Áp dụng cho Tra cứu và cả hai cột So sánh.
- Tiếp tục không phân biệt hoa/thường và dấu tiếng Việt khi tìm kiếm. Tên mã khớp chính xác vẫn có ưu tiên cao nhất.
- Bỏ nút X trên menu, giữ nút ba thanh ngang. Trên điện thoại, nút này vẫn hiển thị và truy cập được bằng bàn phím khi menu mở; cũng có thể đóng bằng Esc hoặc bấm ra vùng bên ngoài.
- Mỗi thuật ngữ chỉ có một tiêu đề lớn màu xanh, sử dụng nguyên tiêu đề đầy đủ của Word; không lặp mã ở hai tiêu đề.
- Chuyển hướng dẫn về trang chủ, gồm tìm kiếm, đọc theo năm phần, tra nhanh A–Z và so sánh.
- Cập nhật nguyên văn nội dung 5PoA, đặc biệt năm nếp làm nghề chi tiết, từ Word (4).
- Bỏ giới hạn 730px ở đoạn giới thiệu “Năm bộ, một vòng” để tận dụng chiều rộng sẵn có; trên màn hình nhỏ văn bản vẫn tự ngắt dòng.

## Nội dung và điều hướng

Có **62 thuật ngữ**: IPA 9, IPAM 22, IPAG 7, EPIC 18, iLead 6. Tra cứu hiển thị đầy đủ giải nghĩa trên cùng một trang. Danh sách nhảy nhanh hiển thị tên thuật ngữ, sắp A–Z và thay đổi theo phần/từ khóa đang chọn.

Liên kết trong giải nghĩa vẫn dùng quy tắc **đúng từ, đúng dấu, đúng kiểu chữ**, nhận dấu câu làm ranh giới. Quy tắc này độc lập với tìm kiếm linh hoạt, tránh liên kết “tắc” thành TAC hoặc “cụ” thành CU.

Trong So sánh, gõ từ khóa ở từng cột rồi chọn từ danh sách. Nhấn Enter để chọn kết quả đầu tiên. Hai cột độc lập. Bộ chọn dùng phần tử select chuẩn của trình duyệt.

## Các file thay đổi

- `index.html`: bản chạy độc lập.
- `app.js`: tìm kiếm, tiêu đề, menu và vị trí hướng dẫn.
- `styles.css`: trình bày tiêu đề, hướng dẫn và nút menu trên điện thoại.
- `content.json`: dữ liệu Word mới.
- `tests/verify.cjs`: kiểm tra logic cập nhật.
- `README.md`: hướng dẫn này.

Logo, ảnh nền, `build.py`, `shell.html` và `.nojekyll` không thay đổi nên không kèm lại trong ZIP cập nhật.

## Tạo lại HTML

Chạy tại thư mục ứng dụng đã có đủ file từ bản trước:

```sh
python3 build.py
node tests/verify.cjs
```

Không cần thư viện ngoài cho hai lệnh này. Đã kiểm tra tìm kiếm từ giải nghĩa, ký tự giữa/cuối và truy vấn ngắn, sự độc lập của hai cột so sánh, liên kết chính xác, danh sách theo phần và tính nguyên vẹn của nội dung Word.

Đã đối chiếu 62 tiêu đề, 134 đoạn giải thích và 214 đoạn nguồn với Word. Nội dung nguyên văn, bao gồm cách viết và khoảng trắng của nguồn, được giữ trong dữ liệu. Bốn ô mục đích sử dụng trên trang chủ tiếp tục bỏ dấu hai chấm và khoảng trắng đầu mô tả theo feedback đã duyệt.

## Nhận diện và giới hạn

Giữ nguyên logo và ảnh nền đã cung cấp; sử dụng bảng màu IPA. CSS ưu tiên UTM Hanzel và SVN Gotham; vẫn có Arial dự phòng do chưa được cung cấp font chính thức. Có thể nhúng font được cấp phép bằng tùy chọn `--heading-font`, `--body-font`, `--body-bold-font` của `build.py`.

Kiểm tra logic sử dụng DOM mô phỏng; chưa kiểm tra hiển thị trên trình duyệt thật trong phiên này. Hiệu ứng tôn trọng thiết lập giảm chuyển động của thiết bị.

Chưa đóng gói SCORM theo phạm vi hiện tại.
