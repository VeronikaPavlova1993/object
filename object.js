let user = {
 name: 'Maria',
 surname: 'Ivanova',
 friends: 5,
 age: 22,
 projects: 7,
 karma: 17,

 //метод, который на вход получает объект, а на выходе возвращает число, соответствующее сумме всех числовых полей
 getNumberNumericFields(obj) {
  const valuesArr = Object.values(obj);
  const numericValues = valuesArr.filter((value) => typeof value === 'number');
  const sumNumericValues = numericValues.reduce((accumulator, value) => {
   return accumulator + value;
  }, 0);
  console.log(sumNumericValues);
 },

 // метод возвращает массив с названиями полей,где названия полей отсортированы по убыванию
 getSortDescendingOrderFields(obj) {
  let arr = [];
  for (let key in obj) {
   if (typeof obj[key] === 'number') {
    arr.push([key, obj[key]]);
   }
  }
  arr.sort((a, b) => {
   return b[1] - a[1];
  });

  const objKeys = Object.fromEntries(arr);

  console.log(Object.keys(objKeys));
  return Object.keys(objKeys);
 },
};

user.getNumberNumericFields(user);
user.getSortDescendingOrderFields(user);
