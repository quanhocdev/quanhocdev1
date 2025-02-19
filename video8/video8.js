let obj = {
  name: "Quan",
  address: {
    tinh: "Phu Yen",
    huyen: "Phu Hoa",
  },
  gender: "Man",
  email: "hmq@gmail.com",
};
// Xoa thuoc tinh: delete obj.gender;
// Them thuoc tinh: obj.age = 19;
console.log(obj);
a = "name";
console.log(`Toi ten la: ${obj[a]}, 
Toi o huyen ${obj.address.huyen} - tinh ${obj.address.tinh}
Gioi tinh cua toi la: ${obj.gender}.`);
tro = [
  {
    name: "Quan",
    address: {
      tinh: "Phu Yen",
      huyen: "Phu Hoa",
    },
    gender: "Man",
    email: "hmq@gmail.com",
  },
  {
    name: "Tai",
    address: {
      tinh: "Phu Yen",
      huyen: "Phu Hoa",
    },
    gender: "Man",
    email: "hnt@gmail.com",
  },
  {
    name: "Huy",
    address: {
      tinh: "Phu Yen",
      huyen: "Phu Hoa",
    },
    gender: "Man",
    email: "tgh@gmail.com",
  },
];
console.log(tro[0]);
