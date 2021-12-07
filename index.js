const boton = document.getElementById("prueba");
boton.addEventListener("click", function (evt) {
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
