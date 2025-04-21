const licenses = document.querySelector(".licenses");

licenses.addEventListener("click", (e) => {
  const clickedLicense = e.target.closest(".license");
  const bubble = clickedLicense.querySelector(".license__bubble");

  // 이미 active 상태면 제거하고 종료
  if (bubble.classList.contains("active")) {
    bubble.classList.remove("active");
    return;
  }

  // 클릭한 버블만 active 적용
  bubble.classList.add("active");
});
