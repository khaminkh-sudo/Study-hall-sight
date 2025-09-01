document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("confirmation").innerText = "رزرو شما ثبت شد. منتظر تماس ما باشید!";
});
