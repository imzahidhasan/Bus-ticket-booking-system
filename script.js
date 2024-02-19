getElementById("banner-btn").addEventListener("click", goToTicketSection);

function getElementById(elemId) {
  return document.getElementById(elemId);
}

function goToTicketSection() {
  getElementById("TicketCenter").scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "center",
  });
}

let seats = document.querySelectorAll(".seat");
let totalSelectedSeat = 0;
let totalPrice = 0;
let totalSeat = 40;
let totalSeatLeft = getElementById("totalSeatLeft");
totalSeatLeft.innerText = totalSeat;

function updatePrices() {
  let showTotalPrice = getElementById("totalPrice");
  let grandTotal = getElementById("grandTotalPrice");
  showTotalPrice.innerText = totalPrice;
  grandTotal.innerText = totalPrice;
}
for (const seat of seats) {
  seat.addEventListener("click", function () {
    if (totalSelectedSeat === 4) {
      return alert(
        "You have already selected 4 seats; you cannot book more than 4."
      );
    }
    seat.classList.add("disabled:bg-[#1DD100]");
    seat.setAttribute("disabled", true);
    let seatNumber = seat.innerText;
    let TicketListArea = getElementById("TicketListArea");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h1");
    let h3 = document.createElement("h1");
    h1.innerText = seatNumber;
    h2.innerText = "Economy";
    h3.innerText = 550;
    TicketListArea.appendChild(h1);
    TicketListArea.appendChild(h2);
    TicketListArea.appendChild(h3);
    totalSelectedSeat = totalSelectedSeat + 1;
    totalPrice = totalPrice + 550;
    updatePrices();
    getElementById("selectedSeat").innerText=totalSelectedSeat;
    totalSeatLeft.innerText = totalSeat - totalSelectedSeat;
    if(totalSelectedSeat===4) {
    getElementById("couponBtn").classList.remove("btn-disabled");
    }
      
    
  });
}

const coupon1 = "NEW15";
const coupon2 = "Couple 20";

const couponBtn = getElementById("couponBtn");

couponBtn.addEventListener("click", function () {
  let voucher = getElementById("inputValue").value;
  const grandTotal = getElementById("grandTotalPrice");

  if (voucher === coupon1 && totalSelectedSeat === 4) {
    getElementById("discountLine").classList.remove("hidden");
    let h1 = document.createElement("h1");
    h1.innerText = totalPrice * 0.15;
    getElementById("discount").appendChild(h1);
    let grandTotalPrice = totalPrice - totalPrice * 0.15;
    grandTotal.innerText = grandTotalPrice;
    getElementById("inputField").classList.add("hidden");
  } else if (voucher === coupon2 && totalSelectedSeat === 4) {
    let grandTotalPrice = totalPrice - totalPrice * 0.2;
    grandTotal.innerText = grandTotalPrice;
    getElementById("inputField").classList.add("hidden");
  } else {
    grandTotal.innerText = totalPrice;
  }
});

