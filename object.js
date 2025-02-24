//метод, который на вход получает объект, а на выходе возвращает число, соответствующее сумме всех числовых полей

let user = {
 name: 'Maria',
 surname: 'Ivanova',
 friends: 5,
 age: 22,
 projects: 7,
 karma: 17,
 
 getNumberNumericFields(obj) {
  const valuesArr = Object.values(obj);
  const numericValues = valuesArr.filter((value) => typeof value === 'number');
  const sumNumericValues = numericValues.reduce((accumulator, value) => {
   return accumulator + value;
  }, 0);
  console.log(sumNumericValues);
 },
};

user.getNumberNumericFields(user);
