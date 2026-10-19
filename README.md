# IPAG Glossary — giao diện 5.0

Cập nhật **19/10/2026**. Nguồn nội dung: **Glossary IPAG_19102026 (3).docx**, phiên bản nội dung 2.0, tháng 10/2026.

## Áp dụng bản cập nhật

ZIP cập nhật chỉ chứa các file khác với giao diện 4.2. Giải nén và ghi đè vào thư mục ứng dụng hiện tại, giữ nguyên các file còn lại. Khi upload qua trình duyệt lên GitHub, giữ đúng thư mục `tests/` của file kiểm tra. Không cần cài npm hoặc chạy server.

`index.html` đã nhúng nội dung, CSS, JavaScript, hai logo và ảnh nền; có thể mở trực tiếp hoặc gửi riêng cho người nhận. File HTML vẫn dùng được khi không có Internet.

## Thay đổi từ 4.2

- Cập nhật đủ **62 thuật ngữ** từ Word ngày 19/10/2026: IPA 9, IPAM 22, IPAG 7, EPIC 18, iLead 6.
- Nội dung giải thích lấy từ Word đúng; HTML được gửi chỉ dùng tham khảo cấu trúc giao diện “Năm bộ, một vòng”.
- Trang chủ thể hiện năm bộ nối nhau: Khởi – Hành – Tinh – Thông – Chuyên, kèm khung 5P, 5C, 5K, 5S, 5PoA theo tham chiếu được yêu cầu.
- Chuyển nút Tra cứu thuật ngữ xuống dưới Nội dung chính, tăng kích thước và làm nổi bật.
- Menu chính còn Trang chủ, Tra cứu, So sánh. Hướng dẫn chuyển vào khối Ba cách tra cứu ngay trên trang tra cứu.
- Tra cứu hiển thị đầy đủ thuật ngữ và phần giải thích ngay trên cùng một trang, chia năm phần. Không còn mở chi tiết bằng lớp phủ.
- Tra nhanh A–Z hiển thị **tên thuật ngữ cụ thể**, sắp theo alphabet. Khi chọn một phần hoặc tìm kiếm, danh sách nhảy nhanh cập nhật theo phạm vi đó.
- Liên kết thuật ngữ trong giải thích nhảy đến mục tương ứng. Nút Quay lại vị trí trước khôi phục phần, từ khóa và vị trí cuộn trước khi nhảy.
- Sửa bộ chọn so sánh: mỗi cột có ô tìm kiếm và danh sách chọn HTML chuẩn của trình duyệt. Sau khi gõ, mở danh sách để chọn kết quả; có thể nhấn Enter để chọn kết quả đầu tiên. Hai cột chọn độc lập.
- Giữ hiệu ứng xuất hiện lần lượt, hover và focus trong bảng màu IPA; tôn trọng thiết lập giảm chuyển động.

## Tính nguyên vẹn của nội dung

Đã đối chiếu **62 tiêu đề**, **134 đoạn giải thích** và **214 đoạn nguồn** với Word. Giữ nguyên chữ, dấu, cách viết và cả những chỗ có thể là lỗi biên tập trong nguồn; không tự sửa hoặc bổ sung định nghĩa.

Bốn ô mục đích sử dụng trên trang chủ tiếp tục bỏ dấu hai chấm và khoảng trắng ngăn cách đầu phần mô tả theo feedback đã duyệt. Dữ liệu gốc trong `content.json` vẫn giữ nguyên.

Không sử dụng thư “Gia tài của chúng ta” đã đính kèm nhầm. Không lấy phần định nghĩa từ HTML tham khảo để thay thế Word.

## Tìm kiếm và liên kết

Tìm kiếm hỗ trợ không dấu, không phân biệt hoa/thường và gợi ý lỗi gõ nhỏ cho từ đủ dài. Thứ tự ưu tiên: tên mục khớp chính xác → từ/cụm từ trong tiêu đề → đầu từ/một phần tiêu đề → gần đúng → nội dung giải thích. Truy vấn ngắn như OC không nhận “học” chỉ vì bỏ dấu thành “hoc”. Kết quả chia theo phần; phần có kết quả phù hợp nhất được đưa lên trước khi tìm kiếm.

Liên kết tự động dùng quy tắc riêng: **đúng từ, đúng dấu, đúng kiểu chữ**. Ví dụ TAC liên kết được trong `(TAC)`, `TAC,` hoặc `TAC/OC`; “tắc”, “tac”, “cụ” và “cu” không bị liên kết sai. Các chữ, số, dấu kết hợp Unicode và dấu gạch dưới được xem là thành phần của từ. Thuật ngữ dài được ưu tiên để tránh chia nhỏ thành các liên kết ngắn.

## Các file cập nhật

- `index.html`: ứng dụng HTML chạy độc lập.
- `app.js`: điều hướng, tìm kiếm, đọc liền trang, nhảy nhanh và so sánh.
- `styles.css`: giao diện responsive và hiệu ứng.
- `content.json`: dữ liệu Word mới.
- `shell.html`: khung tạo HTML, đã bỏ dialog chi tiết cũ.
- `tests/verify.cjs`: kiểm tra logic cho giao diện mới.
- `README.md`: hướng dẫn này.

Các logo, ảnh nền, `.nojekyll` và `build.py` không thay đổi so với 4.2 nên không kèm lại trong ZIP cập nhật.

## Tạo lại HTML và kiểm tra

Tại thư mục ứng dụng đã có đủ file từ bản trước:

```sh
python3 build.py
node tests/verify.cjs
```

Python 3 và Node.js không cần thư viện ngoài cho hai lệnh này. Kiểm tra bằng DOM mô phỏng xác nhận luồng dữ liệu và sự kiện; không thay thế kiểm tra trực quan trong trình duyệt.

## Nhận diện và giới hạn kiểm tra

Giữ nguyên ảnh logo và nền tòa nhà đã cung cấp. Sử dụng các màu #59798F, #3E5B6C, #C4AA78, #E7DDC9, #212121 và #FFFFFF, cùng biến thể độ trong suốt.

CSS ưu tiên UTM Hanzel và SVN Gotham. Chưa được cung cấp file font chính thức nên vẫn có Arial dự phòng trên máy chưa cài font. Có thể dùng các tùy chọn `--heading-font`, `--body-font`, `--body-bold-font` của `build.py` để nhúng font được cấp phép như ở bản trước.

Đã kiểm tra cú pháp, tìm kiếm, bộ lọc theo phần, danh sách nhảy nhanh, khôi phục vị trí, thao tác đổi lựa chọn của cả hai cột so sánh, toàn bộ nội dung Word và tính đầy đủ của ZIP. Chưa kiểm tra hiển thị trên trình duyệt thật trong phiên thực hiện này.

Chưa đóng gói SCORM theo phạm vi hiện tại.
