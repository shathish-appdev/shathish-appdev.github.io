const typingText = document.getElementById('typing-text');
const phrase = 'Meet Leo - Your friendly assistant';
let currentLength = 0;
let intervalId = null;

function animateTyping() {
  const phraseLength = phrase.length;
  
  intervalId = setInterval(() => {
    if (currentLength === phraseLength) {
      clearInterval(intervalId);
 
      return;
    }
    
    const newText = phrase.slice(0, currentLength + 1);
    typingText.textContent = newText;
    currentLength++;
  }, 100);
}






    const chat = document.getElementById('chat');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const securityKeyInput = document.getElementById('security-key-input');
    const contextInput = document.getElementById('context-input');

    function createMessageElement(text, className) {
      const message = document.createElement('div');
      message.textContent = text;
      message.classList.add('message', className);
      return message;
    }

    function appendMessage(text, className) {
      const message = createMessageElement(text, className);
      chat.appendChild(message);
      chat.scrollTop = chat.scrollHeight;
    }

    function generateResponse(userInput, context, securityKey) {
  // Define the chatbot's responses here

  // Create the response object
  const response = {
    security_key: securityKey,
    context: context,
    given_input: userInput
  };

  // Convert the response object to a JSON string
  const jsonResponse = JSON.stringify(response);

      
    // Make a POST request to the server
  fetch('https://clmugv7h6i.execute-api.ap-south-1.amazonaws.com/default/FuntionToPassInput', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://shathish-appdev.github.io'
    },
    body: jsonResponse
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server here
    const responseString = JSON.stringify(data);
    console.log(responseString);
    // You can do something with the responseString here
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });

  // Return the JSON string
  return responseString;
}


    function sendMessage() {
      const text = userInput.value.trim();
      const context = contextInput.value.trim();
      const securityKey = securityKeyInput.value.trim();
      if (text && securityKey) {
        // Only generate a response if the security key is correct
        //if (securityKey === 'Ppp') {
          appendMessage(text, 'user-message');
          const response = generateResponse(text, context, securityKey);
          appendMessage(response, 'chatbot-message');
          userInput.value = '';
        //} else {
          //alert('Incorrect security key.');
        //}
      }
    }

document.addEventListener('DOMContentLoaded', function() {
  animateTyping();
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        sendMessage();
      }
    });
});

