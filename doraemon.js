// 연결
const doraemonBtn = document.querySelector(".doraemon");
const dora = document.querySelector(".do-img");

// 애니메이션
dora.classList.add("move");

// 마우스를 누르는 동안 도라에몽이 움직임
doraemonBtn.addEventListener("mousedown", () => {
  dora.style.animationPlayState = "running";
});

// 마우스를 떼면 멈춤
doraemonBtn.addEventListener("mouseup", () => {
  dora.style.animationPlayState = "paused";
});
