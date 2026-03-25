const movieBooking = new Promise((resolve, reject) => {
  let seatAvailable = true;

  let ticket = 1;

  setTimeout(() => {
    if (seatAvailable) {
      resolve(ticket);

      console.log("tickets available");
    } else {
      reject("ticket is not available");
      console.log("ticket is not available");
    }
  }, 3000);
});

async function ticketStatus() {
  const result = await movieBooking;

  console.log("result", result);
  console.log("it will show result after checking");
}

ticketStatus();
