# IPAG Glossary — giao diện 4.0

Cập nhật: **16/10/2026**. Nội dung Glossary: **phiên bản 2.0, tháng 10/2026**.

## Mở và sử dụng

Mở `index.html` bằng trình duyệt. File này đã nhúng dữ liệu, CSS, JavaScript, hai logo và ảnh nền; có thể gửi riêng để người nhận mở trực tiếp, kể cả khi không có Internet. Nếu nhận qua email, tải file xuống máy rồi mở bằng trình duyệt.

Ứng dụng luôn bắt đầu ở Trang chủ. Menu gồm Trang chủ, Tra cứu, So sánh và Thông tin & hướng dẫn. Có nút đóng/mở menu để mở rộng không gian đọc.

ZIP này là **toàn bộ ứng dụng**, không phải gói cập nhật. Không cần các file ở phiên bản cũ.

## Thay đổi từ giao diện 3.0

- Bỏ nhập tên, chọn avatar và toàn bộ cá nhân hóa.
- Đặt phần giới thiệu được duyệt ở đầu trang chủ; chỉ dùng nội dung giới thiệu đã được cung cấp.
- Bỏ Đã lưu & ghi chú, Tự ôn, Đọc theo phần, phần ôn tập và các công cụ highlight/ghi chú.
- Bỏ nhóm Khám phá 5 phần trong menu. Bộ lọc năm phần vẫn nằm ở Tra cứu.
- Đưa Thông tin & hướng dẫn thành mục điều hướng chính, có phiên bản, ngày cập nhật và lịch sử thay đổi.
- Danh sách đầy đủ 58 thuật ngữ dùng toàn chiều rộng, chữ lớn hơn, không còn chia danh sách/chi tiết thành hai cột.
- Chi tiết mở toàn màn hình với hiệu ứng fade nhẹ. X, Esc hoặc nút quay lại đóng chi tiết và giữ nguyên truy vấn, bộ lọc, sắp xếp, vị trí cuộn và phần tử đang chọn.
- Liên kết thuật ngữ trong giải thích mở ngay trong lớp chi tiết. Nút Thuật ngữ trước trở về nội dung và vị trí cuộn trước đó.
- Bộ lọc chữ cái lấy từ các kết quả thuộc phần đang chọn. Chữ không có thuật ngữ bị vô hiệu hóa. Chuyển phần hoặc gửi truy vấn mới sẽ đưa bộ lọc chữ về A–Z.
- Giữ chức năng so sánh hai thuật ngữ bằng nội dung nguyên văn.

Giao diện mới không đọc hoặc ghi dữ liệu cá nhân của bản cũ. Các dữ liệu cũ trong trình duyệt không bị tự ý xóa. Không có chức năng đăng nhập, thu thập dữ liệu hay gửi thông tin ra ngoài.

## Tìm kiếm

Không phân biệt hoa/thường hoặc dấu tiếng Việt. Khi nhấn Enter, các tầng ưu tiên là:

1. Tên mục/tên viết tắt khớp chính xác toàn bộ truy vấn.
2. Cụm từ hoặc các từ nguyên vẹn trong tiêu đề.
3. Khớp đầu từ hoặc một phần tiêu đề.
4. Gợi ý lỗi gõ nhỏ trong tiêu đề, chỉ với từ đủ dài.
5. Từ nguyên vẹn trong phần giải thích.
6. Một phần từ trong giải thích, chỉ khi từ tìm kiếm có từ ba ký tự.

Trong cùng tầng, giữ thứ tự tài liệu. Ví dụ OC đứng đầu khi tìm “OC”; không nhận “học” là một kết quả chỉ vì “hoc” chứa “oc”. Những đoạn được đánh dấu màu trong tìm kiếm chỉ biểu thị từ khớp, không phải tính năng lưu highlight.

Khi đang gõ, có tối đa sáu gợi ý; dùng phím lên/xuống và Enter để mở gợi ý. Nhấn Enter khi chưa chọn gợi ý để hiển thị danh sách kết quả.

## Cấu trúc đầy đủ

- `index.html`: ứng dụng độc lập, mở trực tiếp.
- `shell.html`: khung HTML để bảo trì.
- `styles.css`: toàn bộ giao diện và responsive.
- `app.js`: điều hướng, tìm kiếm, bộ lọc, chi tiết và so sánh.
- `content.json`: dữ liệu gốc, 58 thuật ngữ và định dạng đoạn.
- `assets/logo-color.png`, `assets/logo-white.png`, `assets/building.png`: ảnh gốc người dùng cung cấp, không chỉnh sửa.
- `build.py`: tạo lại HTML độc lập bằng Python 3, không cần thư viện ngoài.
- `tests/verify.cjs`: kiểm tra logic bằng Node.js, không cần thư viện ngoài.
- `.nojekyll`: file hỗ trợ hosting tĩnh.
- `README.md`: hướng dẫn bàn giao này.

## Tạo lại HTML sau khi sửa mã nguồn

```sh
python3 build.py
node tests/verify.cjs
```

Kết quả tạo lại là `index.html`. Khi sửa `content.json`, chỉ sử dụng nội dung đã được phê duyệt.

## Upload lên GitHub

Giải nén rồi đưa **toàn bộ file và thư mục bên trong ZIP** lên repository. Đặt `index.html` ở thư mục gốc hoặc thư mục được cấu hình làm nguồn GitHub Pages. Đây là ứng dụng tĩnh, không có bước cài npm hoặc chạy server. Chưa thực hiện triển khai hoặc thay đổi repository từ gói bàn giao này.

## Nhận diện thương hiệu

| Hạng mục | Trạng thái | Cách áp dụng |
| --- | --- | --- |
| Logo | Đạt về file và tỷ lệ | Dùng nguyên hai ảnh logo đã cung cấp; ảnh co giãn giữ tỷ lệ, có khoảng trống xung quanh. |
| Màu sắc | Đạt về mã màu | #59798F, #3E5B6C, #C4AA78, #E7DDC9, #212121 và #FFFFFF; nền nhạt dùng độ trong suốt của các màu này. |
| Typography | Cần bổ sung font | CSS ưu tiên UTM Hanzel và SVN Gotham. Chưa có file font chính thức nên máy chưa cài font sẽ dùng Arial dự phòng. |
| Bố cục và tài sản | Cần kiểm tra hiển thị cuối | Ảnh tòa nhà làm nền mờ, nội dung đọc có tương phản cao; chưa có kiểm tra hình ảnh trên trình duyệt thật trong phiên bàn giao. |
| Đồng thương hiệu | N/A | Chỉ dùng thương hiệu IPA Group. |

Chưa thể xác nhận tuân thủ 100% nhận diện khi chưa nhúng font chính thức. Có thể nhúng font được cấp phép bằng:

```sh
python3 build.py --heading-font fonts/UTM-Hanzel.woff2 --body-font fonts/SVN-Gotham-Regular.woff2 --body-bold-font fonts/SVN-Gotham-Bold.woff2
```

Các file font không được kèm trong ZIP vì chưa được cung cấp. Sau khi nhúng, HTML vẫn chạy độc lập.

## Kiểm tra và giới hạn

Đã kiểm tra cú pháp JavaScript, thứ tự tìm kiếm, tìm không dấu/lỗi gõ, các bộ lọc theo phần, chữ cái bị vô hiệu hóa, trạng thái khởi động, logic mở/đóng chi tiết, cùng tính nguyên vẹn của toàn bộ nội dung thuật ngữ và ảnh nguồn.

`tests/verify.cjs` sử dụng DOM mô phỏng để kiểm tra logic; không thay thế kiểm tra hiển thị và tương tác trên trình duyệt thật. Chưa có công cụ kiểm tra trình duyệt được hỗ trợ trong phiên thực hiện. Nên kiểm tra trực quan trên máy tính và điện thoại trước khi phát hành nội bộ rộng rãi.

Hiệu ứng chuyển động tôn trọng thiết lập giảm chuyển động của thiết bị. Chi tiết dùng phần tử dialog của trình duyệt hiện đại; có nút đóng, phím Esc và khôi phục focus.

## Đóng gói tương lai

Chưa tạo SCORM theo yêu cầu. Các file dữ liệu, giao diện và logic đã tách để thuận tiện phát triển tiếp. Khi cần SCORM, cần xác định chuẩn LMS hỗ trợ và quy tắc hoàn thành trước khi bổ sung manifest và kết nối API.
