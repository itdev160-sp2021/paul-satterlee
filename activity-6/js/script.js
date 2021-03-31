//array to store messages
var messages = [];

//message type lookup object. Similar to enum
var MessageType = {
  out: 'out-message',
  in: 'in-message',
  unknown: 'unknown-message'
};

//Seed data (optional)
//add code here...

//message constructor function
function Message(type, user, message){
  this.type = type;
  this.user = user;
  this.message = message;
}

//Function to create and return an element for hte supplied message
function createMessageElement(message){
  //create text element for the message
  var messageText = document.createTextNode(
    message.user + ': ' + message.message
  );

  //create the element and add the message text
  var messageEl = document.createElement('div');
  messageEl.appendChild(messageText);

  //Add a class using the message type
  messageEl.className = message.type;

  return messageEl;
}

//Button click event handler to add a new message 
function addMessageHandler(event){
  var user, type;
  var messageInput = document.getElementById('message-input');
  var messagesContainerEl = document.getElementById('message-container');

  //Determine message type and set message variables accordingly
  switch(event.target.id){
    case 'send-button':
      user = 'Mike';
      type = MessageType.out;
      break;
    case 'reply-button':
      user = 'Joe';
      type = MessageType.in;
      break;
    default:
      user = 'unknown';
      type = MessageType.unknown;
  }

  //create new message
  if(messageInput.value != ''){
    //Construct a message and add it to the array
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    //Create a message element
    var el = createMessageElement(message);

    //Add the message element to the DOM
    messagesContainerEl.appendChild(el);

    //Reset input
    messageInput.value = '';
  }
}

//Load seed data from data array above (optional)
//add code here...

var init = function() {
  //write event handlers
  document.getElementById('send-button').onclick = addMessageHandler;
  document.getElementById('reply-button').onclick = addMessageHandler;

};

init();