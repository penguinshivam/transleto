document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translateBtn');
    const translatedText = document.getElementById('translatedText');
  
    translateBtn.addEventListener('click', function() {
      const textInput = document.getElementById('textInput').value;
      const selectedLanguage = document.getElementById('selectLanguage').value;
  
      // Example Python backend URL
      const backendUrl = 'http://localhost:5000/translate'; // Update with your backend URL
  
      // Example data to send to the backend
      const data = {
        text: textInput,
        targetLanguage: selectedLanguage,
      };
  
      // Make a POST request to the Python backend
      fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
        translatedText.textContent = data.translatedText;
      })
      .catch(error => console.error('Error:', error));
    });
  });
  var dropdown = document.getElementById("myDropdown");

var data = [
  {
    "value": "option1",
    "text": "english"
  },
  {
    "value": "option2",
    "text": "hindi"
  },
  
];

data.forEach(function(item) {
  var option = document.createElement("option");
  option.value = item.value;
  option.textContent = item.text;
  // Create the parent element
const parentElement = document.createElement('div');

// Append the child element to the parent element
parentElement.appendChild(childElement);

// Append the parent element to the body
document.body.appendChild(parentElement);
  dropdown.appendChild(option);
});
  