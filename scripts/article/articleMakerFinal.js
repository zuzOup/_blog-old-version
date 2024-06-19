function innerHTMLpush() {
  document.getElementById("articleBody").innerHTML = htmlPush(bodyData);
}
innerHTMLpush();

document.defaultView.addEventListener("resize", innerHTMLpush);
