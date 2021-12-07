const post = document.getElementById("post");
const get = document.getElementById("get");
const getId = document.getElementById("getId");
const id = "61ae77a466d2ace3bab3039d";

getId.addEventListener("click", function (evt) {
  console.log("boton");
  const request = new Request(`http://localhost:8090/students/${id}`, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  console.log("request =", request);
  fetch(request)
    .then(function (response) {
      console.log("response =", response);
      return response;
    })
    .then(function (data) {
      console.log("data = ", data);
    })
    .catch(function (err) {
      console.error(err, "ERROR GET");
    });
});

post.addEventListener("click", function (evt) {
  console.log("click");
  const request = new Request("http://localhost:8090/students", {
    method: "POST",
    mode: "no-cors",
    credentials: "omit",
    cache: "no-cache",
    referrerPolicy: "no-referrer",
    headers: {
      Host: "<calculated whan request is sent>",
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
    body: JSON.stringify({
      name: "fatima",
      surname: "blanco",
      idCardNumber: "226123123J",
      birthDate: "1990-10-26",
    }),
  });
  console.log("request =", request);
  fetch(request)
    .then(function (response) {
      console.log("response =", response);
      return response.json();
    })
    .then(function (data) {
      console.log("data = ", data);
    })
    .catch(function (err) {
      console.error(err);
    });
});

get.addEventListener("click", function (evt) {
    const request = new Request("http://localhost:8090/students", {
    method: "GET",
    mode: 'no-cors',
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    });
    console.log("request =", request);
    fetch(request)
    .then(function (response) {
        console.log("response =", response);
        return response.text();
    })
    .then(function (data) {
        console.log("data = ", data);
    })
    .catch(function (err) {
        console.error(err, "ERROR GET");
    });
});
