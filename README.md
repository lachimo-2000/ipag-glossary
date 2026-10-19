# IPAG Glossary — giao diện 5.2

Cập nhật 19/10/2026. Nguồn nội dung giữ nguyên Word **Glossary IPAG_19102026 (4).docx** của bản 5.1: 62 thuật ngữ, phiên bản nội dung 2.0.

## Áp dụng bản cập nhật

Giải nén ZIP và ghi đè các file vào bản 5.1. Giữ nguyên các file và thư mục khác. `index.html` chạy độc lập, có thể mở trực tiếp hoặc gửi riêng cho người khác.

## Thay đổi

- **Tra cứu lọc ngay khi gõ**: cùng lúc cập nhật gợi ý, danh sách nhảy nhanh, số lượng kết quả và đầy đủ phần giải thích bên dưới. Không cần Enter hoặc chọn gợi ý. Xóa từ khóa sẽ khôi phục danh sách trong phần đang chọn.
- Ví dụ tìm HWG sẽ hiển thị hai mục HWG và IPAM vì cả hai có chứa từ khóa. Người đọc cuộn xem các ngữ cảnh ngay trên trang.
- Tìm kiếm vẫn nhận mã, tên và giải nghĩa; hỗ trợ ký tự ở đầu, giữa, cuối từ, có dấu/không dấu, hoa/thường. Mã khớp chính xác vẫn có ưu tiên cao.
- **So sánh hiển thị kết quả để chọn trực tiếp** ngay dưới mỗi ô tìm kiếm, không cần mở dropdown lần nữa. Danh sách có thanh cuộn và dùng được với bàn phím. Chọn một dòng để cập nhật cột tương ứng; Enter trong ô tìm kiếm chọn kết quả đầu tiên.
- Nhãn lựa chọn dùng một tiêu đề, không ghép thêm mã bị lặp. Ví dụ “IPA: Chiến lược & Tam bảo” thay cho “IPA · IPA: Chiến lược & Tam bảo”. Các dấu hai chấm cuối nhãn đơn như “5P:” được bỏ ở danh sách chọn; nội dung nguồn không thay đổi.

Hai cột so sánh tìm và chọn độc lập. Khi đang gõ từ khóa mới, phần giải thích hiện tại của cột vẫn được giữ cho đến khi chọn kết quả.

## File thay đổi

- `index.html`
- `app.js`
- `styles.css`
- `tests/verify.cjs`
- `README.md`

Dữ liệu, logo, ảnh nền, khung HTML và công cụ build không thay đổi.

## Tạo lại và kiểm tra

Tại thư mục ứng dụng đã có đủ file từ các bản trước:

```sh
python3 build.py
node tests/verify.cjs
```

Đã kiểm tra sự kiện gõ tự lọc nội dung, tìm theo từ khóa giải nghĩa, xóa từ khóa, không có kết quả, sự độc lập của hai cột, nhãn không lặp và toàn bộ nội dung nguồn. Kiểm tra dùng DOM mô phỏng, chưa thay thế kiểm tra hiển thị trong trình duyệt thật.

Giữ bảng màu và tài sản IPA. Font chính thức chưa được cung cấp nên vẫn có font dự phòng như bản trước. Chưa đóng gói SCORM.
