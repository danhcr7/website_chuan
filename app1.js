let ip1 = document.querySelector(".ip1");
let ip2 = document.querySelector(".ip2");
let btn_log = document.querySelector(".btn_login");
btn_log.addEventListener("click", check);
function check() {
    let tk = String(ip1.value);
    let mk = String(ip2.value);
    if (tk=="admin" && mk=="a") {
        window.location.href = "./trang-chu.html";
    }
}