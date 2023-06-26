var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
button1.onclick = function () {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
}
button2.onclick = function () {
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response => response.json())
    .then(data => console.log(data))
}
button3.onclick = function () {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(data => console.log(data))
}
button4.onclick = function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
}
button5.onclick = function () {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(data => console.log(data))
}
