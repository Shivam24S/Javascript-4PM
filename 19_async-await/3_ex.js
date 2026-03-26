function apiCall() {
  return new Promise((resolve, reject) => {
    let data = true;

    setTimeout(() => {
      if (data) {
        resolve("data loaded");
      } else {
        reject("can't able to fetch data");
      }
    }, 3000);
  });
}

async function fetchData() {
  try {
    console.log("loading.....");

    const data = await apiCall();

    console.log("data", data);

    console.log("it will until above asynchronous  operation complete");
  } catch (error) {
    console.log(error);
  }
}
fetchData();
console.log("it will won't wait for anybody");

