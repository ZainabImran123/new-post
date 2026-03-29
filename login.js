function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Please fill Email and Password!");
        return;
    }

    // Simple password length check
    if (password.length < 8) {
        alert("Password must be at least 8 characters!");
                return;
    }

    alert("Successfully Login!");
    window.location.href = "post.html";   // Make sure your post file is named post.html
}