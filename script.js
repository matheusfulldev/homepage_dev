function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector(".profile_picture");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpeg");
    img.setAttribute(
      "alt",
      "Foto de perfil antiga de matheusfulldev, com bastante sol no rosto e camisa polo preta, sorrindo discretamente"
    );
  } else {
    img.setAttribute("src", "./assets/avatar.jpg");
    img.setAttribute(
      "alt",
      "Foto de perfil de matheusfulldev, usando headset e óculos sorrindo discreto para a câmera"
    );
  }
}
