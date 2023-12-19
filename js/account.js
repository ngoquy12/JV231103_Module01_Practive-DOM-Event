let $$ = document.querySelectorAll.bind(document);
// Lấy dữ liệu từ local
let userLocal = JSON.parse(localStorage.getItem("users")) || [];

// Render danh sách tài khoản
function renderUsers() {
  // lặp qua các phần tử của mảng user và trả về mảng mới kèm mã HTML
  const trHtmls = userLocal.map((user, index) => {
    return `
    <tr>
        <td>${index + 1}</td>
        <td>${user.userName}</td>
        <td>${
          user.gender === 0 ? "Nam" : user.gender === 1 ? "Nữ" : "Khác"
        }</td>
        <td>${user.dateOfBirth}</td>
        <td>${user.address}</td>
        <td>${user.status === 1 ? "Đang hoạt động" : "Ngừng hoạt động"}</td>
        <td>
        <button data=${user.userId} class="btn-block">${
      user.status === 1 ? "Chặn" : "Bỏ chặn"
    }</button>
        <button>Xóa</button>
        </td>
    </tr>
    `;
  });

  // Chuyển đổi mảng thành chuỗi HTML
  const trHtml = trHtmls.join("");

  // Append vào trong DOM
  $("#tbody").innerHTML = trHtml;
}

renderUsers();

// Lấy ra tất cả các button chặn

$$(".btn-block").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const idBlock = +e.target.getAttribute("data");
    // Tìm kiếm thông tin user theo id
    const findUser = userLocal.find((user) => user.userId === idBlock);

    // Khi click vào button chặn thì mở modal xác nhận
    const isConfirm = confirm(
      `Bạn có chắc chắn muốn ${
        findUser.status === 1 ? "chặn" : "bỏ chặn"
      } tài khoản này?`
    );
    if (isConfirm) {
      // Lấy ra vị trí của tài khoản cần chặn
      const findIndexUser = userLocal.findIndex(
        (user) => user.userId === idBlock
      );

      // Truy cập vào phần tử thứ findIndexUser trong mảng và cập nhật lại status
      userLocal[findIndexUser].status =
        userLocal[findIndexUser].status === 1 ? 0 : 1;

      // Lưu thông tin mới nhất lên local
      localStorage.setItem("users", JSON.stringify(userLocal));

      // Gọi hàm render lại giao diện
      renderUsers();
    }
  });
});
