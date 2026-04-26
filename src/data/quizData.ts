/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question } from '../types';

export const quizData: Question[] = [
  {
    "id": "q_1",
    "category": "Gói Bảo Hành",
    "text": "Bảo hành cơ bản cho máy mới bao gồm quyền lợi gì?",
    "options": [
      "1 đổi 1 15 ngày, sửa chữa 6 tháng",
      "1 đổi 1 30 ngày, sửa chữa 12 tháng",
      "Chỉ sửa chữa 12 tháng",
      "1 đổi 1 30 ngày, sửa chữa 6 tháng"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_2",
    "category": "Gói Bảo Hành",
    "text": "Bảo hành cơ bản cho máy cũ bao gồm quyền lợi gì?",
    "options": [
      "1 đổi 1 15 ngày, sửa chữa 6 tháng",
      "1 đổi 1 30 ngày, sửa chữa 6 tháng",
      "Chỉ sửa chữa 6 tháng",
      "1 đổi 1 30 ngày, sửa chữa 12 tháng"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_3",
    "category": "Gói Bảo Hành",
    "text": "Phụ kiện theo máy được bảo hành cơ bản bao lâu?",
    "options": [
      "Chỉ bảo hành 1 đổi 1, không sửa chữa",
      "15 ngày 1 đổi 1, sửa chữa 6 - 12 tháng",
      "30 ngày 1 đổi 1, sửa chữa 12 tháng",
      "7 ngày 1 đổi 1, sửa chữa 6 tháng"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_4",
    "category": "Gói Bảo Hành",
    "text": "Điều kiện để áp dụng gói bảo hành 1 đổi 1 VIP là gì?",
    "options": [
      "Khi máy bị lỗi phần cứng (main, camera, mic, nguồn, màn hình...)",
      "Do tác động ngoại lực từ người dùng (rơi, vỡ)",
      "Lỗi phần mềm, chạy chậm",
      "Bất cứ khi nào khách muốn"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_5",
    "category": "Gói Bảo Hành",
    "text": "Gói bảo hành 1 đổi 1 VIP có áp dụng cho lỗi do tác động ngoại lực không?",
    "options": [
      "Không áp dụng",
      "Có áp dụng",
      "Tùy tình trạng máy",
      "Chỉ áp dụng với rơi vỡ nhẹ"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_6",
    "category": "Gói Bảo Hành",
    "text": "Trong gói 1 đổi 1 VIP, nếu máy gặp lỗi nhỏ thì xử lý ra sao?",
    "options": [
      "Sửa chữa",
      "Hoàn tiền 100%",
      "Thu lại với giá máy cũ",
      "Bắt buộc đổi máy khác"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_7",
    "category": "Gói Bảo Hành",
    "text": "Khi KH có máy đổi thuộc gói VIP nhưng KHÔNG muốn đổi, công thức hoàn tiền là gì?",
    "options": [
      "HT = GM x 90%",
      "HT = GHT x 80%",
      "HT = GM - (3% x Số ngày SD)",
      "HT = GHT x 90% (Lấy GHT hoặc GM thấp nhất)"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_8",
    "category": "Gói Bảo Hành",
    "text": "Khi KHÔNG có máy đổi thuộc gói VIP cho khách, công thức hoàn tiền là gì?",
    "options": [
      "HT = GM - (3% x Số ngày SD)",
      "HT = GHT x 80%",
      "HT = GM - 10%",
      "HT = GHT x 90%"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_9",
    "category": "Gói Bảo Hành",
    "text": "Khi hoàn tiền gói 1 đổi 1 VIP, nếu khách thiếu 1 món phụ kiện sẽ bị trừ bao nhiêu?",
    "options": [
      "Trừ 500.000đ",
      "Trừ 2% giá máy",
      "Trừ 10% giá máy",
      "Trừ 5% giá máy"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_10",
    "category": "Gói Bảo Hành",
    "text": "Gói bảo hành vào nước, rơi vỡ KHÔNG áp dụng cho thiết bị nào?",
    "options": [
      "MacBook Air",
      "Tất cả điện thoại flagship",
      "iPhone 14 series, iPad",
      "Điện thoại gập, laptop gaming"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_11",
    "category": "Gói Bảo Hành",
    "text": "Gói rơi vỡ, vào nước có bao gồm quyền lợi của gói 1 đổi 1 VIP không?",
    "options": [
      "Đã bao gồm",
      "Khách phải mua riêng",
      "Chỉ bao gồm 50%",
      "Không bao gồm"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_12",
    "category": "Gói Bảo Hành",
    "text": "Trong gói rơi vỡ, nếu lỗi rơi vỡ do khách, thời gian sửa chữa là bao lâu và phí bao nhiêu?",
    "options": [
      "7-14 ngày, khách chịu phí 10%",
      "30 ngày, khách chịu phí 20%",
      "15-20 ngày, khách chịu phí 10%",
      "7-14 ngày, sửa miễn phí"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_13",
    "category": "Gói Bảo Hành",
    "text": "Trong gói rơi vỡ, nếu tiền sửa vượt quá giá máy, phần vượt xử lý thế nào?",
    "options": [
      "Khách phải tự bù phần vượt",
      "Chuyển sang hoàn tiền luôn",
      "Shop và khách chịu 50/50",
      "Shop hỗ trợ 100%"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_14",
    "category": "Gói Bảo Hành",
    "text": "Trong gói rơi vỡ, nếu KHÔNG SỬA ĐƯỢC và đổi máy tương đương, khách chịu phí bao nhiêu?",
    "options": [
      "20%",
      "10%",
      "Miễn phí",
      "5%"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_15",
    "category": "Gói Bảo Hành",
    "text": "Gói rơi vỡ, sau khi đổi máy tương đương, bảo hành tiếp theo của máy đó ra sao?",
    "options": [
      "Chuyển sang bảo hành 6 tháng sửa chữa",
      "Hết bảo hành",
      "Chuyển sang gói 1 đổi 1 VIP 12 tháng",
      "Tiếp tục áp dụng gói rơi vỡ vô nước"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_16",
    "category": "Gói Bảo Hành",
    "text": "Trong gói rơi vỡ, nếu KHÔNG CÓ MÁY ĐỔI cho khách, công thức hoàn tiền là gì?",
    "options": [
      "HT = GHT x 90%",
      "HT = GHT x 80%",
      "Hoàn 100% GHT",
      "HT = GM - (3% x Số ngày SD)"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_17",
    "category": "Gói Bảo Hành",
    "text": "Phạm vi áp dụng của gói bảo hành S24t là gì?",
    "options": [
      "Áp dụng cho mọi lỗi rơi rớt, vô nước",
      "Áp dụng cho điện thoại cũ",
      "Áp dụng cho điện thoại mới gặp lỗi do nhà sản xuất",
      "Chỉ áp dụng cho iPhone"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_18",
    "category": "Gói Bảo Hành",
    "text": "Gói bảo hành S24t có áp dụng nếu lỗi do tác động người dùng không?",
    "options": [
      "Có",
      "Áp dụng nếu đóng thêm phí",
      "Không",
      "Áp dụng với lỗi rơi vỡ nhẹ"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_19",
    "category": "Gói Bảo Hành",
    "text": "Thời gian xử lý sửa chữa của gói S24t đối với điện thoại/hàng thường là?",
    "options": [
      "15 - 20 ngày",
      "1 tháng",
      "5 - 7 ngày",
      "2 - 4 tuần"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_20",
    "category": "Gói Bảo Hành",
    "text": "Thời gian xử lý sửa chữa của gói S24t đối với Mac là bao lâu?",
    "options": [
      "2 - 4 tuần",
      "Khoảng 1 tháng",
      "7 - 14 ngày",
      "15 - 20 ngày"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_21",
    "category": "Gói Bảo Hành",
    "text": "Trong gói S24t, nếu không có máy đổi, công thức hoàn tiền là gì?",
    "options": [
      "HT = GHT x 80%",
      "HT = GM - (3% x Số ngày SD)",
      "HT = GHT x 90%",
      "HT = GM - 10%"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_22",
    "category": "Gói Bảo Hành",
    "text": "(Tình huống 22) Bảo hành cơ bản cho máy mới bao gồm quyền lợi gì?",
    "options": [
      "1 đổi 1 30 ngày, sửa chữa 12 tháng",
      "1 đổi 1 15 ngày, sửa chữa 6 tháng",
      "Chỉ sửa chữa 12 tháng",
      "1 đổi 1 30 ngày, sửa chữa 6 tháng"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_23",
    "category": "Gói Bảo Hành",
    "text": "(Tình huống 23) Bảo hành cơ bản cho máy cũ bao gồm quyền lợi gì?",
    "options": [
      "1 đổi 1 30 ngày, sửa chữa 6 tháng",
      "1 đổi 1 30 ngày, sửa chữa 12 tháng",
      "Chỉ sửa chữa 6 tháng",
      "1 đổi 1 15 ngày, sửa chữa 6 tháng"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_24",
    "category": "Gói Bảo Hành",
    "text": "(Tình huống 24) Phụ kiện theo máy được bảo hành cơ bản bao lâu?",
    "options": [
      "7 ngày 1 đổi 1, sửa chữa 6 tháng",
      "30 ngày 1 đổi 1, sửa chữa 12 tháng",
      "Chỉ bảo hành 1 đổi 1, không sửa chữa",
      "15 ngày 1 đổi 1, sửa chữa 6 - 12 tháng"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_25",
    "category": "Gói Bảo Hành",
    "text": "(Tình huống 25) Điều kiện để áp dụng gói bảo hành 1 đổi 1 VIP là gì?",
    "options": [
      "Do tác động ngoại lực từ người dùng (rơi, vỡ)",
      "Lỗi phần mềm, chạy chậm",
      "Khi máy bị lỗi phần cứng (main, camera, mic, nguồn, màn hình...)",
      "Bất cứ khi nào khách muốn"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_26",
    "category": "Gói Bảo Hành",
    "text": "(Tình huống 26) Gói bảo hành 1 đổi 1 VIP có áp dụng cho lỗi do tác động ngoại lực không?",
    "options": [
      "Chỉ áp dụng với rơi vỡ nhẹ",
      "Tùy tình trạng máy",
      "Có áp dụng",
      "Không áp dụng"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_27",
    "category": "Gói Bảo Hành",
    "text": "(Tình huống 27) Trong gói 1 đổi 1 VIP, nếu máy gặp lỗi nhỏ thì xử lý ra sao?",
    "options": [
      "Hoàn tiền 100%",
      "Bắt buộc đổi máy khác",
      "Sửa chữa",
      "Thu lại với giá máy cũ"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_28",
    "category": "Gói Bảo Hành",
    "text": "(Tình huống 28) Khi KH có máy đổi thuộc gói VIP nhưng KHÔNG muốn đổi, công thức hoàn tiền là gì?",
    "options": [
      "HT = GM - (3% x Số ngày SD)",
      "HT = GM x 90%",
      "HT = GHT x 90% (Lấy GHT hoặc GM thấp nhất)",
      "HT = GHT x 80%"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_29",
    "category": "Gói Bảo Hành",
    "text": "(Tình huống 29) Khi KHÔNG có máy đổi thuộc gói VIP cho khách, công thức hoàn tiền là gì?",
    "options": [
      "HT = GHT x 80%",
      "HT = GHT x 90%",
      "HT = GM - 10%",
      "HT = GM - (3% x Số ngày SD)"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_30",
    "category": "Gói Bảo Hành",
    "text": "(Tình huống 30) Khi hoàn tiền gói 1 đổi 1 VIP, nếu khách thiếu 1 món phụ kiện sẽ bị trừ bao nhiêu?",
    "options": [
      "Trừ 500.000đ",
      "Trừ 10% giá máy",
      "Trừ 5% giá máy",
      "Trừ 2% giá máy"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_31",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Thời gian bảo hành xử lý thông thường là bao lâu?",
    "options": [
      "2 - 4 tuần",
      "5 - 7 ngày",
      "1 - 2 tuần",
      "1 tháng"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_32",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Thời gian thẩm định bảo hành thường mất bao lâu?",
    "options": [
      "10 - 15 ngày",
      "5 - 7 ngày",
      "1 - 3 ngày",
      "2 - 4 tuần"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_33",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Các bước đầu tiên trên SEP khi khách tới bảo hành là gì?",
    "options": [
      "Tab Nhập xuất > Tạo phiếu PO",
      "Tab Bảo hành > Tiếp nhận > Thêm > Điền thông tin",
      "Tab Bảo hành > Hoàn tiền > Điều phối",
      "Tab Khách hàng > Thu hồi > Xem xét"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_34",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Sau khi điền đầy đủ thông tin bảo hành trên SEP, Nơi nhận TTBH cần chọn là mục nào?",
    "options": [
      "CPS Hồ Chí Minh",
      "CPS Hà Nội",
      "Trung tâm hãng",
      "Trạm điều phối Miền Bắc"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_35",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Bước cuối cùng khi tạo phiếu bảo hành trên SEP là gì?",
    "options": [
      "Lưu > Hoàn tiền",
      "Lưu > Điều phối",
      "Lưu > In biên nhận",
      "Điều phối > Nhập cũ"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_36",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Đối với máy MỚI Apple, khách được bảo hành theo quy định nào?",
    "options": [
      "Bảo hành theo hãng",
      "Shop gửi cho hãng tự tính",
      "Bảo hành tại cửa hàng",
      "Bảo hành 1 đổi 1 tại shop"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_37",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Máy mới Apple chỉ được đổi máy mới cho khách khi nào?",
    "options": [
      "Khi khách yêu cầu gắt gao",
      "Khi thu ngân đồng ý",
      "Khi có gói bảo hành mở rộng 1 đổi 1 và cần phê duyệt từ quản lý ngành hàng",
      "Khi máy vừa mua vòng 7 ngày"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_38",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Đối với máy CŨ Apple, thao tác khi muốn đổi máy cho khách là gì?",
    "options": [
      "Gửi vào nhóm QLNH trên Lark nhờ duyệt",
      "Xin chữ ký của Giám đốc siêu thị",
      "Tự động tạo phiếu xuất đổi",
      "Hệ thống tự động duyệt"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_39",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Bảo hành hàng Apple CẦN PHẢI làm thao tác gì trước tiên?",
    "options": [
      "Thoát iCloud",
      "Xóa mọi dữ liệu trong máy",
      "Chụp ảnh lại mặt trước sau",
      "Sao lưu dữ liệu hộ khách"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_40",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Khi tiếp nhận hàng bảo hành Apple, cần xin thêm thông tin gì của khách?",
    "options": [
      "Xin link Facebook",
      "Xin số CCCD",
      "Xin email khách hàng",
      "Xin địa chỉ nhà"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_41",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Biên nhận (Form A4) khi nhận bảo hành Apple bắt buộc phải có gì?",
    "options": [
      "Chữ ký khách và quản lý",
      "Chỉ cần chữ ký khách",
      "Chỉ cần dấu của cửa hàng",
      "Đầy đủ chữ ký khách và dấu của cửa hàng"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_42",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Phụ kiện loại 1 (Tai nghe, loa < 1 triệu) sẽ bảo hành như thế nào?",
    "options": [
      "Đổi tại shop (Bảo hành sửa chữa 6 tháng cho đồ đổi)",
      "Gửi về hãng 2-4 tuần",
      "Sửa chữa mất 5-7 ngày",
      "Không bảo hành"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_43",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Trong bộ phụ kiện loại 1, quy định tiếp theo cho máy đổi đó là gì?",
    "options": [
      "Không bảo hành nữa",
      "Bảo hành 1 đổi 1 6 tháng",
      "Bảo hành sửa chữa 1 tháng",
      "Bảo hành sửa chữa 6 tháng"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_44",
    "category": "Lý Thuyết Bảo Hành",
    "text": "Phụ kiện loại 2 (Tai nghe, loa trên 1 triệu) bảo hành như thế nào?",
    "options": [
      "Hoàn tiền ngay tại shop",
      "Gửi bảo hành 5-7 ngày",
      "Đổi ngay lập tức tại shop",
      "Sửa chữa 2-4 tuần theo quy định hãng"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_45",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 15) Thời gian bảo hành xử lý thông thường là bao lâu?",
    "options": [
      "1 - 2 tuần",
      "2 - 4 tuần",
      "5 - 7 ngày",
      "1 tháng"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_46",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 16) Thời gian thẩm định bảo hành thường mất bao lâu?",
    "options": [
      "1 - 3 ngày",
      "10 - 15 ngày",
      "5 - 7 ngày",
      "2 - 4 tuần"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_47",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 17) Các bước đầu tiên trên SEP khi khách tới bảo hành là gì?",
    "options": [
      "Tab Bảo hành > Tiếp nhận > Thêm > Điền thông tin",
      "Tab Bảo hành > Hoàn tiền > Điều phối",
      "Tab Nhập xuất > Tạo phiếu PO",
      "Tab Khách hàng > Thu hồi > Xem xét"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_48",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 18) Sau khi điền đầy đủ thông tin bảo hành trên SEP, Nơi nhận TTBH cần chọn là mục nào?",
    "options": [
      "Trạm điều phối Miền Bắc",
      "CPS Hà Nội",
      "CPS Hồ Chí Minh",
      "Trung tâm hãng"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_49",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 19) Bước cuối cùng khi tạo phiếu bảo hành trên SEP là gì?",
    "options": [
      "Lưu > In biên nhận",
      "Lưu > Điều phối",
      "Điều phối > Nhập cũ",
      "Lưu > Hoàn tiền"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_50",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 20) Đối với máy MỚI Apple, khách được bảo hành theo quy định nào?",
    "options": [
      "Bảo hành tại cửa hàng",
      "Bảo hành theo hãng",
      "Shop gửi cho hãng tự tính",
      "Bảo hành 1 đổi 1 tại shop"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_51",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 21) Máy mới Apple chỉ được đổi máy mới cho khách khi nào?",
    "options": [
      "Khi có gói bảo hành mở rộng 1 đổi 1 và cần phê duyệt từ quản lý ngành hàng",
      "Khi máy vừa mua vòng 7 ngày",
      "Khi khách yêu cầu gắt gao",
      "Khi thu ngân đồng ý"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_52",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 22) Đối với máy CŨ Apple, thao tác khi muốn đổi máy cho khách là gì?",
    "options": [
      "Gửi vào nhóm QLNH trên Lark nhờ duyệt",
      "Xin chữ ký của Giám đốc siêu thị",
      "Tự động tạo phiếu xuất đổi",
      "Hệ thống tự động duyệt"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_53",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 23) Bảo hành hàng Apple CẦN PHẢI làm thao tác gì trước tiên?",
    "options": [
      "Thoát iCloud",
      "Sao lưu dữ liệu hộ khách",
      "Chụp ảnh lại mặt trước sau",
      "Xóa mọi dữ liệu trong máy"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_54",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 24) Khi tiếp nhận hàng bảo hành Apple, cần xin thêm thông tin gì của khách?",
    "options": [
      "Xin số CCCD",
      "Xin email khách hàng",
      "Xin địa chỉ nhà",
      "Xin link Facebook"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_55",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 25) Biên nhận (Form A4) khi nhận bảo hành Apple bắt buộc phải có gì?",
    "options": [
      "Chỉ cần dấu của cửa hàng",
      "Đầy đủ chữ ký khách và dấu của cửa hàng",
      "Chữ ký khách và quản lý",
      "Chỉ cần chữ ký khách"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_56",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 26) Phụ kiện loại 1 (Tai nghe, loa < 1 triệu) sẽ bảo hành như thế nào?",
    "options": [
      "Đổi tại shop (Bảo hành sửa chữa 6 tháng cho đồ đổi)",
      "Sửa chữa mất 5-7 ngày",
      "Gửi về hãng 2-4 tuần",
      "Không bảo hành"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_57",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 27) Trong bộ phụ kiện loại 1, quy định tiếp theo cho máy đổi đó là gì?",
    "options": [
      "Bảo hành sửa chữa 1 tháng",
      "Bảo hành sửa chữa 6 tháng",
      "Không bảo hành nữa",
      "Bảo hành 1 đổi 1 6 tháng"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_58",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 28) Phụ kiện loại 2 (Tai nghe, loa trên 1 triệu) bảo hành như thế nào?",
    "options": [
      "Sửa chữa 2-4 tuần theo quy định hãng",
      "Đổi ngay lập tức tại shop",
      "Hoàn tiền ngay tại shop",
      "Gửi bảo hành 5-7 ngày"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_59",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 29) Thời gian bảo hành xử lý thông thường là bao lâu?",
    "options": [
      "1 tháng",
      "5 - 7 ngày",
      "2 - 4 tuần",
      "1 - 2 tuần"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_60",
    "category": "Lý Thuyết Bảo Hành",
    "text": "(Kiểm tra quy định 30) Thời gian thẩm định bảo hành thường mất bao lâu?",
    "options": [
      "1 - 3 ngày",
      "2 - 4 tuần",
      "5 - 7 ngày",
      "10 - 15 ngày"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_61",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Khi định giá, bước đầu tiên trước nhất là làm gì?",
    "options": [
      "Lập biên bản định giá",
      "Vào SEP nhập PO ngay lặp tức",
      "Kiểm tra ngoại hình và các chức năng cơ bản của máy",
      "Xin ngay SĐT và CCCD khách"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_62",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Khi kiểm tra thông tin khách hàng nhập máy, cần xác nhận các hạng khách nào?",
    "options": [
      "Member, SVIP, Diamond",
      "Snew, Smem, Svip",
      "Bạc, Vàng, Bạch Kim",
      "Khách lạ, Khách quen"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_63",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Với máy mua tại HT CELLPHONES TRƯỚC 16/6/2021, khi thu cũ phải tạo chứng từ gì?",
    "options": [
      "Lập biên bản thu hồi",
      "Chỉ nhập vào app",
      "Lập phiếu nhập (PO)",
      "Bỏ qua chứng từ"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_64",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Khi máy mua TRÁI MIỀN hoặc mua ngoài hệ thống, cần tạo phiếu gì?",
    "options": [
      "Lập biên bản thu hồi",
      "Lập phiếu nhập (PO)",
      "Phiếu yêu cầu trợ giá",
      "Hóa đơn đỏ"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_65",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Máy mua tại hệ thống CellphoneS SAU 17/6/2021, phải làm chứng từ gì để nhập máy?",
    "options": [
      "Lập phiếu nhập PO",
      "Giấy phép xuất trực tiếp",
      "Nhờ thu ngân làm biên bản thu hồi",
      "Khách lên hệ thống báo tự hủy"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_66",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Vỏ lô bị xước định giá trừ bao nhiêu?",
    "options": [
      "Hỗ trợ 15%",
      "Trừ 100% phí thay mới",
      "Trừ thẳng 500k",
      "Trừ 50% phí thay mới"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_67",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Khi định giá màn hình và kính máy cũ, mức hỗ trợ là bao nhiêu?",
    "options": [
      "Hỗ trợ 15%",
      "Không hỗ trợ",
      "Hỗ trợ 30%",
      "Hỗ trợ 10%"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_68",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Khi định giá màn hình và kính, cần lựa chọn tiêu chí nào trên hệ thống?",
    "options": [
      "Chọn kính ép để bù đắp",
      "Chọn loại màn tốt nhất, giá cao nhất",
      "Chọn loại màn linh kiện rẻ nhất",
      "Chọn loại màn trung bình"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_69",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Định giá: Camera máy cũ có 1 đốm thì trừ bao nhiêu tiền?",
    "options": [
      "Trừ tiền thay camera",
      "Trừ 500k",
      "Trừ 800k",
      "Trừ 1 triệu"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_70",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Định giá: Camera máy cũ có 2 đốm thì trừ bao nhiêu tiền?",
    "options": [
      "Trừ 1,5 triệu",
      "Trừ tiền thay camera",
      "Trừ 500k",
      "Trừ 800k"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_71",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Định giá: Camera máy cũ có nhiều hơn 3 đốm thì bị trừ bao nhiêu?",
    "options": [
      "Không thu mua",
      "Trừ tiền thay camera",
      "Trừ 800k",
      "Trừ 600k"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_72",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Khi máy chuẩn bị thu có Pin dưới 85%, phần trăm hỗ trợ và lựa chọn loại linh kiện thay thế là gì?",
    "options": [
      "Không thu mua",
      "Hỗ trợ 50% theo pin hãng",
      "Pin tốt nhất và hỗ trợ 15%",
      "Pin chọn loại rẻ nhất và hỗ trợ 30%"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_73",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Với các cụm linh kiện khác, CellphoneS hỗ trợ thay/sửa định giá mức nào?",
    "options": [
      "Hỗ trợ thay 30%",
      "Không hỗ trợ",
      "Trừ 100% không hỗ trợ",
      "Hỗ trợ thay 15%"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_74",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Khi thu đổi với dòng máy iPhone, iPad, AirPods, tiền sạc nguồn bị trừ ra sao?",
    "options": [
      "Không trừ",
      "Trừ 300k",
      "Trừ 200k",
      "Trừ 100k"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_75",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Khi thu đổi với dòng Tất cả máy Android, sạc nguồn bị tính phí bao nhiêu?",
    "options": [
      "Không trừ",
      "Trừ tiền cáp 50k",
      "Trừ 200k",
      "Trừ 10% giá máy"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_76",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Mức trợ giá linh kiện thu cũ thông thường nằm ở khung bao nhiêu?",
    "options": [
      "Trợ giá thu cũ 15%",
      "Trợ giá thu cũ 30%",
      "Trợ giá thu cũ 50%",
      "Trợ giá 10%"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_77",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Khách hàng hạng nào được trợ giá thẻ thành viên thu cũ tối đa 200k?",
    "options": [
      "Svip",
      "Smem",
      "Snew",
      "Tất cả đều được"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_78",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Hạng Smem được trợ giá tối đa khi thu cũ là bao nhiêu?",
    "options": [
      "Tối đa 300k",
      "Tối đa 1 triệu",
      "Tối đa 200k",
      "Tối đa 500k"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_79",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Hạng Svip được trợ giá tối đa khi thu cũ là bao nhiêu?",
    "options": [
      "Tối đa 200k",
      "Tối đa 500k",
      "Tối đa 100k",
      "Tối đa 300k"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_80",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Với khách thu cũ đổi mới, thành viên hạng Smem được chiết khấu THÊM bao nhiêu trên giá máy mới?",
    "options": [
      "5%",
      "2%",
      "0.5%",
      "1%"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_81",
    "category": "Lý Thuyết Nhập Máy",
    "text": "Với khách thu cũ đổi mới, thành viên hạng Svip được chiết khấu THÊM bao nhiêu trên giá máy mới?",
    "options": [
      "3%",
      "5%",
      "0.5%",
      "1%"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_82",
    "category": "Lý Thuyết Nhập Máy",
    "text": "(Test ĐG số 22) Khi định giá, bước đầu tiên trước nhất là làm gì?",
    "options": [
      "Lập biên bản định giá",
      "Vào SEP nhập PO ngay lặp tức",
      "Kiểm tra ngoại hình và các chức năng cơ bản của máy",
      "Xin ngay SĐT và CCCD khách"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_83",
    "category": "Lý Thuyết Nhập Máy",
    "text": "(Test ĐG số 23) Khi kiểm tra thông tin khách hàng nhập máy, cần xác nhận các hạng khách nào?",
    "options": [
      "Member, SVIP, Diamond",
      "Bạc, Vàng, Bạch Kim",
      "Snew, Smem, Svip",
      "Khách lạ, Khách quen"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_84",
    "category": "Lý Thuyết Nhập Máy",
    "text": "(Test ĐG số 24) Với máy mua tại HT CELLPHONES TRƯỚC 16/6/2021, khi thu cũ phải tạo chứng từ gì?",
    "options": [
      "Lập phiếu nhập (PO)",
      "Chỉ nhập vào app",
      "Lập biên bản thu hồi",
      "Bỏ qua chứng từ"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_85",
    "category": "Lý Thuyết Nhập Máy",
    "text": "(Test ĐG số 25) Khi máy mua TRÁI MIỀN hoặc mua ngoài hệ thống, cần tạo phiếu gì?",
    "options": [
      "Lập biên bản thu hồi",
      "Lập phiếu nhập (PO)",
      "Phiếu yêu cầu trợ giá",
      "Hóa đơn đỏ"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_86",
    "category": "Lý Thuyết Nhập Máy",
    "text": "(Test ĐG số 26) Máy mua tại hệ thống CellphoneS SAU 17/6/2021, phải làm chứng từ gì để nhập máy?",
    "options": [
      "Lập phiếu nhập PO",
      "Khách lên hệ thống báo tự hủy",
      "Nhờ thu ngân làm biên bản thu hồi",
      "Giấy phép xuất trực tiếp"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_87",
    "category": "Lý Thuyết Nhập Máy",
    "text": "(Test ĐG số 27) Vỏ lô bị xước định giá trừ bao nhiêu?",
    "options": [
      "Trừ 100% phí thay mới",
      "Hỗ trợ 15%",
      "Trừ 50% phí thay mới",
      "Trừ thẳng 500k"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_88",
    "category": "Lý Thuyết Nhập Máy",
    "text": "(Test ĐG số 28) Khi định giá màn hình và kính máy cũ, mức hỗ trợ là bao nhiêu?",
    "options": [
      "Hỗ trợ 10%",
      "Hỗ trợ 30%",
      "Không hỗ trợ",
      "Hỗ trợ 15%"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_89",
    "category": "Lý Thuyết Nhập Máy",
    "text": "(Test ĐG số 29) Khi định giá màn hình và kính, cần lựa chọn tiêu chí nào trên hệ thống?",
    "options": [
      "Chọn kính ép để bù đắp",
      "Chọn loại màn linh kiện rẻ nhất",
      "Chọn loại màn trung bình",
      "Chọn loại màn tốt nhất, giá cao nhất"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_90",
    "category": "Lý Thuyết Nhập Máy",
    "text": "(Test ĐG số 30) Định giá: Camera máy cũ có 1 đốm thì trừ bao nhiêu tiền?",
    "options": [
      "Trừ 800k",
      "Trừ 1 triệu",
      "Trừ 500k",
      "Trừ tiền thay camera"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_91",
    "category": "Quy Trình Thu Cũ",
    "text": "Quy trình thu cũ tiêu chuẩn gồm bao nhiêu bước?",
    "options": [
      "8 bước",
      "6 bước",
      "5 bước",
      "4 bước"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_92",
    "category": "Quy Trình Thu Cũ",
    "text": "Bước 1 trong quy trình thu cũ là gì?",
    "options": [
      "Lên SEP nhập cũ",
      "Kiểm tra ngoại hình",
      "Xin SĐT khách",
      "Báo giá lần 1"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_93",
    "category": "Quy Trình Thu Cũ",
    "text": "Bước 2 trong quy trình thu cũ là gì?",
    "options": [
      "Bóc cường lực",
      "Lên SEP nhập cũ",
      "Xin SĐT khách",
      "Kiểm tra ngoại hình"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_94",
    "category": "Quy Trình Thu Cũ",
    "text": "Trong Quy trình thu cũ, Bước 3 yêu cầu thực hiện những thao tác gì?",
    "options": [
      "Báo giá luôn cho khách",
      "Reset máy, test pin và đăng xuất iCloud",
      "Kiểm tra ngoại hình và chức năng, chụp ảnh máy và check giá trên hệ thống",
      "Chỉ mở máy dán tem thu"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_95",
    "category": "Quy Trình Thu Cũ",
    "text": "Khách hàng sẽ được báo giá Lần 1 ở bước mấy?",
    "options": [
      "Bước 5",
      "Bước 4",
      "Bước 3",
      "Bước 6"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_96",
    "category": "Quy Trình Thu Cũ",
    "text": "Tại Bước 5 của quy trình, nhân viên phải thao tác bóc cường lực và kiểm tra chức năng bên trong bắt buộc áp dụng với máy nào?",
    "options": [
      "Chỉ đồ Apple (iPad, Mac, iPhone)",
      "Chỉ iPhone",
      "Tất cả các máy",
      "Chỉnh điện thoại Android"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_97",
    "category": "Quy Trình Thu Cũ",
    "text": "Việc Báo giá khách Lần 2 (nếu OK) nằm ở bước nào?",
    "options": [
      "Bước 5",
      "Bước 6",
      "Bước 4",
      "Bước 3"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_98",
    "category": "Quy Trình Thu Cũ",
    "text": "Bước cuối cùng (Bước 6) trong quy trình thu cũ là thao tác gì?",
    "options": [
      "In biên thu cũ",
      "Gửi khách mã giảm giá 1 triệu",
      "Bổ sung hình ảnh vào hệ thống và hoàn tất",
      "Trả lại cường lực cho khách"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_99",
    "category": "Quy Trình Thu Cũ",
    "text": "Lưu ý quan trọng khi nhận thu cũ 1 chiếc máy KHÔNG MUA TẠI SHOP là gì?",
    "options": [
      "Bắt khách tự làm biên bản bàn giao",
      "Thuế VAT phải trừ trước 20%",
      "Phải tạo phiếu nhập (PO) trên SEP",
      "Từ chối thu cũ"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_100",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 10) Quy trình thu cũ tiêu chuẩn gồm bao nhiêu bước?",
    "options": [
      "4 bước",
      "8 bước",
      "6 bước",
      "5 bước"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_101",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 11) Bước 1 trong quy trình thu cũ là gì?",
    "options": [
      "Xin SĐT khách",
      "Kiểm tra ngoại hình",
      "Báo giá lần 1",
      "Lên SEP nhập cũ"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_102",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 12) Bước 2 trong quy trình thu cũ là gì?",
    "options": [
      "Kiểm tra ngoại hình",
      "Bóc cường lực",
      "Xin SĐT khách",
      "Lên SEP nhập cũ"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_103",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 13) Trong Quy trình thu cũ, Bước 3 yêu cầu thực hiện những thao tác gì?",
    "options": [
      "Reset máy, test pin và đăng xuất iCloud",
      "Kiểm tra ngoại hình và chức năng, chụp ảnh máy và check giá trên hệ thống",
      "Chỉ mở máy dán tem thu",
      "Báo giá luôn cho khách"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_104",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 14) Khách hàng sẽ được báo giá Lần 1 ở bước mấy?",
    "options": [
      "Bước 6",
      "Bước 5",
      "Bước 3",
      "Bước 4"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_105",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 15) Tại Bước 5 của quy trình, nhân viên phải thao tác bóc cường lực và kiểm tra chức năng bên trong bắt buộc áp dụng với máy nào?",
    "options": [
      "Tất cả các máy",
      "Chỉnh điện thoại Android",
      "Chỉ iPhone",
      "Chỉ đồ Apple (iPad, Mac, iPhone)"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_106",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 16) Việc Báo giá khách Lần 2 (nếu OK) nằm ở bước nào?",
    "options": [
      "Bước 3",
      "Bước 4",
      "Bước 6",
      "Bước 5"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_107",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 17) Bước cuối cùng (Bước 6) trong quy trình thu cũ là thao tác gì?",
    "options": [
      "In biên thu cũ",
      "Bổ sung hình ảnh vào hệ thống và hoàn tất",
      "Gửi khách mã giảm giá 1 triệu",
      "Trả lại cường lực cho khách"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_108",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 18) Lưu ý quan trọng khi nhận thu cũ 1 chiếc máy KHÔNG MUA TẠI SHOP là gì?",
    "options": [
      "Từ chối thu cũ",
      "Bắt khách tự làm biên bản bàn giao",
      "Phải tạo phiếu nhập (PO) trên SEP",
      "Thuế VAT phải trừ trước 20%"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_109",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 19) Quy trình thu cũ tiêu chuẩn gồm bao nhiêu bước?",
    "options": [
      "4 bước",
      "6 bước",
      "5 bước",
      "8 bước"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_110",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 20) Bước 1 trong quy trình thu cũ là gì?",
    "options": [
      "Lên SEP nhập cũ",
      "Xin SĐT khách",
      "Báo giá lần 1",
      "Kiểm tra ngoại hình"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_111",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 21) Bước 2 trong quy trình thu cũ là gì?",
    "options": [
      "Kiểm tra ngoại hình",
      "Xin SĐT khách",
      "Lên SEP nhập cũ",
      "Bóc cường lực"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_112",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 22) Trong Quy trình thu cũ, Bước 3 yêu cầu thực hiện những thao tác gì?",
    "options": [
      "Chỉ mở máy dán tem thu",
      "Reset máy, test pin và đăng xuất iCloud",
      "Báo giá luôn cho khách",
      "Kiểm tra ngoại hình và chức năng, chụp ảnh máy và check giá trên hệ thống"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_113",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 23) Khách hàng sẽ được báo giá Lần 1 ở bước mấy?",
    "options": [
      "Bước 5",
      "Bước 4",
      "Bước 3",
      "Bước 6"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_114",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 24) Tại Bước 5 của quy trình, nhân viên phải thao tác bóc cường lực và kiểm tra chức năng bên trong bắt buộc áp dụng với máy nào?",
    "options": [
      "Tất cả các máy",
      "Chỉnh điện thoại Android",
      "Chỉ đồ Apple (iPad, Mac, iPhone)",
      "Chỉ iPhone"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_115",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 25) Việc Báo giá khách Lần 2 (nếu OK) nằm ở bước nào?",
    "options": [
      "Bước 4",
      "Bước 5",
      "Bước 3",
      "Bước 6"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_116",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 26) Bước cuối cùng (Bước 6) trong quy trình thu cũ là thao tác gì?",
    "options": [
      "Bổ sung hình ảnh vào hệ thống và hoàn tất",
      "In biên thu cũ",
      "Trả lại cường lực cho khách",
      "Gửi khách mã giảm giá 1 triệu"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_117",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 27) Lưu ý quan trọng khi nhận thu cũ 1 chiếc máy KHÔNG MUA TẠI SHOP là gì?",
    "options": [
      "Bắt khách tự làm biên bản bàn giao",
      "Thuế VAT phải trừ trước 20%",
      "Từ chối thu cũ",
      "Phải tạo phiếu nhập (PO) trên SEP"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_118",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 28) Quy trình thu cũ tiêu chuẩn gồm bao nhiêu bước?",
    "options": [
      "5 bước",
      "6 bước",
      "8 bước",
      "4 bước"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_119",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 29) Bước 1 trong quy trình thu cũ là gì?",
    "options": [
      "Báo giá lần 1",
      "Lên SEP nhập cũ",
      "Xin SĐT khách",
      "Kiểm tra ngoại hình"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_120",
    "category": "Quy Trình Thu Cũ",
    "text": "(Thực hành QTTT số 30) Bước 2 trong quy trình thu cũ là gì?",
    "options": [
      "Bóc cường lực",
      "Xin SĐT khách",
      "Kiểm tra ngoại hình",
      "Lên SEP nhập cũ"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_121",
    "category": "Quy Trình Nhập Trả",
    "text": "Chính sách nhập trả trong 30 ngày đầu áp dụng cho loại mặt hàng nào?",
    "options": [
      "Chỉ điện thoại thông minh",
      "Chỉ máy cũ đã qua sử dụng",
      "Máy, tai nghe AirPods và phụ kiện cao cấp",
      "Tất cả các mặt hàng gia dụng"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_122",
    "category": "Quy Trình Nhập Trả",
    "text": "Điều kiện BẮT BUỘC đầu tiên để áp dụng nhập trả là gì?",
    "options": [
      "Khách phải mua gói VIP",
      "Phải mua tại shop",
      "Máy chưa từng kích hoạt bảo hành",
      "Phải có hóa đơn trên 20 triệu"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_123",
    "category": "Quy Trình Nhập Trả",
    "text": "Nếu đem nhập trả mà máy bị thiếu hộp hoặc phụ kiện đi kèm thì hệ thống sẽ xử lý ra sao?",
    "options": [
      "Trừ 50% tiền máy",
      "Chỉ cảnh báo mà không tính phí",
      "Tuyệt đối không nhận lại máy",
      "Sẽ tính phí thay/thiếu vào giá trị hoàn"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_124",
    "category": "Quy Trình Nhập Trả",
    "text": "Gói bảo hành mở rộng được hỗ trợ nhập trả trong vòng bao nhiêu ngày?",
    "options": [
      "Chỉ 3 ngày đầu",
      "Được nhập trả trong 7 ngày",
      "Trong 15 ngày đầu",
      "Trong 30 ngày"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_125",
    "category": "Quy Trình Nhập Trả",
    "text": "Mức chi phí khấu trừ (vào gốc) với MÁY MỚI khi nhập trả là bao nhiêu?",
    "options": [
      "20%",
      "15%",
      "10%",
      "30%"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_126",
    "category": "Quy Trình Nhập Trả",
    "text": "Mức chi phí khấu trừ (vào gốc) với MÁY CŨ khi nhập trả là bao nhiêu?",
    "options": [
      "20%",
      "30%",
      "15%",
      "10%"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_127",
    "category": "Quy Trình Nhập Trả",
    "text": "Tỷ lệ khấu trừ khi trả lại PHỤ KIỆN CAO CẤP là bao nhiêu phần trăm?",
    "options": [
      "Khấu trừ 15%",
      "Khấu trừ 20%",
      "Khấu trừ 40%",
      "Hoàn tiền 100%"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_128",
    "category": "Quy Trình Nhập Trả",
    "text": "Tỷ lệ khấu trừ khi trả lại TAI NGHE AIRPODS là bao nhiêu phần trăm?",
    "options": [
      "Khấu trừ 30%",
      "Khấu trừ 20%",
      "Khấu trừ 15%",
      "Khấu trừ 40%"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_129",
    "category": "Quy Trình Nhập Trả",
    "text": "Về Hóa đơn VAT, nếu khách nhập trả máy nhưng KHÔNG CÓ hóa đơn/biên bản điều chỉnh thu hồi VAT thì chịu mức khấu trừ gì?",
    "options": [
      "Không ảnh hưởng, vẫn trả bình thường",
      "Khấu trừ thêm 10% vào giá máy",
      "Từ chối nhập trả",
      "Khấu trừ 20%VAT"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_130",
    "category": "Quy Trình Nhập Trả",
    "text": "Tính khấu trừ: 1 máy đổi trả là Máy đổi bảo hành Mới, không VAT, phí bị trừ tổng là bao nhiêu?",
    "options": [
      "15% + 10% = 25%",
      "Chỉ 15%",
      "Chỉ 20%",
      "20% + 10% = 30%"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_131",
    "category": "Quy Trình Nhập Trả",
    "text": "Nhập trả đối với máy cũ trong thời hạn 30 ngày, và KHÔNG CÓ biên bản điều chỉnh VAT thì mất bao nhiêu %?",
    "options": [
      "40%",
      "15% (máy cũ) + 10% (VAT) = 25%",
      "15%",
      "20%"
    ],
    "correctAnswer": 1
  },
  {
    "id": "q_132",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 12) Chính sách nhập trả trong 30 ngày đầu áp dụng cho loại mặt hàng nào?",
    "options": [
      "Chỉ điện thoại thông minh",
      "Chỉ máy cũ đã qua sử dụng",
      "Máy, tai nghe AirPods và phụ kiện cao cấp",
      "Tất cả các mặt hàng gia dụng"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_133",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 13) Điều kiện BẮT BUỘC đầu tiên để áp dụng nhập trả là gì?",
    "options": [
      "Phải có hóa đơn trên 20 triệu",
      "Máy chưa từng kích hoạt bảo hành",
      "Phải mua tại shop",
      "Khách phải mua gói VIP"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_134",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 14) Nếu đem nhập trả mà máy bị thiếu hộp hoặc phụ kiện đi kèm thì hệ thống sẽ xử lý ra sao?",
    "options": [
      "Trừ 50% tiền máy",
      "Chỉ cảnh báo mà không tính phí",
      "Tuyệt đối không nhận lại máy",
      "Sẽ tính phí thay/thiếu vào giá trị hoàn"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_135",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 15) Gói bảo hành mở rộng được hỗ trợ nhập trả trong vòng bao nhiêu ngày?",
    "options": [
      "Được nhập trả trong 7 ngày",
      "Chỉ 3 ngày đầu",
      "Trong 15 ngày đầu",
      "Trong 30 ngày"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_136",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 16) Mức chi phí khấu trừ (vào gốc) với MÁY MỚI khi nhập trả là bao nhiêu?",
    "options": [
      "20%",
      "15%",
      "10%",
      "30%"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_137",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 17) Mức chi phí khấu trừ (vào gốc) với MÁY CŨ khi nhập trả là bao nhiêu?",
    "options": [
      "30%",
      "20%",
      "15%",
      "10%"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_138",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 18) Tỷ lệ khấu trừ khi trả lại PHỤ KIỆN CAO CẤP là bao nhiêu phần trăm?",
    "options": [
      "Hoàn tiền 100%",
      "Khấu trừ 20%",
      "Khấu trừ 15%",
      "Khấu trừ 40%"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_139",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 19) Tỷ lệ khấu trừ khi trả lại TAI NGHE AIRPODS là bao nhiêu phần trăm?",
    "options": [
      "Khấu trừ 20%",
      "Khấu trừ 40%",
      "Khấu trừ 15%",
      "Khấu trừ 30%"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_140",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 20) Về Hóa đơn VAT, nếu khách nhập trả máy nhưng KHÔNG CÓ hóa đơn/biên bản điều chỉnh thu hồi VAT thì chịu mức khấu trừ gì?",
    "options": [
      "Từ chối nhập trả",
      "Khấu trừ 20%VAT",
      "Không ảnh hưởng, vẫn trả bình thường",
      "Khấu trừ thêm 10% vào giá máy"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_141",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 21) Tính khấu trừ: 1 máy đổi trả là Máy đổi bảo hành Mới, không VAT, phí bị trừ tổng là bao nhiêu?",
    "options": [
      "20% + 10% = 30%",
      "15% + 10% = 25%",
      "Chỉ 20%",
      "Chỉ 15%"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_142",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 22) Nhập trả đối với máy cũ trong thời hạn 30 ngày, và KHÔNG CÓ biên bản điều chỉnh VAT thì mất bao nhiêu %?",
    "options": [
      "15% (máy cũ) + 10% (VAT) = 25%",
      "15%",
      "40%",
      "20%"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_143",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 23) Chính sách nhập trả trong 30 ngày đầu áp dụng cho loại mặt hàng nào?",
    "options": [
      "Tất cả các mặt hàng gia dụng",
      "Chỉ điện thoại thông minh",
      "Chỉ máy cũ đã qua sử dụng",
      "Máy, tai nghe AirPods và phụ kiện cao cấp"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_144",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 24) Điều kiện BẮT BUỘC đầu tiên để áp dụng nhập trả là gì?",
    "options": [
      "Phải có hóa đơn trên 20 triệu",
      "Máy chưa từng kích hoạt bảo hành",
      "Khách phải mua gói VIP",
      "Phải mua tại shop"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_145",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 25) Nếu đem nhập trả mà máy bị thiếu hộp hoặc phụ kiện đi kèm thì hệ thống sẽ xử lý ra sao?",
    "options": [
      "Sẽ tính phí thay/thiếu vào giá trị hoàn",
      "Tuyệt đối không nhận lại máy",
      "Trừ 50% tiền máy",
      "Chỉ cảnh báo mà không tính phí"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_146",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 26) Gói bảo hành mở rộng được hỗ trợ nhập trả trong vòng bao nhiêu ngày?",
    "options": [
      "Được nhập trả trong 7 ngày",
      "Chỉ 3 ngày đầu",
      "Trong 30 ngày",
      "Trong 15 ngày đầu"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_147",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 27) Mức chi phí khấu trừ (vào gốc) với MÁY MỚI khi nhập trả là bao nhiêu?",
    "options": [
      "20%",
      "10%",
      "15%",
      "30%"
    ],
    "correctAnswer": 0
  },
  {
    "id": "q_148",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 28) Mức chi phí khấu trừ (vào gốc) với MÁY CŨ khi nhập trả là bao nhiêu?",
    "options": [
      "30%",
      "20%",
      "15%",
      "10%"
    ],
    "correctAnswer": 2
  },
  {
    "id": "q_149",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 29) Tỷ lệ khấu trừ khi trả lại PHỤ KIỆN CAO CẤP là bao nhiêu phần trăm?",
    "options": [
      "Khấu trừ 15%",
      "Khấu trừ 20%",
      "Hoàn tiền 100%",
      "Khấu trừ 40%"
    ],
    "correctAnswer": 3
  },
  {
    "id": "q_150",
    "category": "Quy Trình Nhập Trả",
    "text": "(Tình huống test Nhập Trả 30) Tỷ lệ khấu trừ khi trả lại TAI NGHE AIRPODS là bao nhiêu phần trăm?",
    "options": [
      "Khấu trừ 40%",
      "Khấu trừ 15%",
      "Khấu trừ 20%",
      "Khấu trừ 30%"
    ],
    "correctAnswer": 2
  }
];
