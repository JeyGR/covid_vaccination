const getdata = async () => {
  const selector = document.querySelector(".maintb");

  const response = await fetch("http://localhost:3000/api/v1/tasks");
  const data = await response.json();
  console.log(data);
  data.forEach((d) => {
    console.log(d.count);
    const repeat = ` <tr>
      <td>${d.name}</td>
      <td>${d.count}</td>
      <td>9:00am - 5:00pm</td>
      <td class="btntd"><button class="tbbtn">Book Slot</button></td>
  </tr>`;
    selector.innerHTML += repeat;
  });
};
const logoutbtn = document.querySelector(".logoutbtn");
logoutbtn.addEventListener("click", (event) => {
  window.location.replace(
    "file:///D:/Full%20stack%20journey/Covid-Vaccination/Front-end/login_page/index.html"
  );
});
getdata();
