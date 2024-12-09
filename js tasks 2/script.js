function validateAndDisplay() {
    // Get input values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const color = document.getElementById('color').value;
  
    // Validation
    const nameValid = isNaN(name) && name.trim() !== ""; // Name should not be a number
    const phoneValid = /^\d{8}$/.test(phone); // Phone should be an 8-digit number
    const mobileValid = /^(010|011|012)\d{8}$/.test(mobile); // Mobile should start with 010/011/012 and be 11 digits
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); // Email format validation
  
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous output
  
    if (nameValid && phoneValid && mobileValid && emailValid) {
      // Display welcoming message
      output.className = color;
      output.innerHTML = `
        <p>Welcome, <strong>${name}</strong>!</p>
        <p>Your details are:</p>
        <ul>
          <li>Phone Number: ${phone}</li>
          <li>Mobile Number: ${mobile}</li>
          <li>Email: ${email}</li>
        </ul>
      `;
    } else {
      // Display validation errors
      output.className = 'red';
      output.innerHTML = '<p>There were errors in your input:</p>';
      if (!nameValid) output.innerHTML += '<p>Invalid name (should be a non-empty string).</p>';
      if (!phoneValid) output.innerHTML += '<p>Invalid phone number (should be 8 digits).</p>';
      if (!mobileValid) output.innerHTML += '<p>Invalid mobile number (should be 11 digits and start with 010, 011, or 012).</p>';
      if (!emailValid) output.innerHTML += '<p>Invalid email format.</p>';
    }
  }

 
function findLargestWord(inputString) {
    // Split the string into words using space as a delimiter
    const words = inputString.split(' ');
  
    // Initialize variables to keep track of the largest word and its length
    let largestWord = '';
    let maxLength = 0;
  
    // Iterate through the words
    for (const word of words) {
      if (word.length > maxLength) {
        largestWord = word; // Update the largest word
        maxLength = word.length; // Update the max length
      }
    }
  
    return largestWord;
  }
  
  function findAndDisplayLargestWord() {
    // Get the sentence from the input field
    const sentence = document.getElementById('sentence').value;
    const output = document.getElementById('largestWordOutput');
  
    // Validate the sentence is not empty
    if (sentence.trim() === '') {
      output.className = 'red';
      output.innerText = 'Please enter a valid sentence.';
      return;
    }
  
    // Find the largest word and display it
    const largestWord = findLargestWord(sentence);
    output.className = 'blue';
    output.innerText = `The largest word is: ${largestWord}`;
  }

  function sortArray() {
    const input = document.getElementById('numbers').value;
    const originalArray = input.split(',').map(Number); // Convert input to an array of numbers
  
    // Check if input is valid (exactly 5 numbers)
    if (originalArray.length !== 5 || originalArray.some(isNaN)) {
      alert('Please enter exactly 5 valid numerical values separated by commas.');
      return;
    }
  
    // Sort in ascending and descending order
    const ascending = [...originalArray].sort((a, b) => a - b);
    const descending = [...originalArray].sort((a, b) => b - a);
  
    // Display results
    document.getElementById('originalArray').textContent = originalArray.join(', ');
    document.getElementById('ascendingOrder').textContent = ascending.join(', ');
    document.getElementById('descendingOrder').textContent = descending.join(', ');
  }
  function calculateArea() {
    const radius = document.getElementById('radius').value;
  
    // Validate the input
    if (radius === '' || isNaN(radius) || radius <= 0) {
      alert('Please enter a valid positive number for the radius.');
      return;
    }
  
    // Calculate the area
    const area = Math.PI * Math.pow(radius, 2);
  
    // Show the result in a popup
    alert(`The area of the circle with radius ${radius} is ${area.toFixed(2)}.`);
  }

  function calculateSquareRoot() {
    const number = document.getElementById('number').value;
  
    // Validate the input
    if (number === '' || isNaN(number) || number < 0) {
      alert('Please enter a valid non-negative number.');
      return;
    }
  
    // Calculate the square root
    const squareRoot = Math.sqrt(number);
  
    // Show the result in a popup
    alert(`The square root of ${number} is ${squareRoot.toFixed(2)}.`);
  }

  function calculateCosine() {
    const angle = document.getElementById('angle').value;
  
    // Validate the input
    if (angle === '' || isNaN(angle)) {
      alert('Please enter a valid number for the angle.');
      return;
    }
  
    // Convert angle to radians and calculate cosine
    const angleInRadians = (angle * Math.PI) / 180;
    const cosineValue = Math.cos(angleInRadians);
  
    // Show the result in a popup
    alert(`The cosine of ${angle}° is ${cosineValue.toFixed(2)}.`);
  }