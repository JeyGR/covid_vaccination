document.querySelector("button").addEventListener("click", function (event) {
  event.preventDefault();
  const name = document.querySelector(".Name");
  const number = document.querySelector(".Number");
  const pass = document.querySelector(".pass");

  const requestData = {
    name: name.value,
    phone: number.value,
    pass: pass.value,
  };

  async function postData(
    url = "http://localhost:3000/api/v1/signin",
    data = requestData
  ) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const Success = postData().then((res) => {
    console.log(res.msg);
    if (res.msg == "Success") {
      window.location.replace(
        "file:///D:/Full%20stack%20journey/Covid-Vaccination/Front-end/login_page/index.html"
      );
    } else {
      alert(res.msg);
    }
  });
});
const loginbtn = document.querySelector(".loginbtn");
loginbtn.addEventListener("click", (event) => {
  event.preventDefault();
  window.location.replace(
    "file:///D:/Full%20stack%20journey/Covid-Vaccination/Front-end/login_page/index.html?"
  );
});
