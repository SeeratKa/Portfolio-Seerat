
  function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const serviceId = "service_miiv1jl";
    const templateId = "template_skl35yb";

    emailjs.send(serviceId, templateId, params)
      .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message has been sent successfully!");
      })
      .catch(err => console.error(err));
  }
