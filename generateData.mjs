export function getData() {
  let arr = []
  for (let index = 1; index <= 200; index++) {
    arr.push 
    ({
      "id": index,
      "date": generateDate(),
      "name": generateStr(),
      "count": generateNum(),
      "distance": generateNum() + " км"
    })
  }
  const units = {"units": arr}
  return units
}

function generateStr() {
  let nouns = ["heat", "grandmother", "heart", "market", "resource", "guide", "job", "photo", "book", "recipe", "state"]
  let adjectives = ["Additional", "Afraid", "Angry", "Anxious", "Available", "Beautiful", "Brave", "Busy", "Clever", "Constant", "Curious"]
  var randomName = "";
  randomName += adjectives[Math.floor(Math.random() * adjectives.length)] + " " + nouns[Math.floor(Math.random() * nouns.length)]
  return randomName
}

function generateNum() {
  return Math.floor(Math.random() * 100)
}

function generateDate() {
  let monthDay = getRandomIntInclusive(1 , 30)
  let month = getRandomIntInclusive(1 , 12)
  let year = getRandomIntInclusive(2000 , 2022) 
  return `${monthDay}.${month}.${year}`
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}
