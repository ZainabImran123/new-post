function showSignup() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("formTitle").innerText = "Sign Up";
}

function showLogin() {
  document.getElementById("signupForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("formTitle").innerText = "Login";
}

function signup() {
  var name = document.getElementById("signupName").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }

  var user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem(email, JSON.stringify(user));
  alert("Signup successful!");
  showLogin();
}

function login() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;

  var storedUser = localStorage.getItem(email);

  if (storedUser === null) {
    alert("User not found");
    return;
  }

  var user = JSON.parse(storedUser);

  if (user.password === password) {
    alert("Login successful! Welcome " + user.name);
    window.location.href = "post.html"
  } else {
    alert("Incorrect password");
  }
}

// let storedUser = localStorage.getItem("user");

// if (storedUser) {
//   let user = JSON.parse(storedUser);

//   if (user.password === password) {
//     alert("Login successful! Welcome " + user.name);

//     // 👉 Redirect to index.html after login
//     window.location.href = "index.html";
//   } else {
//     alert("Invalid password");
//   }
// } else {
//   alert("No user found. Please sign up first.");
// }