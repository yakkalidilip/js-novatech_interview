// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var emp = {
  id: 10,
  name: 'jony',
  isemployed: true,
  address: 'canada',
  salary: 20000,
  previousOrg: undefined,
};

// iterate through objects and functionality

Object.entries(emp).forEach(([key, val]) => {
  console.log(val);
  if (typeof val === 'boolean') {
    console.log('!value', !val);
  } else if (typeof val === 'number') {
    console.log('doubling number', val * 2);
  } else if (typeof val === 'string') {
    const reverseStr = val.split('').reverse().join('');
    console.log('reversing string', reverseStr);
  } else {
    console.log(undefined);
  }
});
