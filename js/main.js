
var mang = [];
function themPhanTu(){
    var temp = Number(document.querySelector("#inputNumber").value);
    mang.push(temp);
    document.getElementById("hienThiMang").value +=temp + ", ";
}

document.getElementById("btnThemSo").onclick = function () {
    themPhanTu();
    document.querySelector("#inputNumber").value = "";
}

function tinhTongSoDuong() {
    var tong = 0;
    for (var i=0;i<mang.length; i++){
        if (mang[i]>0){
            tong+=mang[i];
        }
    }
    document.getElementById("tongSoDuong").value = "Tổng các số dương là: "+tong;
}
function demSoDuong() {
    var count = 0;
    for (var i=0;i<mang.length;i++){
        if (mang[i]>0){
            count++;
        }
    }
    document.getElementById("demSoDuong").value = "Số dương: "+count;
}

function timSoNhoNhat() {
    var min = mang[0];
    for (var i=1; i<mang.length;i++){
        if (mang[i]<min) {
            min = mang[i];
        }
    }
    document.getElementById("soNhoNhat").value = "Số nhỏ nhất: "+min;
    return min;
}
function timSoDuongNhoNhat() {
    var temp = [];
    for (var i=0; i<mang.length;i++){
        if (mang[i]>0) {
            temp.push(mang[i]);
        }
    }
    // console.log(temp);
    var minDuong = temp[0];
    for (var j=1; j<temp.length;j++){
        if (temp[j]<minDuong) {
            minDuong = temp[j];
        }
    }
    document.getElementById("soDuongNhoNhat").value = "Số dương nhỏ nhất: " + minDuong;
}

function timSoChanCuoi() {
    var temp = 0;
    for (var i=0; i<mang.length;i++){
        if (mang[i]%2==0) {
            temp = mang[i];
            // console.log(temp);
            document.getElementById("soChanCuoi").value = "Số chẵn cuối cùng: " + temp;
        }
        else document.getElementById("soChanCuoi").value = "-1";
    }
}
function swap() {
    var temp =0;
    var from = Number(document.getElementById("from").value);
    var to = Number(document.getElementById("to").value);
    temp = mang[from];
    mang[from] = mang[to];
    mang[to]=temp;
    var sauDoiCho = "";
    for (var i=0;i<mang.length;i++){
        sauDoiCho = sauDoiCho + mang[i] + ", ";
    }
    document.getElementById("sauDoiCho").value = sauDoiCho;
    
}

function sort() {
    for(var i = 0; i < mang.length; i++){
        for(var j = 0; j < ( mang.length - i -1 ); j++){
          if(mang[j] > mang[j+1]){
            var temp = mang[j]
            mang[j] = mang[j + 1]
            mang[j+1] = temp
          }
        }
      }
      console.log(mang);
    var sauSapXep = "";
    for (var i=0;i<mang.length;i++){
        sauSapXep = sauSapXep + mang[i] + ", ";
    }
    document.getElementById("sauSapXep").value = sauSapXep;
}

function timSoNT(n) {
    var flag = true;
    if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        for (var i = 3; i < Math.sqrt(n); i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
            else flag = true;
        }
    }
    return flag;
}
function timSoNTdau() {
    var i = 0;
    while(i<mang.length){
        if (timSoNT(mang[i])==false){
            i++;
            document.getElementById("soNguyenToDau").value = "Không có số nguyên tố trong mảng!";
        }
        else{
            document.getElementById("soNguyenToDau").value = mang[i];
            break;
        }
    }

}


var mangThuc = [];
function showFloatArray(){
    var temp = Number(document.querySelector("#inputFloatNumber").value);
    mangThuc.push(temp);
    document.getElementById("hienThiMangThuc").value +=temp + ", ";
    document.querySelector("#inputFloatNumber").value = "";
}

function countInt() {
    var count = 0;
    for(var i=0; i<mangThuc.length;i++){
        if(Number.isInteger(mangThuc[i])){
            count++;
        }
    }
    document.getElementById("demSoNguyen").value = "Có "+count+" số nguyên trong mảng";
}

function compare() {
    var am=0;
    var duong=0;
    for (var i=0;i<mangThuc.length;i++){
        if(mangThuc[i]>0){
            duong++;
        }
        else if(mangThuc[i]<0){
            am++;
        }
    }
    var sosanh = ""
    if (am>duong){
        sosanh = ">";
    }
    else if(am<duong){
        sosanh = "<";
        
    }
    else sosanh = "=";
    document.getElementById("soSanh").value = "Số âm "+sosanh+" số dương";
}