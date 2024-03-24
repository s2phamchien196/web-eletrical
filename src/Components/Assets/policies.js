import info_data from './info_data'

const websiteConfig = {
  name: 'HAISANHAIPHONG.VN',
  link: 'http://haisanhaiphong.vn',
  contact: '0981780453'
}

const policy = {
  policy1: {
    path: 'chinh-sach-sanh-toan',
    label: 'Chính sách thanh toán',
    note: <div className="text-wrap text-start" style={{ padding: 100, paddingTop: 20, fontSize: 15 }}>
      Thanh toán bằng tiền mặt:
      <br />Số nhà 1 – A32 Khu đô thị Geleximco, Lê Trọng Tấn, An Khánh, Hoài Đức, Hà Nội (gần Công viên Thiên Đường Bảo Sơn)
      <br />HOTLINE: {info_data.hotline}
    </div>
  },

  policy2: {
    path: 'chinh-sach-doi-tra',
    label: 'Chính sách đổi trả/hoàn hàng',
    note: <div className="text-wrap text-start" style={{ padding: 100, paddingTop: 20, fontSize: 15 }}>
      Qúy khách có thể đổi trả hàng theo các điều kiện quy định của từng sản phẩm.

      <br />Mọi chi tiết hoặc thắc mắc Quý khách vui lòng liên hệ với chúng tôi qua số điện thoại hỗ trợ Hotline: {info_data.hotline}

      <br />Thời gian làm việc:

      <br />{"Thứ 2 –> Thứ 7: 08:00 AM –> 05:00 PM."}
    </div>
  },
  policy3: {
    path: 'chinh-sach-giao-nhan-hang',
    label: 'Chính sách giao/nhận hàng',
    note: "",
    note: <div className="text-wrap text-start" style={{ padding: 100, paddingTop: 20, fontSize: 15 }}>
      <h6>1. Các phương thức giao hàng</h6>
      Chúng tôi sử dụng phương thức giao hàng:
      <br />– Khách hàng mua trực tiếp hàng tại công ty, cửa hàng của chúng tôi
      <br /> – Ship cod
      <br />
      <br />
      <h6>2. Thời hạn ước tính cho việc giao hàng</h6>
      Thông thường sau khi nhận được thông tin đặt hàng chúng tôi sẽ xử lý đơn hàng trong vòng 24h và phản hồi lại thông tin cho khách hàng về việc thanh toán và giao nhận.
      <br /> Thời gian giao hàng thường trong khoảng từ 3-5 ngày kể từ ngày chốt đơn hàng hoặc theo thỏa thuận với khách khi đặt hàng.
      <br />Tuy nhiên, cũng có trường hợp việc giao hàng kéo dài hơn nhưng chỉ xảy ra trong những tình huống bất khả kháng như sau:
      <br />– Nhân viên chúng tôi liên lạc với khách hàng qua điện thoại không được nên không thể giao hàng.
      <br />– Địa chỉ giao hàng bạn cung cấp không chính xác hoặc khó tìm.
      <br />– Số lượng đơn hàng tăng đột biến khiến việc xử lý đơn hàng bị chậm.
      <br />– Đối tác cung cấp hàng chậm hơn dự kiến khiến việc giao hàng bị chậm lại hoặc đối tác vận chuyển giao hàng bị chậm
      <br />Về phí vận chuyển, chúng tôi sử dụng dịch vụ vận chuyển ngoài nên cước phí vận chuyển sẽ được tính theo phí của các đơn vị vận chuyển tùy vào vị trí và khối lượng của đơn hàng, khi liên hệ lại xác nhận đơn hàng với khách sẽ báo mức phí cụ thể cho khách hàng.
      <br />
      <br />
      <h6>3. Các giới hạn về mặt địa lý cho việc giao hàng</h6>
      Riêng khách tỉnh có nhu cầu mua số lượng lớn hoặc khách buôn sỉ nếu có nhu cầu mua sản phẩm , chúng tôi sẽ nhờ dịch vụ giao nhận của các công ty vận chuyển và phí sẽ được tính theo phí của các đơn vị cung cấp dịch vụ vận chuyển hoặc theo thoản thuận hợp đồng giữa 2 bên.

      <br />Lưu ý: Trường hợp phát sinh chậm trễ trong việc giao hàng chúng tôi sẽ thông tin kịp thời cho khách hàng và khách hàng có thể lựa chọn giữa việc Hủy hoặc tiếp tục chờ hàng.
      <br />
      <br />
      <h6>4. Trách nhiệm của công ty về việc cung cấp chứng từ hàng hóa:</h6>
      Trong quá trình giao nhận hàng nếu khách hàng muốn xuất hóa đơn, chứng từ thì công ty sẽ gửi cho khách hàng khi mua hàng trực tiếp tại cửa hàng hoặc mua hàng nhận tại nhà thì chúng tôi sẽ gửi qua mail cho khách hàng trong quá trình sử dụng dịch vụ
    </div>
  },
  policy4: {
    path: 'chinh-sach-bao-mat-thong-tin',
    label: 'Chính sách bảo mật thông tin',
    note: <div className="text-wrap text-start" style={{ padding: 100, paddingTop: 20, fontSize: 15 }}>
      <h6>1.Mục đích thu thập thông tin cá nhân</h6>
      Mục đích của việc thu thập thông tin khách hàng nhằm liên quan đến các vấn đề như:
      <br />
      <br />– Hỗ trợ khách hàng: mua hàng, thanh toán, giao hàng.
      <br />
      <br />– Cung cấp thông tin sản phẩm, các dịch vụ và hỗ trợ theo yêu cầu của khách hàng.
      <br />
      <br />– Gửi thông báo các chương trình, sản phẩm mới nhất của chúng tôi.
      <br />
      <br />– Giải quyết vấn đề phát sinh khi mua hàng.
      <br />
      <br />– Ngăn chặn các hoạt động phạm pháp.
      <br />
      <br />– Đo lường và cải thiện các dịch vụ của chúng tôi.
      <br />
      <br />
      <h6>2.Phạm vi thu thập thông tin</h6>
      Chúng tôi thu thập thông tin cá nhân của khách hàng khi:
      <br />
      <ul>
        <li className="py-1">– Khách hàng trực tiếp cung cấp: Khách hàng trực tiếp cung cấp bao gồm: họ tên, địa chỉ email, số điện thoại, địa chỉ.</li>
        <li className="py-1">– Khách hàng tương tác với chúng tôi: Chúng tôi sử dụng cookies và công nghệ theo dấu khác để thu thập một số thông tin khi khách hàng tương tác trên website {websiteConfig.link}</li>
        <li className="py-1">– Từ những nguồn hợp pháp khác: Chúng tôi thu thập thông tin khách hàng từ các nguồn hợp pháp khác.</li>
        <br />
      </ul>
      <h6>3.Thời gian lưu trữ thông tin</h6>
      {websiteConfig.name}  sẽ lưu trữ các thông tin cá nhân do khách hàng cung cấp trên các hệ thống nội bộ của chúng tôi trong quá trình cung cấp dịch vụ cho khách hàng hoặc khi khách hàng có yêu cầu hủy thông tin đã cấp.
      <br />
      <br />
      <h6>4.Những người hoặc tổ chức có thể được tiếp cận với thông tin đó</h6>
      – Các đối tác là bên cung cấp dịch vụ cho chúng tôi liên quan đến thực hiện đơn hàng và chỉ giới hạn trong phạm vi thông tin cần thiết cũng như áp dụng các quy định đảm bảo an ninh, bảo mật các thông tin cá nhân.
      <br />
      <br />– Chúng tôi sử dụng dịch vụ từ một nhà cung cấp dịch vụ là bên thứ ba để thực hiện một số hoạt động liên quan đến website ebo.vn. Khi đó, bên thứ ba có thể truy cập hoặc xử lý các thông tin cá nhân trong quá trình cung cấp các dịch vụ đó. Chúng tôi yêu cầu các bên thứ ba này tuân thủ mọi luật lệ về bảo vệ thông tin cá nhân liên quan và các yêu cầu về an ninh liên quan đến thông tin cá nhân.
      <br />
      <br />– Các chương trình có tính liên kết, đồng thực hiện, thuê ngoài cho các mục đích được nêu tại Mục 1 và luôn áp dụng các yêu cầu bảo mật thông tin cá nhân.
      <br />
      <br />– Yêu cầu pháp lý: Chúng tôi có thể tiết lộ các thông tin cá nhân nếu điều đó do luật pháp yêu cầu và việc tiết lộ như vậy là cần thiết một cách hợp lý để tuân thủ các quy trình pháp lý.
      <br />
      <br />– Chuyển giao kinh doanh (nếu có): trong trường hợp sáp nhập, hợp nhất toàn bộ hoặc một phần với công ty khác, người mua sẽ có quyền truy cập thông tin được chúng tôi lưu trữ, duy trì trong đó bao gồm cả thông tin cá nhân.
      <br />
      <br />
      <h6>5.Địa chỉ của đơn vị thu thập và quản lý thông tin</h6>
      – Tên doanh nghiệp: HỘ KINH DOANH VỰA HẢI SẢN THỦY NGUYÊN
      <br />
      <br />– Thành lập và hoạt động theo Giấy chứng nhận đăng ký doanh nghiệp số:01U8015690  do UBND HUYỆN HOÀI ĐỨC cấp ngày 05/11/2021
      <br />
      <br />– Trụ sở chính:A32 – NV13, ô số 5 Khu đô thị mới hai bên đường Lê Trọng Tấn, An Khánh, Hoài Đức, Hà Nội
      <br />
      <br />
      <h6>6.Phương thức và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu:</h6>
      Nếu quý khách có bất cứ về yêu cầu nào về việc tiếp cận và chỉnh sửa thông tin cá nhân đã cung cấp, quý khách có thể:
      <br />
      <br />– Gọi điện trực tiếp về số điện thoại: {websiteConfig.contact}
    </div>
  }
}
export default policy;