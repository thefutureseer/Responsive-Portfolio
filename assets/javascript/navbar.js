// load the nav bar component and check for errors
$("#navbar-placeholder").load("navbar/navBar.html", function(response, status, xhr) {
  if (status === "error") {
    console.error("Error loading navbar:", xhr.status, xhr.statusText);
  } else {
    console.log("Navbar loaded successfully!");
  }
});