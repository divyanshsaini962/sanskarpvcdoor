// contact form

function sendEmail(){
    Email.send({
      SecureToken : "084d6415-c568-44f3-a6c2-cbce788a257b",
      To : 'sanskarpvcdoor@gmail.com',
      From : "sanskarpvcdoor@gmail.com",
      Subject : "New contact form enquiry",
      Body : "Name: " + document.getElementById("name").value
       + "<br> Email:" + document.getElementById("email").value
       + "<br> Phone no: +91" + document.getElementById("Phone").value
       + "<br> City: " + document.getElementById("city").value
        + "<br> Massage: " + document.getElementById("massage").value
  }).then(
    message => alert("succesful")
  );
          };

