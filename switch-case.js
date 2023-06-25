const fruit = 'Mangoes';

switch (fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.89 a pound.');
    break;
  case 'Papayas':
    console.log('Papayas are $2.79 a pound.');
    break;
  default:
    console.log('Sorry, we are out of', fruit);
}

const day = 'THU';

switch (day) {
  case 'SUN':
    console.log('Sun 50% off, on HDFC');
    break;
  case 'MON':
    console.log('Monday 40% off on Axis');
    break;
  case 'TUE':
    console.log('Tuesday 30% off on SBI');
    break;
  case 'WED':
    console.log('Wednesday 20% off on ICICI');
    break;
  case 'THU':
    console.log('Thursday 10% off on PNB');
    break;
  case 'FRI':
    console.log('Friday 30% off on Kotak');
    break;
  case 'SAT':
    console.log('Saturday 50% off Canara');
    break;
  default:
    console.log('No Offers Today');
}