const loadData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data loaded");
    }, 3000);
  });
};

async function fetchData() {
  console.log("loading...");

  const data = await loadData();

  console.log("data", data);

  console.log("it will wait until promise result");
}

fetchData();
