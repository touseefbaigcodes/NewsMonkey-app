import React from "react";

export default function App() {

// Function that returns a Promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation, like fetching data from an API
    setTimeout(() => {
      const data = {
        name: 'John Doe',
        age: 30,
        city: 'Example City'
      };

      // If the operation is successful, we resolve the Promise with the data
      resolve(data);

      // If there's an error, we reject the Promise with an error message
      // Uncomment the next line to simulate an error
      // reject('Error fetching data');
    }, 2000); // Simulating a 2-second delay
  });
}

// Using the Promise
fetchData()
  .then(data => {
    // This block is executed if the Promise is resolved
    console.log('Data:', data);
  })
  .catch(error => {
    // This block is executed if the Promise is rejected
    console.error('Error:', error);
  })
  .finally(() => {
    // This block is always executed, regardless of the Promise's outcome
    console.log('Request completed.');
  });


  return <div>This is code</div>;
}
