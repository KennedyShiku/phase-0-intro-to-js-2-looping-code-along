// const gifts = ["football", "drone", "PS5"];

// function wrappedGifts(gifts){
//   for (let i = 0; i < gifts.length; i++){
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrappedGifts(gifts);

function writeCards(names, occasion){
  let thankYouMessages = [];

  for (let i = 0; i < names.length; i++){
  thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
  debugger;
}
  return thankYouMessages;
};

writeCards(names);

function countDown(number){
  while (number >= 0){
    console.log(number);
    number--;
  }

  return countDown;
}

countDown(10);