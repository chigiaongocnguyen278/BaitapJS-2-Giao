/**
 * ?Bài tập 1
 * Khối 1: input
 *      Nhập điểm chuẩn, chọn khu vực, chọn đối tượng
 *      Nhập điểm môn thứ 1, môn thứ 2, môn thứ 3
 * Khối 2:
 *      B1: lấy giá trị từ form khi user click
 *      + tạo hàm tính kết quả
 *      + gán hàm vào sự kiện click của button 
        B2: trong hàm, lập công thức tính toán và kiểm tra đk  
        *      Nếu diem 1 trong 3 môn = 0 => Rớt, không cần tính tổng điểm
        *      Ngược lại nếu không có môn nào = 0 , tính điểm tổng kết
        *             nếu điểm tổng kết >= điểm chuẩn => đậu
        *             ngược lại nếu điểm tổng kết < điểm chuẩn => rớt
 *      B3: hiển thị kết quả
 * Khối 3: output
 *   điểm tổng kết, xếp loại
 */

// hàm tính tổng điểm
function tinhTongDiem(diemKhuVuc, diemDoiTuong,diem1, diem2, diem3) { 
    
    return( diemKhuVuc + diemDoiTuong + diem1 + diem2 + diem3 )

}
// hàm kiểm tra điểm từng môn
function kiemTraDiem(diem) {
    if (diem > 0 && diem <= 10) {
        return true;
    } else {
        return false;
    }
}

// hàm chính : tính kết quả và phân loại HS

function tinhKetQua(){
    var diemChuan=Number(document.getElementById("DiemChuan").value);

    var diemKV = Number( document.getElementById("KhuVuc").value);
   
    var diemDT = Number( document.getElementById("DoiTuong").value);

    var mon1 = Number (document.getElementById("DiemMon1").value);

    var mon2 = Number( document.getElementById("DiemMon2").value);

    var mon3 = Number ( document.getElementById("DiemMon3").value);

    var diemTongKet= tinhTongDiem (diemKV, diemDT, mon1,mon2, mon3)


    
    if (kiemTraDiem(mon1) == false || kiemTraDiem(mon2) == false || kiemTraDiem(mon3) == false) {

        document.getElementById("txtKetQua").innerHTML= "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
    
    
    } else if (diemTongKet>= diemChuan) {
       
        document.getElementById("txtKetQua").innerHTML = "Bạn đã đậu. " +" Tổng điểm : " + diemTongKet;
        
    } else  {
        document.getElementById("txtKetQua").innerHTML = "Bạn đã rớt. " +" Tổng điểm : " + diemTongKet;
      
    } 
    
  

}
document.getElementById("btnKetQua").onclick= tinhKetQua;

/**
 * ?Bài tập 2
 * 
   Khối 1: Lấy dữ liệu input
            Nhập họ tên
            Nhập số KW
 * Khối 2:  B1: lấy giá trị từ form khi user click
 *      + tạo hàm tính tiền thuế
 *      + gán hàm vào sự kiện click của button 
 *         B2 : trong hàm, lập công thức tính toán và kiểm tra đk  
 *      Nếu số KW > 0 và số KW <= 50 => số KW * 500
 *      Ngược lại, nếu 50 < số KW <= 100 => 50*500 + (soKW -50 )* 650
 *      Ngược lại , nếu 100 < số KW <=200 => 50*500 + 50*650 +(soKW -100)* 850
 *      Ngược lại , nếu 200 < số KW <=350 => 50*500 + 50*650 + 100*850 +(soKW -200)*1100
 *      Ngược lại , số KW > 350 =>50*500 + 50*650 + 100*850 + 150*1100 + (soKW -350)*1300
 *       
 * Khối 3: thông báo output
 * 
 */


const GIA_KW_DAU = 500
const GIA_KW_50_KE = 650
const GIA_KW_100_KE = 850
const GIA_KW_150_KE = 1100
const GIA_KW_CON_LAi = 1300


function tinhTienKW () {
    var hoTen =  document.getElementById("HoTen").value
    var soKW =  document.getElementById("SoKW").value
    var total = 0
     if (0 <soKW && soKW <= 50){
        total= soKW * GIA_KW_DAU
     } else if ( soKW >50 && soKW <= 100){
     total= 50*GIA_KW_DAU + (soKW -50)*GIA_KW_50_KE
    }else if ( soKW > 100 && soKW <= 200) {
        total= 50*GIA_KW_DAU + 50*GIA_KW_50_KE + (soKW -100)*GIA_KW_100_KE
    } else if ( soKW > 200 && soKW <= 350) {
        total= 50*GIA_KW_DAU + 50*GIA_KW_50_KE + 100*GIA_KW_100_KE +(soKW -200)*GIA_KW_150_KE
    } else if ( soKW >350){
        total= 50*GIA_KW_DAU + 50*GIA_KW_50_KE + 100*GIA_KW_100_KE + 150*GIA_KW_150_KE+(soKW -350)* GIA_KW_CON_LAi 
    } else {
        alert (" số KW không hợp lệ. Vui lòng nhập lại")
    }
    document.getElementById("txtTienDien").innerHTML = " Họ tên: " + hoTen + " ; Tiền điện : " + total.toLocaleString();
    


}
document.getElementById("btnTienDien").onclick= tinhTienKW;



/**
 * ?Bài tập 3
 * 
   Khối 1: Lấy dữ liệu input
            Nhập họ tên, tổng thu nhập năm, số người phụ thuộc
 * Khối 2: 
            B1: lấy giá trị từ form khi user click
 *      + tạo hàm tính tiền thuế
 *      + gán hàm vào sự kiện click của button 
 *          B2 : trong hàm, lập công thức tính toán và kiểm tra đk  
 *               Thu nhập chịu thuế = Tổng thu nhập năm - 4tr- Số người phụ thuộc * 1.6tr
 *           nếu Thu nhập chịu thuế 
 *                 từ 0 đến 60tr     : tiền thuế = Thu nhập chịu thuế * 0.05
 *                 từ 60tr đến 120tr : tiền thuế = Thu nhập chịu thuế * 0.1
 *                 từ 120tr đến 210tr :tiền thuế = Thu nhập chịu thuế * 0.15
 *                 từ 210tr đến 340tr :tiền thuế = Thu nhập chịu thuế * 0.2
 *                 từ 340tr đến 624tr :tiền thuế = Thu nhập chịu thuế * 0.25
 *                 từ 624tr đến 960tr :tiền thuế = Thu nhập chịu thuế * 0.3
 *                 trên 960tr :        tiền thuế = Thu nhập chịu thuế * 0.35
 *      
 * Khối 3: thông báo output
 * 
 */


const KHONG_DONG_THUE = 4e+6
const TIEN_NGUOI_PHU_THUOC = 1.6e+6
const THUE_60_DAU = 0.05
const THUE_60_120 = 0.1
const THUE_120_210 = 0.15
const THUE_210_340 = 0.2
const THUE_340_624 = 0.25
const THUE_624_960 = 0.3
const THUE_TREN_960 = 0.35



function tinhTienThue (){
    var hoTen =  document.getElementById("HoVaTen").value
    var thuNhapNam = document.getElementById("ThuNhapNam").value
    var nguoiPhuThuoc = document.getElementById("NguoiPhuThuoc").value
    var tienDongThue = thuNhapNam - KHONG_DONG_THUE - nguoiPhuThuoc* TIEN_NGUOI_PHU_THUOC
    var tienThue = 0

    if (tienDongThue > 0 && tienDongThue<= 60e+6){
        tienThue = tienDongThue*THUE_60_DAU
    } else if ( tienDongThue > 60e+6 && tienDongThue <=120e+6){
        tienThue = tienDongThue* THUE_60_120
    } else if ( tienDongThue > 120e+6 && tienDongThue <=210e+6){
        tienThue = tienDongThue* THUE_120_210
    } else if ( tienDongThue > 210e+6 && tienDongThue <=340e+6){
        tienThue = tienDongThue* THUE_210_340
    } else if ( tienDongThue > 340e+6 && tienDongThue <=624e+6){
        tienThue = tienDongThue* THUE_340_624
    } else if  (tienDongThue > 624e+6 && tienDongThue <=960e+6){
        tienThue = tienDongThue* THUE_624_960
    } else if (tienDongThue > 960e+6 ){
        tienThue = tienDongThue* THUE_TREN_960
    } else {
        alert ( 'Tiền đóng thuế không hợp lệ. Vui lòng nhập lại')
        document.getElementById("txtTienThue").innerHTML =  " Họ tên: " + hoTen +" ; Tiền thuế thu nhập cá nhân : 0 VND "
    }


document.getElementById("txtTienThue").innerHTML = " Họ tên: " + hoTen + " ; Tiền thuế thu nhập cá nhân : " + tienThue.toLocaleString() + " VND"

}
document.getElementById("btnTienThue").onclick= tinhTienThue;


/**
 * ?Bài tập 4
 * 
   Khối 1: Lấy dữ liệu input
            Chọn loại khách hàng
            Nhập mã khách hàng
            Nhập số kết nối, số kênh cao cấp
 * Khối 2: lập công thức tính toán và kiểm tra đk
         B1 : tạo hàm chọn loại khách hàng, gắn sự kiện onchange. Nếu khách hàng là doanh nghiệp thì nhập thêm số kế nối
         B2: lấy giá trị từ form khi user click
 *      + tạo hàm tính tiền cáp
 *      + gán hàm vào sự kiện click của button    
 *       B3: trong hàm
             3.1 Lấy giá trị từ form
             3.2 Tạo hàm so sánh, 
             Nếu là nhà dân thì :
             Tiền Cáp = • Phí xử lý hóa đơn + Phí dịch vụ cơ bản + Thuê kênh cao cấp* Số kênh
             Nếu là doanh nghiệp thì :
                 nếu số kết nối <=10 :
             Tiền Cáp = • Phí xử lý hóa đơn + Phí dịch vụ cơ bản + Thuê kênh cao cấp* Số kênh
                  nếu số kết nối > 10 :
            Tiền Cáp = • Phí xử lý hóa đơn + Phí dịch vụ cơ bản + Thuê kênh cao cấp* Số kênh + (số kết nối -10)* phí kết nối thêm   
 *   
 * Khối 3: thông báo output
 *       
 */


// hàm chọn loại khách hàng

 var loaiKhachHang =" "

function chonLoaiKhachHang() {
    loaiKhachHang = document.getElementById("LoaiKhachHang").value;
    if ( loaiKhachHang == "DN"){
    document.getElementById("SoKetNoi").style.display="block"
} else {
    document.getElementById("SoKetNoi").style.display="none"
 } 
   
}


// hàm tính tiền cáp
function tinhPhiCap( phiHoaDon, phiDichVu, phiKenhCaoCap, soKenh){
    return ( phiHoaDon + phiDichVu + phiKenhCaoCap*soKenh)
}

// hàm chính
const HOA_DON_NHA_DAN = 4.5
const DICH_VU_NHA_DAN = 20.5
const KENH_CAO_CAP_NHA_DAN = 7.5

const HOA_DON_DOANH_NGHIEP = 15
const DICH_VU_DOANH_NGHIEP_10_KENH_DAU = 75
const DICH_VU_DOANH_NGHIEP_5_KENH_THEM = 5
const THUE_KENH_CAO_CAP = 50


function tinhTienCap(){
    var maKhachHang=document.getElementById("MaKhachHang").value;
    var soKenhCaoCap = document.getElementById("KenhCaoCap").value;
    var soKetNoi =document.getElementById("SoKetNoi").value;

    var tienCap = 0


    switch (loaiKhachHang){
        default :
            alert ('Hãy chọn loại khách hàng')
            break;
        case "ND" :
            tienCap = tinhPhiCap(HOA_DON_NHA_DAN,DICH_VU_NHA_DAN,KENH_CAO_CAP_NHA_DAN,soKenhCaoCap);
            break;
        case "DN"  :
        if (soKetNoi >=0 && soKetNoi <=10) {
            tienCap = tinhPhiCap(HOA_DON_DOANH_NGHIEP,DICH_VU_DOANH_NGHIEP_10_KENH_DAU, THUE_KENH_CAO_CAP,soKenhCaoCap )
        } else if ( soKetNoi > 10 ) {
            tienCap = tinhPhiCap(HOA_DON_DOANH_NGHIEP,DICH_VU_DOANH_NGHIEP_10_KENH_DAU, THUE_KENH_CAO_CAP,soKenhCaoCap ) + ((soKetNoi-10)*DICH_VU_DOANH_NGHIEP_5_KENH_THEM)
            break;
        } else {
            alert ('Vui lòng nhập số kết nối')
        }
    }
    

document.getElementById("txtTienCap").innerHTML = " Mã khách hàng : " + maKhachHang + " ; Tiền cáp : " +  new Intl.NumberFormat('en-US',{ style: "currency", currency: "USD",  maximumFractionDigits: 2 }).format(tienCap);
    
}

document.getElementById("btnTienCap").onclick= tinhTienCap;