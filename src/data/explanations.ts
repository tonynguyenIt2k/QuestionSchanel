// Map question IDs to explanation text
// Many questions share the same concept, so we group them

const concepts: Record<string, { ids: string[]; text: string }> = {
  bh_co_ban_moi: {
    ids: ['q_1', 'q_22'],
    text: 'Theo chính sách CellphoneS, máy MỚI được bảo hành cơ bản: 1 đổi 1 trong 30 ngày đầu + sửa chữa miễn phí 12 tháng.'
  },
  bh_co_ban_cu: {
    ids: ['q_2', 'q_23'],
    text: 'Máy CŨ được bảo hành cơ bản: 1 đổi 1 trong 30 ngày + sửa chữa 6 tháng (thấp hơn máy mới do đã qua sử dụng).'
  },
  bh_phu_kien: {
    ids: ['q_3', 'q_24'],
    text: 'Phụ kiện theo máy: 1 đổi 1 trong 15 ngày đầu, sửa chữa từ 6-12 tháng tùy loại phụ kiện.'
  },
  vip_dieu_kien: {
    ids: ['q_4', 'q_25'],
    text: 'Gói 1 đổi 1 VIP chỉ áp dụng khi máy bị lỗi PHẦN CỨNG do nhà sản xuất (main, camera, mic, nguồn, màn hình...), KHÔNG phải lỗi do người dùng.'
  },
  vip_ngoai_luc: {
    ids: ['q_5', 'q_26'],
    text: 'Gói VIP KHÔNG áp dụng cho lỗi do tác động ngoại lực (rơi, vỡ, vào nước). Muốn được bảo vệ khỏi rơi vỡ, khách cần mua thêm gói Rơi vỡ/Vào nước.'
  },
  vip_loi_nho: {
    ids: ['q_6', 'q_27'],
    text: 'Nếu máy chỉ gặp lỗi nhỏ, ưu tiên SỬA CHỮA trước. Chỉ đổi máy khi lỗi nặng không thể sửa được.'
  },
  vip_co_may_khong_doi: {
    ids: ['q_7', 'q_28'],
    text: 'Khi CÓ máy đổi nhưng KH không muốn đổi: HT = GHT × 90% (lấy GHT hoặc GM, chọn giá trị thấp nhất). Khách mất 10% vì từ chối đổi máy.'
  },
  vip_khong_may_doi: {
    ids: ['q_8', 'q_29'],
    text: 'Khi KHÔNG CÓ máy đổi cho khách: HT = GM − (3% × Số ngày sử dụng). Công thức này tính khấu hao theo ngày dùng thực tế.'
  },
  vip_thieu_pk: {
    ids: ['q_9', 'q_30'],
    text: 'Thiếu 1 món phụ kiện khi hoàn trả sẽ bị trừ 5% giá máy/món. Vì vậy cần nhắc khách giữ đầy đủ phụ kiện.'
  },
  rv_khong_ap_dung: {
    ids: ['q_10'],
    text: 'Gói rơi vỡ/vào nước KHÔNG áp dụng cho điện thoại gập và laptop gaming vì cấu tạo đặc biệt, chi phí sửa chữa quá cao.'
  },
  rv_bao_gom_vip: {
    ids: ['q_11'],
    text: 'Gói rơi vỡ/vào nước đã BAO GỒM toàn bộ quyền lợi của gói 1 đổi 1 VIP. Khách không cần mua thêm gói VIP riêng.'
  },
  rv_sua_chua: {
    ids: ['q_12'],
    text: 'Lỗi rơi vỡ do khách: thời gian sửa 7-14 ngày, khách chịu phí 10% giá linh kiện. Shop hỗ trợ 90% còn lại.'
  },
  rv_vuot_gia: {
    ids: ['q_13'],
    text: 'Nếu chi phí sửa vượt quá giá trị máy, phần vượt KHÁCH PHẢI TỰ BÙ. Shop chỉ hỗ trợ trong phạm vi giá trị máy.'
  },
  rv_doi_may: {
    ids: ['q_14'],
    text: 'Khi không sửa được và phải đổi máy tương đương, khách chịu phí 10%. Đây là mức phí ưu đãi so với mua máy mới.'
  },
  rv_sau_doi: {
    ids: ['q_15'],
    text: 'Sau khi đã đổi máy qua gói rơi vỡ, máy mới chuyển sang bảo hành sửa chữa 6 tháng (không còn gói rơi vỡ nữa).'
  },
  rv_hoan_tien: {
    ids: ['q_16'],
    text: 'Gói rơi vỡ không có máy đổi: HT = GHT × 80%. Mức hoàn thấp hơn gói VIP vì đã bao gồm quyền lợi rơi vỡ.'
  },
  s24t_pham_vi: {
    ids: ['q_17'],
    text: 'Gói S24t chỉ áp dụng cho điện thoại MỚI gặp lỗi do NHÀ SẢN XUẤT, không áp dụng cho máy cũ hay lỗi do người dùng.'
  },
  s24t_ngoai_luc: {
    ids: ['q_18'],
    text: 'Gói S24t KHÔNG áp dụng nếu lỗi do tác động người dùng (rơi, vỡ, vào nước). Chỉ bảo hành lỗi từ nhà sản xuất.'
  },
  s24t_tg_dt: {
    ids: ['q_19'],
    text: 'Gói S24t: Điện thoại/hàng thường xử lý trong 15-20 ngày do cần gửi kiểm tra và thay linh kiện chính hãng.'
  },
  s24t_tg_mac: {
    ids: ['q_20'],
    text: 'Gói S24t: Mac xử lý khoảng 1 tháng vì linh kiện Mac phức tạp hơn và thời gian vận chuyển/đặt hàng lâu hơn.'
  },
  s24t_hoan_tien: {
    ids: ['q_21'],
    text: 'Gói S24t không có máy đổi: HT = GM − (3% × Số ngày SD). Tương tự công thức gói VIP, tính khấu hao theo ngày.'
  },
  // Lý Thuyết Bảo Hành
  bh_tg_xu_ly: {
    ids: ['q_31', 'q_45', 'q_59'],
    text: 'Thời gian xử lý bảo hành thông thường là 2-4 tuần, bao gồm thời gian vận chuyển, kiểm tra và sửa chữa/thay thế linh kiện.'
  },
  bh_tg_tham_dinh: {
    ids: ['q_32', 'q_46', 'q_60'],
    text: 'Thời gian thẩm định bảo hành là 5-7 ngày. Đây là thời gian kỹ thuật viên kiểm tra nguyên nhân lỗi của máy.'
  },
  sep_buoc_dau: {
    ids: ['q_33', 'q_47'],
    text: 'Trên SEP: vào Tab Bảo hành → Tiếp nhận → Thêm → Điền đầy đủ thông tin máy và khách hàng. Đây là quy trình chuẩn.'
  },
  sep_noi_nhan: {
    ids: ['q_34', 'q_48'],
    text: 'Nơi nhận TTBH luôn chọn CPS Hà Nội - đây là trung tâm bảo hành tập trung xử lý cho toàn hệ thống.'
  },
  sep_buoc_cuoi: {
    ids: ['q_35', 'q_49'],
    text: 'Bước cuối: Lưu → Điều phối. Sau khi lưu phiếu, cần điều phối để chuyển máy đến trung tâm bảo hành.'
  },
  apple_moi: {
    ids: ['q_36', 'q_50'],
    text: 'Máy MỚI Apple được bảo hành THEO HÃNG (Apple Care). CellphoneS là đại lý ủy quyền, tuân theo chính sách của Apple.'
  },
  apple_doi_moi: {
    ids: ['q_37', 'q_51'],
    text: 'Đổi máy mới Apple cần 2 điều kiện: (1) Có gói bảo hành mở rộng 1 đổi 1, và (2) Được phê duyệt từ quản lý ngành hàng.'
  },
  apple_cu: {
    ids: ['q_38', 'q_52'],
    text: 'Máy CŨ Apple muốn đổi phải gửi yêu cầu vào nhóm QLNH trên Lark để được duyệt. Không được tự ý đổi.'
  },
  apple_icloud: {
    ids: ['q_39', 'q_53'],
    text: 'BẮT BUỘC thoát iCloud trước khi nhận bảo hành Apple. Nếu không thoát, hãng sẽ từ chối bảo hành do chính sách bảo mật.'
  },
  apple_email: {
    ids: ['q_40', 'q_54'],
    text: 'Cần xin EMAIL khách hàng khi bảo hành Apple. Apple sử dụng email để gửi thông báo tình trạng bảo hành và xác nhận.'
  },
  apple_form_a4: {
    ids: ['q_41', 'q_55'],
    text: 'Biên nhận A4 phải có ĐẦY ĐỦ chữ ký khách hàng VÀ dấu của cửa hàng. Thiếu một trong hai sẽ không hợp lệ.'
  },
  pk_loai_1: {
    ids: ['q_42', 'q_56'],
    text: 'Phụ kiện loại 1 (dưới 1 triệu): đổi ngay tại shop cho khách. Máy đổi được bảo hành sửa chữa 6 tháng tiếp theo.'
  },
  pk_loai_1_tiep: {
    ids: ['q_43', 'q_57'],
    text: 'Sau khi đổi phụ kiện loại 1, sản phẩm đổi được bảo hành SỬA CHỮA 6 tháng (không phải 1 đổi 1 nữa).'
  },
  pk_loai_2: {
    ids: ['q_44', 'q_58'],
    text: 'Phụ kiện loại 2 (trên 1 triệu): gửi bảo hành 5-7 ngày theo quy định hãng vì giá trị cao, cần kiểm tra kỹ.'
  },
  // Lý Thuyết Nhập Máy
  dg_buoc_dau: {
    ids: ['q_61', 'q_82'],
    text: 'Bước đầu tiên khi định giá: KIỂM TRA ngoại hình và chức năng cơ bản. Phải đánh giá tình trạng máy trước khi làm bất kỳ thủ tục nào.'
  },
  hang_khach: {
    ids: ['q_62', 'q_83'],
    text: 'Hệ thống CellphoneS phân 3 hạng: Snew (khách mới), Smem (thành viên), Svip (VIP). Mỗi hạng có mức trợ giá khác nhau.'
  },
  truoc_16_6: {
    ids: ['q_63', 'q_84'],
    text: 'Máy mua tại HT trước 16/6/2021: tạo phiếu nhập PO vì hệ thống cũ chưa hỗ trợ biên bản thu hồi tự động.'
  },
  trai_mien: {
    ids: ['q_64', 'q_85'],
    text: 'Máy trái miền hoặc ngoài hệ thống: luôn tạo phiếu nhập PO vì không có dữ liệu bán hàng trong hệ thống.'
  },
  sau_17_6: {
    ids: ['q_65', 'q_86'],
    text: 'Máy mua tại HT sau 17/6/2021: nhờ thu ngân làm biên bản thu hồi. Hệ thống mới đã hỗ trợ tính năng này.'
  },
  vo_lo: {
    ids: ['q_66', 'q_87'],
    text: 'Vỏ lô bị xước: trừ 100% phí thay mới. Vỏ máy không thể sửa chữa, chỉ có thể thay mới hoàn toàn.'
  },
  man_hinh_kinh: {
    ids: ['q_67', 'q_88'],
    text: 'Màn hình/kính bị hỏng: CellphoneS hỗ trợ 15% chi phí thay. Khách chịu 85% còn lại.'
  },
  chon_man: {
    ids: ['q_68', 'q_89'],
    text: 'Khi định giá màn hình: chọn loại màn TỐT NHẤT, GIÁ CAO NHẤT trên hệ thống để đảm bảo chất lượng cho khách mua lại.'
  },
  camera_1_dom: {
    ids: ['q_69', 'q_90'],
    text: 'Camera có 1 đốm: trừ 500k. Đốm nhỏ không ảnh hưởng nhiều đến chất lượng ảnh nên mức trừ thấp.'
  },
  camera_2_dom: {
    ids: ['q_70'],
    text: 'Camera có 2 đốm: trừ 800k. Nhiều đốm hơn ảnh hưởng rõ rệt đến chất lượng chụp ảnh.'
  },
  camera_nhieu_dom: {
    ids: ['q_71'],
    text: 'Camera có hơn 3 đốm: trừ tiền thay camera mới. Quá nhiều đốm thì camera coi như hỏng, cần thay thế hoàn toàn.'
  },
  pin_duoi_85: {
    ids: ['q_72'],
    text: 'Pin dưới 85%: chọn pin loại RẺ NHẤT và hỗ trợ 30%. Dùng pin rẻ nhất để giảm chi phí, hỗ trợ 30% cho khách.'
  },
  cum_lk_khac: {
    ids: ['q_73'],
    text: 'Các cụm linh kiện khác (loa, mic, cảm biến...): CellphoneS hỗ trợ 30% chi phí thay/sửa cho khách.'
  },
  sac_iphone: {
    ids: ['q_74'],
    text: 'iPhone, iPad, AirPods: KHÔNG trừ tiền sạc nguồn vì Apple sử dụng sạc chung, dễ kiếm và giá trị thấp.'
  },
  sac_android: {
    ids: ['q_75'],
    text: 'Tất cả máy Android: trừ 200k tiền sạc nguồn vì mỗi hãng dùng loại sạc khác nhau, cần bù chi phí.'
  },
  tro_gia_chung: {
    ids: ['q_76'],
    text: 'Mức trợ giá linh kiện thu cũ thông thường là 30%. CellphoneS hỗ trợ 30% chi phí sửa chữa/thay thế.'
  },
  snew_tro_gia: {
    ids: ['q_77'],
    text: 'Hạng Snew (khách mới) được trợ giá thẻ thành viên tối đa 200k khi thu cũ. Đây là mức thấp nhất trong 3 hạng.'
  },
  smem_tro_gia: {
    ids: ['q_78'],
    text: 'Hạng Smem được trợ giá tối đa 300k. Cao hơn Snew (200k) nhưng thấp hơn Svip (500k).'
  },
  svip_tro_gia: {
    ids: ['q_79'],
    text: 'Hạng Svip được trợ giá tối đa 500k - mức cao nhất. Đây là đặc quyền của khách hàng VIP.'
  },
  smem_chiet_khau: {
    ids: ['q_80'],
    text: 'Smem thu cũ đổi mới: chiết khấu THÊM 0.5% trên giá máy mới. Ưu đãi nhỏ nhưng khuyến khích khách nâng cấp.'
  },
  svip_chiet_khau: {
    ids: ['q_81'],
    text: 'Svip thu cũ đổi mới: chiết khấu THÊM 1% trên giá máy mới. Gấp đôi Smem, thể hiện đặc quyền hạng cao.'
  },
  // Quy Trình Thu Cũ
  qt_6_buoc: {
    ids: ['q_91', 'q_100', 'q_109', 'q_118'],
    text: 'Quy trình thu cũ tiêu chuẩn gồm 6 bước: (1) Xin SĐT → (2) Lên SEP → (3) KT ngoại hình + chụp ảnh → (4) Báo giá L1 → (5) Bóc CL + Báo giá L2 → (6) Bổ sung ảnh + hoàn tất.'
  },
  qt_b1: {
    ids: ['q_92', 'q_101', 'q_110', 'q_119'],
    text: 'Bước 1: Xin SĐT khách hàng. Đây là thông tin đầu tiên cần có để tra cứu hạng thành viên và lịch sử giao dịch.'
  },
  qt_b2: {
    ids: ['q_93', 'q_102', 'q_111', 'q_120'],
    text: 'Bước 2: Lên SEP nhập cũ. Sau khi có SĐT, vào hệ thống SEP để bắt đầu quy trình nhập máy cũ.'
  },
  qt_b3: {
    ids: ['q_94', 'q_103', 'q_112'],
    text: 'Bước 3: Kiểm tra ngoại hình và chức năng, chụp ảnh máy và check giá trên hệ thống. Bước quan trọng để định giá chính xác.'
  },
  qt_b4: {
    ids: ['q_95', 'q_104', 'q_113'],
    text: 'Bước 4: Báo giá Lần 1 cho khách. Đây là giá sơ bộ trước khi bóc cường lực kiểm tra kỹ hơn.'
  },
  qt_b5_boc_cl: {
    ids: ['q_96', 'q_105', 'q_114'],
    text: 'Bước 5: Bóc cường lực + kiểm tra bên trong chỉ BẮT BUỘC với iPhone. Các máy khác không cần bóc cường lực.'
  },
  qt_b5_bao_gia: {
    ids: ['q_97', 'q_106', 'q_115'],
    text: 'Báo giá Lần 2 nằm ở Bước 5. Sau khi bóc cường lực và kiểm tra kỹ, báo giá chính thức cho khách.'
  },
  qt_b6: {
    ids: ['q_98', 'q_107', 'q_116'],
    text: 'Bước 6 (cuối): Bổ sung hình ảnh vào hệ thống và hoàn tất. Ảnh máy là bằng chứng quan trọng cho hồ sơ thu cũ.'
  },
  qt_khong_mua_shop: {
    ids: ['q_99', 'q_108', 'q_117'],
    text: 'Máy KHÔNG mua tại shop: phải tạo phiếu nhập PO trên SEP vì không có dữ liệu giao dịch trong hệ thống.'
  },
  // Quy Trình Nhập Trả
  nt_ap_dung: {
    ids: ['q_121', 'q_132', 'q_143'],
    text: 'Chính sách nhập trả 30 ngày áp dụng cho: Máy (mới/cũ), tai nghe AirPods và phụ kiện cao cấp. Không áp dụng cho hàng gia dụng thông thường.'
  },
  nt_dieu_kien: {
    ids: ['q_122', 'q_133', 'q_144'],
    text: 'Điều kiện BẮT BUỘC đầu tiên: Phải mua tại shop CellphoneS. Máy mua ở ngoài không được áp dụng nhập trả.'
  },
  nt_thieu_pk: {
    ids: ['q_123', 'q_134', 'q_145'],
    text: 'Thiếu hộp/phụ kiện: hệ thống sẽ TÍNH PHÍ thay/thiếu vào giá trị hoàn trả, không từ chối nhận lại máy.'
  },
  nt_goi_bh_mr: {
    ids: ['q_124', 'q_135', 'q_146'],
    text: 'Gói bảo hành mở rộng chỉ được nhập trả trong 7 NGÀY đầu. Sau 7 ngày, gói BH không thể hoàn trả.'
  },
  nt_may_moi: {
    ids: ['q_125', 'q_136', 'q_147'],
    text: 'Máy MỚI nhập trả: khấu trừ 20% giá gốc. Mức cao hơn máy cũ vì máy mới mất giá nhiều ngay khi kích hoạt.'
  },
  nt_may_cu: {
    ids: ['q_126', 'q_137', 'q_148'],
    text: 'Máy CŨ nhập trả: khấu trừ 15% giá gốc. Thấp hơn máy mới (20%) vì máy cũ đã được định giá sẵn.'
  },
  nt_pk_cao_cap: {
    ids: ['q_127', 'q_138', 'q_149'],
    text: 'Phụ kiện cao cấp nhập trả: khấu trừ 40%. Mức cao nhất vì phụ kiện đã bóc seal khó bán lại.'
  },
  nt_airpods: {
    ids: ['q_128', 'q_139', 'q_150'],
    text: 'AirPods nhập trả: khấu trừ 20%. Thấp hơn phụ kiện cao cấp (40%) vì AirPods dễ bán lại hơn.'
  },
  nt_vat: {
    ids: ['q_129', 'q_140'],
    text: 'Không có hóa đơn/biên bản điều chỉnh thu hồi VAT: bị khấu trừ THÊM 10%. Vì shop phải chịu phần thuế VAT đã xuất.'
  },
  nt_moi_khong_vat: {
    ids: ['q_130', 'q_141'],
    text: 'Máy đổi BH Mới + không VAT = 20% (máy mới) + 10% (VAT) = 30% tổng khấu trừ. Cộng dồn cả hai khoản.'
  },
  nt_cu_khong_vat: {
    ids: ['q_131', 'q_142'],
    text: 'Máy cũ + không có biên bản VAT = 15% (máy cũ) + 10% (VAT) = 25%. Hai khoản khấu trừ cộng dồn.'
  },
};

// Build the lookup map
const explanationMap: Record<string, string> = {};
Object.values(concepts).forEach(({ ids, text }) => {
  ids.forEach(id => {
    explanationMap[id] = text;
  });
});

export function getExplanation(questionId: string): string {
  return explanationMap[questionId] || 'Xem lại tài liệu đào tạo nội bộ CellphoneS để nắm rõ quy định này.';
}
