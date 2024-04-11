"use strict";
let variable1;
let variable2 = 5;
let variable3;
console.log(variable1); // kết quả: undefined
console.log(variable2); // Kết quả: 5
console.log(variable3); // Kết quả: undefined
/*
    Giải thích:
    -variable1 là biến kiểu undefined, nên giá trị của nó sẽ là undefined.
    -variable2 là biến kiểu number và đã được gán giá trị 5 nên sẽ in ra 5.
    -variable3 là biến mà không có kiểu dữ liệu cụ thể. Trong TypeScript, nếu không chỉ định kiểu dữ liệu cho biến,
    kiểu dữ liệu của nó sẽ được xác định là any.Khi in biến variable3 ra màn hình, kết quả sẽ là undefined, bởi vì
    biến này chưa được gán giá trị nào.
 */ 
