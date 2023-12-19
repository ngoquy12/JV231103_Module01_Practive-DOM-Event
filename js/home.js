let $ = document.querySelector.bind(document);

// Bắt sự kiện khi onclick vào icon dropdown sẽ hiển thị option
$("#iconDropdown").addEventListener("click", (e) => {
  // Sự kiện nổi bọt: Khi có một sự kiện từ con thì cha cũng bị ảnh hưởng
  e.stopPropagation();

  // Kiểm tra trạng thái hiển thị của listOption
  if ($("#listOption").style.display === "block") {
    // Nếu đang hiện thì ẩn đi
    $("#listOption").style.display = "none";
  } else {
    // Nếu đang ẩn thị sẽ hiện lên
    $("#listOption").style.display = "block";
  }
});

// Khi click vào một nơi bất kỳ trên màn hình thì sẽ ẩn list option
window.addEventListener("click", (e) => {
  // Kiểm tra trạng thái hiển thị của listOption
  if ($("#listOption").style.display === "block") {
    // Nếu đang hiện thì ẩn đi
    $("#listOption").style.display = "none";
  }
});
