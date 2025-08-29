
// ================== COPY BUTTON HANDLE ==================
const copyButtons = document.querySelectorAll("button[id^='copy-btn']");
const copyCounter = document.getElementById("copy");
let copyCount = 0;

copyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".bg-white");
    const numberElement = card.querySelector("span[id^='number']");
    const copyNumber = numberElement.textContent;

    // copy to clipboard
    navigator.clipboard.writeText(copyNumber).then(() => {
      console.log(`Copied: ${copyNumber}`);
    });

    // add copy counter
    copyCount++;
    copyCounter.textContent = copyCount;

    // Alert দেখাও
    alert("নম্বর কপি হয়েছে: " + copyNumber);
  });
});


// ================== HEART ICON HANDLE ==================
const heartIcons = document.querySelectorAll(".fa-heart");
const headerHeartCounter = document.querySelector(
  "header div:first-child ~ div div:first-child span"
);

let heartCount = 0;

heartIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    heartCount++;
    headerHeartCounter.textContent = heartCount;
    icon.classList.toggle("text-red-500"); // when click turn to be red
  });
});


// ================== CALL BUTTON HANDLE ==================
const callButtons = document.querySelectorAll("button[id^='card-btn']");
const coinCounter = document.querySelector(
  "header div:first-child ~ div div:nth-child(2) span"
); // হেডারের কয়েন counter
let coins = parseInt(coinCounter.textContent); // initial 100 coin

const callHistoryBox = document.getElementById("card-container");
const clearBtn = document.querySelector("aside button"); // Clear button

callButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    
      if (coins < 20) {
      alert("❌আপনার কাছে পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে!");
      return;
    }

    // decrease coin
    coins -= 20;
    coinCounter.textContent = coins;

    //card number+card title
    const card = btn.closest(".bg-white");
    const numberElement = card.querySelector("span[id^='number']");
    const callNumber = numberElement.textContent;

    const titleElement = card.querySelector("h3");
    const callTitle = titleElement ? titleElement.textContent : "Unknown";
      alert(`📞Calling ${callTitle} ${callNumber}...`);


    // Local time (English format)
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    // Call History Item 
    const historyItem = document.createElement("div");
    historyItem.className =
      "p-3 mb-2 border-b flex justify-between items-center text-sm";
    historyItem.innerHTML = `
      <div>
        <span class="font-bold">${callTitle}</span><br/>
        📞 ${callNumber}
      </div>
      <span class="text-gray-500">${time}</span>
    `;

    callHistoryBox.prepend(historyItem); // add to history
  });
});

// ================== CLEAR CALL HISTORY ==================
clearBtn.addEventListener("click", () => {
  callHistoryBox.innerHTML = "";
});