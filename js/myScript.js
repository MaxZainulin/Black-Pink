const discountEndDate = new Date("2023-06-18T23:59:59");

function updateCountdown() {
  const now = new Date();
  const remainingTime = discountEndDate - now;

  if (remainingTime <= 0) {
    document.getElementById("discount-date").textContent = "Expired";
    document.getElementById("countdown").textContent = "Expired";
    return;
  }

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  const discountDateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const discountDate = discountEndDate.toLocaleDateString(
    "ru",
    discountDateOptions
  );

  document.getElementById("discount-date").textContent = discountDate;
  document.getElementById(
    "countdown"
  ).textContent = `${hours}:${minutes}:${seconds}`;

  setTimeout(updateCountdown, 1000);
}

updateCountdown();


function reloadPage() {
  location.reload();
}
