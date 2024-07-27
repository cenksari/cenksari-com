const body = document.body,
  changeTheme = document.getElementById("mode"),
  appThemeColor = document.querySelector('meta[name="theme-color"]');
changeTheme.onchange = () => {
  !0 === changeTheme.checked
    ? (body.classList.remove("light"),
      body.classList.add("dark"),
      window.localStorage.setItem("mode", "dark"),
      appThemeColor.setAttribute("content", "#0e1117"))
    : (body.classList.remove("dark"),
      body.classList.add("light"),
      window.localStorage.setItem("mode", "light"),
      appThemeColor.setAttribute("content", "#f5f5f5"));
};
const mode = window.localStorage.getItem("mode");
"dark" == mode &&
  ((changeTheme.checked = !0),
  body.classList.remove("light"),
  body.classList.add("dark")),
  "light" == mode &&
    ((changeTheme.checked = !1),
    body.classList.remove("dark"),
    body.classList.add("light"));
