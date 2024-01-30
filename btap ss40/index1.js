let person = {
    name: "",
    age: "",
    email: ""
  };
  person.name = prompt("Nhập họ tên của bạn:");
  person.age = prompt("Nhập tuổi của bạn:");
  person.email = prompt("Nhập email của bạn:");
  localStorage.setItem("personalInfo", JSON.stringify(person));
  let a= JSON.parse(localStorage.getItem("personalInfo"));
  console.log("Họ tên: " + savedInfo.name);
  console.log("Tuổi: " + savedInfo.age);
  console.log("Email: " + savedInfo.email);
  