//# Домашка
//1. Создай репозиторий skillup-hw-js-03


//## Перебирающие методы массивов
//### Задание 1

//На основе массива `[1,2,3,5,8,9,10]` сформировать новый массив,
//каждый элемент которого будет хранить информацию о числе и его четности:
const arr = [1,2,3,5,8,9,10];

arr.forEach(function(item, index, arr) {
		if(item%2 == 0){
			dig = item;
			od = false;
		}else{
			dig = item;
			od = true;
	}
	const obj = {digit: dig, odd: od};
	console.log(obj);
});

//### Задание 2
//Проверить, содержит ли массив `[12, 4, 50, 1, 0, 18, 40]` элементы, равные нулю. Если да - вернуть true.

const newArr = [12, 4, 50, 1, 0, 18, 40];
let zeroIs = newArr.filter(function(item) {
 let zero;
  if(item < 1){
	zero = true; 
	 console.log(zero);
	 document.write(zero, " ",'<br>');
  }
  return zero;
});
//console.log(zeroIs);
//document.write(zeroIs, " ");


//Проверить, все элементы массива имеют длину более 3х символов `['yes', 'hello', 'no', 'easycode', 'what']`.
//Если да - вернуть true
const stringArr = ['yes', 'hello', 'no', 'easycode', 'what'];

const lengthMoreThird = stringArr.every(function(item) {
 return item.length >= 3;
});
console.log(lengthMoreThird);
document.write(lengthMoreThird, " ",'<br>');

//### Задание 3
//Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке
// `{буква: “a”, позиция_в_предложении: 1}`:
const objsArrs = [
{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}
]
//Напишите функцию, которая из элементов массива соберет и вернёт
//строку, основываясь на index каждой буквы. Например:
//`[{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”`
objsArrs.sort((a,b)=> {
if (a.index > b.index){
	return 1;
}
if (a.index < b.index){
	return -1;
}
return 0;
});

const newArry = objsArrs.map(names => {
    return names.char;

})
console.log(newArry.toString());