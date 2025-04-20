function togglePassword(id, eyeIcon) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    eyeIcon.textContent = "yuhuu";
  } else {
    input.type = "password";
    eyeIcon.textContent = "eye";
  }
}
