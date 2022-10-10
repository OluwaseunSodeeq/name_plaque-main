const buyBtn = document.querySelector(".buy-submit");
const msgClass = document.querySelector(".msg");
const resetBtn = document.querySelector(".reset");

let showMsg = (a, b, c, d) => {
  msgClass.style.display = a;
  msgClass.textContent = b;
  msgClass.classList.add(c);
  msgClass.classList.remove(d);
};

let buyNow = () => {
  let newInput = userInput.value;

  if (newInput === "" || newInput === " ") {
    showMsg("block", " kindly input letter(s)!", "active1", "active2");
  } else if (newInput === "YOUR NAME" || newInput === "your name") {
    userPricePreview.textContent = "$0";
    showMsg(
      "block",
      "Kindly enter your customized letters",
      "active1",
      "active2"
    );
  } else if (newInput.length > 15) {
    userPricePreview.textContent = "$0";
    showMsg(
      "block",
      "Sorry! , We have 15 letters left in stock, and you have exceeded the limit.",
      "active1",
      "active2"
    );
  } else {
    showMsg(
      "block",
      "Awesome! you entered the right content.",
      "active2",
      "active1"
    );
  }
  resetBtn.style.display = "block";
};
buyBtn.addEventListener("click", buyNow);
resetBtn.addEventListener("click", function () {
  msgClass.style.display = "none";
  userInput.value = "";
  userLeterPreview.textContent = "YOUR NAME";
  resetBtn.style.display = "none";
  userPricePreview.textContent = "$0";
});
