var rootRef = new Firebase('https://moss.firebaseio.com/web/');


var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var phoneInput =  document.querySelector('#phone');
var messageInput =  document.querySelector('#message');

var submitContact = document.querySelector('#submit');


submitContact.onclick = function () {
  var contactRef = rootRef.child("contact");

  var newPostRef = contactRef.push();
   newPostRef.set({
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      message: messageInput.value
    }, callbackSaving());

};

callbackSaving = function(error){
    // TODO: cambiar los alert por algun error custom en el landing
    if (error) {
      alert("Data could not be saved." + error);
    } else {
      alert("Data saved successfully.");
      sendMail();
    }
}

sendMail = function() {
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': '7QYub5xMZKFYGucKLUci0w',
        'message': {
          'from_email': 'no-reply@montanaopensky.com.co',
          'to': [
              {
                'email': 'wcastiblanco@montanaopensky.com.co',
                'name': 'Wilson Castiblanco',
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': 'New contact '+nameInput.value,
          'html': nameInput.value +" "+ emailInput.value +" "+ phoneInput.value +" "+ messageInput.value
        }
      }
     }).done(function(response) {
       console.log(response); // if you're into that sorta thing
     });
  }

