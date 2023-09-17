//Tạo mang array
var numberArr = [];

// thêm giá trị vừa nhập 
function themSo(){
//input
var number = document.querySelector("#number").value*1;
numberArr.push(number);
//output
document.getElementById("numberArray").innerHTML = numberArr;
}


//xử lý kết quả
//Câu 1: Tổng các số dương trong mảng 
function tinhTong(){
// input 
var tongSoDuong = 0;
//progress
for(var i= 0; i < numberArr.length; i++) {
   if (numberArr[i] > 0){
    tongSoDuong += numberArr[i];
   }
}
// ouput 
document.getElementById("result1").innerHTML = `Tổng số dương: ${tongSoDuong}`;
}


//  Câu 2 đếm các số dương trong mảng
function demSoDuong(){
    // input 
 var demSoDuong = 0;
//progress
for(var i = 0; i < numberArr.length; i++){
    if(numberArr[i] > 0){
        demSoDuong++
    }
}
document.getElementById("result2").innerHTML = `Đếm số dương là: ${demSoDuong}`;
}


// Câu 3 Tìm số nhỏ nhất trong mảng
function timSoNhoNhat(){
    // input 
    var soNhoNhat = 0;
    //progress
    for (i = 0; i < numberArr.length; i++){
        if(i > numberArr[i]){
            soNhoNhat = numberArr[i];
        }
    }
    document.getElementById("result3").innerHTML = `Số nhỏ nhất là: ${soNhoNhat}`;
}


// Câu 4 Tìm số dương nhỏ nhất trong mảng
function timSoDuongNhoNhat(){
    // input 
    var timSoDuongNhoNhat = Infinity;
    //progress
    for (i = 0; i < numberArr.length; i++){
        if (numberArr[i] > 0 && numberArr[i] < timSoDuongNhoNhat) {
            // output
            timSoDuongNhoNhat = numberArr[i];
        
        }
    }
     document.getElementById("result4").innerHTML = `Số dương nhỏ nhất là: ${timSoDuongNhoNhat}`;
}
// Câu 5 Tìm số chẵn cuối cùng trong mảng
function timSoChanCuoiCung(){
    //input
    var timSoChanCuoiCung = -1;
    //progress
    for(i = 0; i < numberArr.length; i++){
        if(numberArr[i] % 2 == 0 && numberArr[i] > timSoChanCuoiCung){
            // output 
            timSoChanCuoiCung = numberArr[i];
        }
    }
    document.getElementById("result5").innerHTML = `Số chẵn cuối cùng là: ${timSoChanCuoiCung}`;
}
// Câu 6 Đổi chỗ 2 giá trị trong mảng theo vị trí 
function doiCho(){
    // input 
    var viTri1 = document.getElementById("viTri1").value*1;
    var viTri2 = document.getElementById("viTri2").value*1;
    // progress 
    // Kiểm tra xem các vị trí có hợp lệ trong mảng không
    if (viTri1 < 0 || viTri2 < 0 || viTri1 >= numberArr.length || viTri2 >= numberArr.length) {
        console.log("Vị trí không hợp lệ");
        return;
    }
    var viTriTam = numberArr[viTri1];
    console.log(" 😂 ~ doiCho ~ viTriTam:", viTriTam);
    numberArr[viTri1] = numberArr[viTri2];
    numberArr[viTri2] = viTriTam;
    // output 
    document.getElementById("result6").innerHTML = numberArr;
}

// Câu 7 Sắp xếp mảng theo thứ tự tăng dần.
function sapXepTangDan() {
    numberArr.sort(function(a, b) {
      return a - b;
    });
    document.getElementById("result7").innerHTML = numberArr;
  }


//Câu 8 Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
function timSoNguyenTo(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    var i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
function timSoNguyenToDauTien(){
    var daySoNguyenTo = [];
    console.log(" 😂 ~ timSoNguyenToDauTien ~ daySoNguyenTo:", daySoNguyenTo);
    var ketQua = "";
    //progress
    for( var i = 0; i < numberArr.length; i++ ){
        if(Number.isInteger(numberArr[i]) && timSoNguyenTo(numberArr[i])){
            daySoNguyenTo.push(numberArr[i]);
        }
    }
    // output 
    if (daySoNguyenTo.length == 0){
        ketQua = `Mảng này không có số nguyên tố`;
    }else{
        ketQua = daySoNguyenTo[0];
    }
    document.getElementById("result8").innerHTML = `Số nguyên tố đầu tiên là: ${ketQua} `;
}
// Câu 9 Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var numberArr_soNguyen = [];
function demSoNguyen() {
  //input
  var nhapSo = document.getElementById("nhapSo").value;
  var dem = 0;
  //kiểm tra nếu chuỗi nhập vào là rỗng hoặc không phải là số
  if (nhapSo === "" || isNaN(nhapSo)) {
    alert("Vui lòng nhập số.");
  } else {
    //progress
    if (Number.isInteger(parseFloat(nhapSo))) {
      //parseFloat chuyển chuổi thành số - vì dk rồng bỏ nên x73 lý dưới này
      numberArr_soNguyen.push(parseFloat(nhapSo));
    }
    for (var i = 0; i < numberArr_soNguyen.length; i++) {
      if (Number.isInteger(numberArr_soNguyen[i])) {
        dem++;
      }
    }
    //output
    document.getElementById("result9").innerHTML = dem;
  }
}
//BAI 10
var numberArr_soAmDuong = [];
console.log("🚀 - numberArr_soAmDuong:", numberArr_soAmDuong);
function soSangLuongSoAmVaDuong() {
  //input
  var demSoAm = 0;
  var demSoDuong = 0;
  //progress : tìm ra số âm (có cả số - thập phân) và số dương ( không có số thập phân)
  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      if (Number.isInteger(numberArr[i])) {
        numberArr_soAmDuong.push(numberArr[i]);
        demSoDuong++;
      }
    } else if (numberArr[i] < 0) {
      numberArr_soAmDuong.push(numberArr[i]);
      demSoAm++;
    }
  }
  //output
  if (demSoAm > demSoDuong) {
    document.getElementById("result10").innerHTML = `Số âm > Số dương`;
  } else if (demSoAm < demSoDuong) {
    document.getElementById("result10").innerHTML = `Số âm < Số dương`;
  } else {
    document.getElementById("result10").innerHTML = `Số âm = Số dương`;
  }
}
  
  