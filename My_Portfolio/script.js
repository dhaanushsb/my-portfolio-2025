function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const mailtoLink = `mailto:sbdhaanush@gmail.com?subject=Message%20from%20${encodeURIComponent(
      name
    )}&body=Email:%20${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(
      message
    )}`;

    // Open mailto link
    window.location.href = mailtoLink;
  }