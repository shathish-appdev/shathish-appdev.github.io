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

async function generateResponse(userInput, context, securityKey) {
  // Define the chatbot's responses here

  // Create the response object
  const response = {
    security_key: securityKey,
    context: context,
    given_input: userInput
  };

  // Convert the response object to a JSON string
  const jsonResponse = JSON.stringify(response);

  try {
    // Send a POST request to the API endpoint
    const apiResponse = await fetch('https://clmugv7h6i.execute-api.ap-south-1.amazonaws.com/default/FuntionToPassInput', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: jsonResponse
    });

    const data = await apiResponse.json(); // Parse the response data as JSON
    const body = data.body; // Extract the body from the response data

    // Handle the response here
    console.log(body);
    return body; // Return the body from the Lambda function
  } catch (error) {
    // Handle any errors here
    console.error(error);
    return error; // Return the error
  }
}



async function sendMessage() {
  const text = userInput.value.trim();
  const context = contextInput.value.trim();
  const securityKey = securityKeyInput.value.trim();
  if (text && securityKey) {
    appendMessage(text, 'user-message');
    try {
      const response = await generateResponse(text, context, securityKey);
      appendMessage(response, 'chatbot-message');
    } catch (error) {
      console.error(error);
      appendMessage('Sorry, an error occurred.', 'chatbot-message');
    }
    userInput.value = '';
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

