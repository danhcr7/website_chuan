let btn = document.querySelector(".btn");
btn.addEventListener("click", mo);
let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", clo);
        
let btn_reload = document.querySelector(".btn_reload");
btn_reload.addEventListener("click", re);
function re() {
    window.location.reload();
    p.innerText = "...Nơi show ngôn ngữ / HĐH...";
}
let tmp;
function mo() {
        tmp = window.open("https://goonus.io/", "_blank", "width: 200, height: 200");
            setTimeout(mo, 5000);
        }
        function clo() {
            tmp.close();
        }

let btn_lang = document.querySelector(".btn_language");
btn_lang.addEventListener("click", show);
function show() {
    let p = document.querySelector(".kq");
    p.innerText = String(window.navigator.language);
}



