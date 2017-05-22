
var color = "FFF000";
var zd_1 = color.match(/[A-F0-9]*/); 
console.log("1." + zd_1);

var str = "1.5 0 12. 123.4";
var zd_2 = str.match(/\d{1,}[.]\d/g);
console.log("2. " + zd_2);

var time = "двух цифр, например 09:00, 21-30.Напишите регулярное выражение для поиска времени";
var zd_3 = time.match(/\d{2}[:-]\d{2}/g);
console.log("3. " + zd_3);

var dosk;
var zd_3 = dosk.match(/[a-h][1-8]/gi);