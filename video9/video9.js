let a;
let b = "";
let c = null;
console.log(a); // show undefined
console.log(typeof a); // undefined
console.log(b); // not show
console.log(typeof b); // empty
console.log(c); // show null
console.log(typeof c); // show object

let d = 5;
let e = "5";
console.log(
  `type d: ${typeof d}, d = ${d}
type e: ${typeof e}, e = ${e}.
d == e is ${d == e}`
);
console.log(
  `type d: ${typeof d}, d = ${d}
type e: ${typeof e}, e = ${e}.
d === e is ${d === e}`
);
console.log(
  " Khi dùng = thì chỉ so sánh value, còn dùng === thì so sánh type trước rồi mới value "
);
