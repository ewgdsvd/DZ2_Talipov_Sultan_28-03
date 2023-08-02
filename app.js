const cities = ["Бишкек", "Лос-Анджелес", "Чикаго", "Нью-Йорк", "Хьюстон", "Даллас", "Филадельфия", "Сиэтл"];

const citiesWithMoreThan6Chars = [];
const citiesWithS = [];

for (const city of cities) {
  if (city.length > 6) {
    citiesWithMoreThan6Chars.push(city);
  }

  if (city.includes('s') || city.includes('S')) {
    citiesWithS.push(city);
  }
}

console.log(citiesWithMoreThan6Chars);
console.log(citiesWithS);

function trafficLightColor(inputColor) {
  switch (inputColor.toLowerCase()) {
    case 'red':
      alert('Stop');
      break;
    case 'yellow':
      alert('Prepare to go');
      break;
    case 'green':
      alert('Go');
      break;
    default:
      alert('Пожалуйста, укажите допустимые цвета светофора (red, yellow, or green).');
  }
}

const userInput = prompt('Введите цвет светофора:(red, yellow, green)');
trafficLightColor(userInput);
