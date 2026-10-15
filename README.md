# IPAG Glossary — ứng dụng 3.0

Nội dung: **Glossary IPAG_15102026 2.docx**, phiên bản 2.0, tháng 10/2026.
Giao diện và chức năng: cập nhật 15/10/2026.

## Sử dụng ngay

Mở `index.html` bằng Edge, Chrome, Firefox hoặc Safari. Có thể gửi riêng file HTML; dữ liệu, logo, ảnh nền, avatar, CSS và JavaScript đã được nhúng. Không cần Internet hoặc cài thư viện. Với email, tải file xuống rồi mở trong trình duyệt thay vì cửa sổ xem trước của email.

Lần đầu mở, nhập đầy đủ họ tên và chọn avatar Nam/Nữ. Tên gọi lấy từ cuối cùng sau khi bỏ khoảng trắng thừa: `Trương Minh Đức` → `Đức`. Có thể sửa tên/avatar bằng nút hồ sơ ở góc trên.

## Các cập nhật

- Hồ sơ và avatar công sở bằng SVG; quần áo theo bảng màu IPA.
- Hai logo chính thức, giữ nguyên tỷ lệ và màu ảnh. Logo trong menu dẫn về trang chủ. Ảnh tòa nhà là nền mờ ở phần chào mừng và trang chủ.
- Menu đóng/mở được trên máy tính; trên điện thoại menu trượt ra. Khi đóng, không gian nội dung được mở rộng.
- Tìm kiếm xuất hiện ngay ở trang chủ; có gợi ý khi gõ, Enter để tìm, không phân biệt hoa/thường và dấu tiếng Việt.
- Kết quả có tiêu đề, phần nội dung, đoạn trích nguyên văn và tô sáng từ tìm kiếm.
- Bộ lọc 5 phần, A–Z, sắp xếp theo nguồn hoặc alphabet khi không có truy vấn.
- Liên kết thuật ngữ ngay trong giải thích; quay lại giữ điều kiện tra cứu và vị trí cuộn.
- Trên điện thoại, kết quả và chi tiết là hai màn hình riêng, có nút quay lại.
- Mỗi thuật ngữ có hash URL ổn định và nút sao chép. Trên GitHub Pages, sao chép URL đầy đủ; ở bản offline, sao chép tham chiếu tương đối kèm hướng dẫn gửi file HTML.
- Đã xem gần đây; bookmark; so sánh hai thuật ngữ bằng nội dung nguyên văn.
- Highlight sáu màu và ghi chú cá nhân ở từng thuật ngữ. Hỗ trợ chọn qua nhiều đoạn trong cùng phần giải thích. Ghi chú có thể gắn với đoạn đã chọn hoặc toàn thuật ngữ; sửa/xóa được.
- Trang Đã lưu & ghi chú bao gồm bookmark, mục có ghi chú và mục có highlight. Có bộ lọc riêng và nội dung xem trước.
- Báo nội dung chưa rõ: soạn nội dung và sao chép để gửi L&D. **Chưa có backend và chưa tự gửi thông tin đi.**
- Các thành phần bấm được có trạng thái hover, active và focus. Hỗ trợ bàn phím, nhãn truy cập, Escape và giảm chuyển động.

## Cơ chế ưu tiên tìm kiếm

Các tầng được xếp lần lượt:

1. Tên viết tắt/tên mục khớp chính xác toàn bộ truy vấn.
2. Cụm từ nguyên vẹn trong tiêu đề, rồi các từ nguyên vẹn trong tiêu đề.
3. Khớp đầu từ hoặc một phần tiêu đề.
4. Gợi ý gần đúng trong tiêu đề cho lỗi gõ nhỏ: tối đa 1 ký tự với từ từ 4 ký tự; tối đa 2 với từ từ 7 ký tự.
5. Từ nguyên vẹn trong phần giải thích.
6. Một phần từ trong phần giải thích, chỉ cho từ tìm kiếm từ 3 ký tự trở lên.

Trong cùng mức ưu tiên, giữ thứ tự nguồn. Truy vấn ngắn như `OC` không được khớp vào `hoc` (từ “học” sau khi bỏ dấu). OC khớp chính xác đứng trước OCH và các mục chỉ nhắc OC trong nội dung. Không áp dụng sửa lỗi gần đúng cho chữ viết tắt ngắn để tránh nhầm OC với FC.

Khi có truy vấn, ưu tiên mức độ khớp thay vì A–Z. Gợi ý gần đúng chỉ là kết quả tìm kiếm, không sửa nội dung Glossary.

## Flashcard

- Lật 3D theo trục Y, có perspective và mặt trước/sau.
- Xấp thẻ nhiều lớp; kéo/vuốt trái = Cần xem lại, phải = Đã nhớ; thẻ trở về với hiệu ứng nảy nếu vuốt chưa đủ.
- Có nút thao tác tương đương với vuốt, hỗ trợ bàn phím khi thẻ được focus.
- Nền kính mờ với chuyển động nhẹ trong bảng màu IPA.
- Tiến độ phản hồi khi có chuỗi tự đánh giá đã nhớ; hiệu ứng giấy màu khi hoàn tất bộ thẻ.
- Theo dõi ngày ôn liên tiếp dựa trên ngày hoàn tất một lượt ôn ở trình duyệt.
- Âm thanh tổng hợp trực tiếp bằng Web Audio, mặc định tắt. Rung nhẹ sử dụng API của thiết bị khi được hỗ trợ; tính năng có thể không hoạt động trên một số trình duyệt/thiết bị.
- Nút mở rộng thẻ để đọc phần giải thích dài. Tắt chuyển động trong cài đặt, đồng thời luôn tôn trọng `prefers-reduced-motion` của thiết bị.
- Các kết quả “Đã nhớ/Cần xem lại” là tự đánh giá của người học, không phải câu trả lời đúng/sai hay chứng nhận hoàn thành LMS.

## Dữ liệu cá nhân

Tên, avatar, bookmark, note, highlight, mục đã đọc, đã nhớ, lịch sử vừa xem và cài đặt lưu bằng localStorage trên trình duyệt hiện tại. Không có tài khoản đăng nhập hoặc đồng bộ giữa thiết bị. Trên máy dùng chung, hồ sơ lưu thuộc trình duyệt đó; có thể thay đổi hoặc xóa dữ liệu qua cài đặt.

Nếu trình duyệt chặn hoặc hết dung lượng lưu, ứng dụng báo rõ thay đổi chỉ còn trong phiên mở. Chức năng đọc/tra cứu vẫn dùng được. Không tự gửi tên hoặc ghi chú đi nơi khác.

Có nút **Tải ghi chú & tiến độ** để tải bản sao JSON. Phiên bản này chưa có tính năng nhập khôi phục JSON. Giữ nguyên khóa lưu của bản cũ để tiếp tục dùng bookmark/tiến độ đã có khi mở tại cùng đường dẫn/origin.

## Đưa lên GitHub Pages

1. Giải nén ZIP.
2. Đưa các file bên trong lên repository; `index.html` ở thư mục gốc.
3. Chọn **Settings → Pages → Deploy from a branch**, nhánh `main`, thư mục `/ (root)`.
4. Sau khi GitHub triển khai, sử dụng URL Pages được cấp. Nút Sao chép liên kết lúc này tạo URL trực tiếp đến từng thuật ngữ.

Không có phụ thuộc đường dẫn tuyệt đối hoặc dịch vụ bên ngoài. Chọn phạm vi chia sẻ repository/trang theo quy định tài liệu nội bộ của đơn vị.

## Cấu trúc để bảo trì

- `index.html`: bản chạy độc lập, tất cả nội dung và tài sản đã được nhúng.
- `content.json`: toàn bộ dữ liệu gốc, không sửa khi chưa có phê duyệt nội dung.
- `shell.html`: khung HTML.
- `base.css`, `enhancements.css`: kiểu dáng giao diện.
- `app.js`: logic ứng dụng.
- `assets/`: ba ảnh người dùng cung cấp, giữ nguyên bytes.
- `build.py`: dựng HTML bằng Python 3, không cần thư viện ngoài.

Sau khi sửa mã nguồn, chạy:

```bash
python build.py
```

Không cần build để mở file `index.html` đã có. Khi gửi riêng HTML, có thể đổi tên thành `IPAG_Glossary.html`.

## Nội dung và nhận diện thương hiệu

Nội dung gốc đã được giữ nguyên cả cách viết, dấu câu, khoảng trắng và thuật ngữ: **206 đoạn văn không rỗng, 18 ô mục lục, 58 mục tra cứu**. Các đoạn trích, phần so sánh và mặt sau flashcard đều lấy từ nguồn. Không thêm định nghĩa ngắn, ví dụ hoặc diễn giải mới. Nhãn UI và câu chào là nội dung giao diện.

Nguồn BI: `ipa-brand-identity-checker.skill`, quy chuẩn IPA Group.

| Hạng mục | Trạng thái | Chi tiết |
| --- | --- | --- |
| Logo | Đã dùng asset chính thức | Hai PNG giữ nguyên bytes, tỷ lệ; không tự vẽ lại hoặc đổi màu. Bản guideline không có kích thước tối thiểu/safe zone số học để chứng nhận các thông số đó |
| Màu thương hiệu | Đạt ở mức mã nguồn | #59798F, #C4AA78, #3E5B6C, #9F8668, #D0BB93, #DCCCAE, #E7DDC9, #212121, #FFFFFF; pha trắng/trong suốt từ cùng bảng màu |
| Typography | Cần bổ sung font | Heading khai báo UTM Hanzel, nội dung SVN Gotham; chưa được cung cấp file font. Máy chưa cài dùng Arial/sans-serif dự phòng |
| Layout & asset | Đã tích hợp, cần QA trực quan | Logo, nền mờ, avatar công sở, responsive, hover/focus; chưa kiểm tra bằng trình duyệt thực tế trong phiên này |
| Đồng thương hiệu | N/A | Không thêm logo đối tác |

Sáu màu highlight cơ bản là màu chức năng theo yêu cầu bổ sung của người dùng; không dùng thay màu nhận diện chính của giao diện.

**Chưa thể xác nhận đạt BI 100% khi chưa nhúng font chính thức và QA hiển thị.** Có thể bổ sung file font được phép nhúng web và chạy:

```bash
python build.py --heading-font path/to/UTM-Hanzel.ttf --body-font path/to/SVN-Gotham.woff2 --body-bold-font path/to/SVN-Gotham-Bold.woff2
```

Font sẽ được nhúng vào HTML, không phụ thuộc font cài sẵn hoặc mạng.

## Kiểm tra

Đã kiểm tra cú pháp JavaScript; 108 kiểm tra logic với DOM mô phỏng, bao gồm ưu tiên OC, tìm không dấu/lỗi gõ, hồ sơ, ghi chú/highlight, lưu và khôi phục dữ liệu, flashcard và tình huống trình duyệt không cho lưu. Đã đối chiếu nguyên văn 206 đoạn, 18 ô mục lục và nội dung 58 màn hình thuật ngữ kể cả khi chèn link/highlight. Ba ảnh đầu vào được giữ nguyên byte-for-byte.

Chưa chạy kiểm tra hình ảnh/chuột/cảm ứng trên trình duyệt thực tế. Cần nghiệm thu trên Edge/Chrome và điện thoại, đặc biệt thao tác chọn đoạn, vuốt, âm thanh và rung vốn phụ thuộc thiết bị.

Tài liệu API đã tham khảo: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vibrate và https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText.

## SCORM giai đoạn sau

Hiện chưa có manifest SCORM hoặc kết nối LMS. Để đóng gói sau, thống nhất SCORM 1.2/2004, quy tắc hoàn thành và những dữ liệu cần ghi nhận; thêm adapter cho khởi tạo, commit, đóng phiên, thời lượng và resume. Đồng bộ dữ liệu tiến độ với `suspend_data` trong giới hạn phiên bản, không chỉ dựa vào localStorage. Kiểm thử trong iframe/cửa sổ LMS. Giữ ổn định ID thuật ngữ để không mất liên kết ghi chú/highlight.
