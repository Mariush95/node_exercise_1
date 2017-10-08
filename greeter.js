function greet() {

var arr = ["hei", "hello", "halla"];

var randomGreeting = arr[Math.floor(Math.random() * 3)]

return randomGreeting;
}
console.log(greet());

