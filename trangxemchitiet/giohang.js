// Sử dụng localStorage để lưu giỏ hàng tạm thời
var cart = JSON.parse(localStorage.getItem('cart')) || [];

// Hàm để cập nhật giỏ hàng
function updateCart() {
    var cartItems = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');
    var total = 0;

    // Xóa các sản phẩm hiện tại trước khi cập nhật giỏ hàng
    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }

    // Thêm các sản phẩm vào giỏ hàng
    cart.forEach(function(item) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${item.name}</th>
            <td>${item.description}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        cartItems.appendChild(row);

        total += item.price * item.quantity;
    });

    // Hiển thị tổng giá trị
    cartTotal.textContent = `Tổng cộng: $${total.toFixed(2)}`;
}

// Thêm sự kiện khi nút "Thanh Toán" được nhấp
document.getElementById('checkout').addEventListener('click', function() {
    alert('Bạn đã thanh toán thành công!');
    // Cần cập nhật logic thanh toán thực tế ở đây
    // Sau khi thanh toán xong, bạn có thể xóa giỏ hàng hoặc làm gì đó khác
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
});

// Khởi tạo giỏ hàng ban đầu
updateCart();
