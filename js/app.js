

var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var phoneInput =  document.querySelector('#phone');
var messageInput =  document.querySelector('#message');

var submitContact = document.querySelector('#submit');


// create a new instance of the Mandrill class with your API key
var m = new mandrill.Mandrill('7QYub5xMZKFYGucKLUci0w');

// create a variable for the API call parameters


function sendTheMail() {
// Send the email!
  var params = {
      "message": {
          "from_email": emailInput.value,
          "to":[{"email":"info@montanaopensky.com.co"}],
          'autotext': 'true',
          'subject': 'New contact '+ nameInput.value,
          'html': nameInput.value +" "+ emailInput.value +" "+ phoneInput.value +" "+ messageInput.value
      }
  };


    m.messages.send(params, function(res) {
        console.log(res);
        location.reload();
    }, function(err) {
        console.log(err);
    });


}
