document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi

    // Lấy giá trị email từ ô input
    var email = document.getElementById("email").value;

    // Gửi email để đặt lại mật khẩu (thay bằng logic thực tế tại đây)

    // Hiển thị thông báo cho người dùng
    alert("Email sent to: " + email);
});
