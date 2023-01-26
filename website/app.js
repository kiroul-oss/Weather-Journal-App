/* Global Variables */
const apikey = "&appid=545cc289a5dcf6b8283eb1f787f3b0d8&units=metric";
// const url = "http://localhost:8000";
const url2 = "https://api.openweathermap.org/data/2.5/forecast?zip=";
// Create a new date instance dynamically with JS

let d = new Date();
// let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

document
  .getElementById("generate")
  .addEventListener("click", async function () {
    let zCode = document.getElementById("zip").value;
    let feeling = document.getElementById("feelings").value;
    const respond = await fetch(`${url2}${zCode}${apikey}`).then((res) =>
      res.json()
    );
    // console.log(respond.list[0].main.temp);
    const temp = respond.list[0].main.temp;
    let data = {
      newDate,
      temp,
      feeling,
    };
    await fetch("/weather", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await fetch("/all").then((res) => res.json());
    // console.log(result);
    document.getElementById("date").innerHTML = `Date: ${result.date}`;
    document.getElementById(
      "temp"
    ).innerHTML = `Temperature: ${data.temp} &#8451;`;
    document.getElementById(
      "content"
    ).innerHTML = `Feelings: ${result.content}`;
  });
