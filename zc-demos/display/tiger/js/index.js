let $tooth = document.querySelectorAll(".tooth span");
let $mouth = document.querySelector(".tiger-mouth>div");
let $eye = document.querySelectorAll(".tiger-eye");
let $word = document.querySelector(".word");
let txt = ["虎年大吉","福星高照","心想事成","鸿运当头","大吉大利","万事如意","好运连连"];

let activeIndex = -1;
let tigerState = ""

function initTiger() {
  activeIndex = getRandom($tooth);
  tigerState = "normal"
}

initTiger()

function getRandom(list) {
  return ~~(list.length * Math.random());
}

function handleBite() {
  if(document.querySelectorAll(".tooth .active").length==$tooth.length-1){
    $word.innerHTML = txt[~~(txt.length*Math.random())];
    $word.classList.remove("hide")
  }
  $tooth.forEach(el => el.classList.remove('active'))
  $eye.forEach(el=>el.classList.add("big"))
  tigerState = "active";
  $mouth.classList.add("bite")
}

$word.addEventListener("animationend", () => {
  $word.classList.add("hide")
})

$mouth.addEventListener("animationend", () => {
  $mouth.classList.remove("bite")
  $eye.forEach(el=>el.classList.remove("big"))
  initTiger();
})

$tooth.forEach((el, index) => {
  el.addEventListener("click", e => {
    const { target } = e;
    if (target.classList.value == "active" || tigerState == "active") return;
    if (activeIndex == index) return handleBite()
    target.classList.add('active')
  })
})