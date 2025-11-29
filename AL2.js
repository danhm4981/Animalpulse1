
  function submitForm(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let vaccines = document.getElementById("vaccines").value;
    let nextDate = document.getElementById("nextDate").value;

    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("vaccines", vaccines);
    localStorage.setItem("nextDate", nextDate);

    window.location.href = "confirm.html";
  }