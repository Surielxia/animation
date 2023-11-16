function randomNum(max, min = 0, u = 1) {
  return (min + max * Math.random()) * u
}
function randomColor() {
  return `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`
}
function initDom(count) {
  let ulEle = document.querySelector("ul")
  for (let i = 0; i < count; i++) {
    let liEle = document.createElement("li")
    const styleSheets = {
      width: `${randomNum(110, 90)}px`,
      background: `${randomColor()}`,
      animation: `falldown .3s cubic-bezier(.44,.02,.65,1.3) ${50 * (count - i) + (150 * Math.random() - 300 * Math.random())}ms forwards`
    };
    Object.assign(liEle.style, styleSheets);
    ulEle.appendChild(liEle)
  }
}
initDom(51)