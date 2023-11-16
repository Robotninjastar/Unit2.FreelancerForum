// Define arrays for possible names and occupations
const names = ['Alice', 'Bob', 'Carol', 'David', 'Eve'];
const occupations = ['Writer', 'Teacher', 'Programmer', 'Designer', 'Consultant'];

// Define an initial array of freelancers
const initialFreelancers = [
  { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
  { name: 'Bob', occupation: 'Teacher', startingPrice: 50 },
];

// Function to generate a new random freelancer
function generateRandomFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const startingPrice = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100
  return { name, occupation, startingPrice };
}

// Function to calculate the average starting price of freelancers
function calculateAveragePrice(freelancers) {
  const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
  const averagePrice = totalPrices / freelancers.length;
  return averagePrice.toFixed(2); // Round to two decimal places
}

// Function to update the freelancers list and average starting price
function updateFreelancersList() {
  const freelancersList = document.getElementById('freelancersList');
  const averagePriceElement = document.getElementById('averagePrice');

  const newFreelancer = generateRandomFreelancer();
  initialFreelancers.push(newFreelancer);

  const listItem = document.createElement('li');
  listItem.textContent = `${newFreelancer.name} - ${newFreelancer.occupation} - $${newFreelancer.startingPrice}`;
  freelancersList.appendChild(listItem);

  const averagePrice = calculateAveragePrice(initialFreelancers);
  averagePriceElement.textContent = averagePrice;
}

// Call the initial render function
initialFreelancers.forEach(freelancer => {
  const listItem = document.createElement('li');
  listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.startingPrice}`;
  document.getElementById('freelancersList').appendChild(listItem);
});

// Simulate new freelancers appearing every few seconds
setInterval(updateFreelancersList, 5000); // Add a new freelancer every 5 seconds