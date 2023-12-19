let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let genderValue = 0;

// Lấy dữ liệu từ local
let userLocal = JSON.parse(localStorage.getItem("users")) || [];

// Lấy giá trị của gender
$$("input[name=gender]").forEach((element) => {
  // Lắng nghe sự kiện change từ các input
  element.addEventListener("change", (e) => {
    if (e.target.checked) {
      genderValue = +e.target.value;
    }
  });
});

// Lắng nghe sự kiện submit form
$("#formRegister").addEventListener("submit", (e) => {
  e.preventDefault();

  // Tạo đối tượng newUser
  const newUser = {
    userId: Math.ceil(Math.random() * 1000000),
    userName: $("#userName").value,
    gender: genderValue,
    dateOfBirth: $("#dateOfBirth").value,
    address: $("#address").value,
    status: 1,
    createdDate: new Date(),
  };

  // Thêm user vào trong mảng
  userLocal.unshift(newUser);

  // Lưu dữ liệu lên local
  localStorage.setItem("users", JSON.stringify(userLocal));
});
