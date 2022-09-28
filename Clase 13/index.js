//SWEETALERT
let boton = document.getElementById("boton");
/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue?",
    icon: "error",
    confirmButtonText: "Cool",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Genial!",
    text: "Haz agregado al carrito!",
    icon: "success",
    confirmButtonText: "Cool",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Error inesperado",
    icon: "error",
    confirmButtonText: " =( ",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 5000,
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Está seguro de eliminar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      //logica para eliminar un producto

      Swal.fire({
        title: "Borrado!",
        icon: "success",
        text: "El archivo ha sido borrado",
      });
    }
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: 'Submit your Github username',
    input: 'text',
    showCancelButton: true,
    confirmButtonText: 'Look up',
    showLoaderOnConfirm: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: `${result.value}`
      })
    }
  })
}); */

//TOASTIFY
// let boton = document.getElementById("boton");

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 5000
  }).showToast();
}) */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    style: {
      background: "linear-gradient(to left, #00b09b, #96c92d)",
    },
  }).showToast();
}); */

boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    className: 'notificacion'
}).showToast();
});

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    onClick: () => {
      Toastify({
        text: "Clickeaste un Toast!",
        duration: 1500,
      }).showToast();
    },
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Click aquí para ir a Coder!",
    duration: 3000,
    destination: "https://www.coderhouse.com",
  }).showToast();
}); */

//LUXON
// const DateTime = luxon.DateTime;
/* const dt = DateTime.local(2022, 9, 22, 12, 45);
console.log(dt.c); */

// const hoy = DateTime.now();
/* console.log(hoy.toString());
console.log(hoy.year);
console.log(hoy.month);
console.log(hoy.day);
console.log(hoy.second);
console.log(hoy.weekday); */
// console.log(hoy.zoneName);
// console.log(hoy.daysInMonth);

/* console.log(hoy.toLocaleString());
console.log(hoy.toLocaleString(DateTime.DATE_FULL));
console.log(hoy.toLocaleString(DateTime.TIME_SIMPLE));
console.log(hoy.setLocale("es").toLocaleString(DateTime.DATE_FULL));
console.log(hoy.setLocale("en").toLocaleString(DateTime.DATE_FULL)); */

// const DateTime = luxon.DateTime;
// const hoy = DateTime.now();

// console.log(hoy.toLocaleString(DateTime.DATETIME_SHORT));

// const suma = hoy.plus({hours: 1, minutes: 10});
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

// const resta = hoy.minus({month: 1, days: 10});
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT));

/* const DateTime = luxon.DateTime;
const Interval = luxon.Interval;
const hoy = DateTime.now();
const navidad = DateTime.local(2022, 12, 25);

const i = Interval.fromDateTimes(hoy, navidad);
console.log(i.length("days"));
console.log(i.length("hours"));
console.log(i.length("minutes")); */