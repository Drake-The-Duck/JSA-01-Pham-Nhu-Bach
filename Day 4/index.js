// // (on tap toan tu)
// // let a = 10 % 2
// // console.log(a)
// // console.log(a+1)

// // let helloFunction = function () {
// //     alert("Hello")
// // }
// // helloFunction(); 
// // if/else


// if (5 % 2 ==0) {
//     console.log("so chan")
// } else {
//     console.log("so le")
// }

// // (vong for) 

// // let count = 0
// // for(i=32; i<=40; i++){
// //     count ++
// // }
// // console.log("count: ", count)

// // cho biet co bao nhieu so chan tu 4 den 19, viet duoi dang function

    


// // console.log(count1)

// let evens = function(a) {

//     let count1 = 0
//     for(i=4; i<=a; i++){
//         if(i % 2 == 0) {
//         count1 ++
//         console.log(i)
//         } 
        
//     }
//     // console.log("so cac so chan la: ", count1)

// }

// evens()


// let divColor =document.getElementById('divColor')
// let turn = 0
// let colorChange = function() {

//     divColor.style.background = 'black'
// }

// let colorRevert = function() {
//     divColor.style.background = 'red'
// }

// divColor.addEventListener('mouseover', colorChange)
// divColor.addEventListener('mouseout', colorRevert)

// let triangle = document.getElementById('triangle')

//     for(i=1; i<6; i++) {
// for(j=1; j<=i; j++) {
//         triangle.innerHTML += '1'
// }
//     triangle.innerHTML += '<br>'
// 

function showtime() {
    var date = new Date();
    var h = date.getHours(); //0-23
    var m = date.getMinutes(); //0-59
    var s = date.getSeconds(); //0-59
    var session = "AM";


if(h == 0){
    h = 12;
}

if(h > 12){
    h = h - 12;
    session = "PM"
}

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" +s : s;

var time = h + ":" + m + ":" + s + " " + session;

document.getElementById("MyClockDisplay").innerText = time;

document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showtime, 1000);

}

showtime();