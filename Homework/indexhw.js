 let foodArr = [
     {name: "Pho", ingredients: ["xuong ong", "hanh kho", "thit bo", "thit ga", "banh pho"], description: "Mot mon an phai thu khi den Viet Nam"},
     {name: "Bun cha", ingredients: ["bun", "thit ba chi", "mam", "duong", "su hao", "ca rot"], description: "Mon an duoc nhieu nguoi nuoc ngoai yeu thich nhat tai Viet Nam"},
     {name: "Bun nem", ingredients: ["Bun", "nem", "giam", "cha","rau thom", "lac"], description: "Mon ma toi an rat nhieu"},
     {name: "bun dau mam tom", ingredients: ["bun", "dau", "doi sun", "cha com", "thit lon", "rau song", "quat", "chanh", "duong", "ot"], description: "Toi se khong an lai mon nay nua"},
     {name: "com cho", ingredients: ["two human beings", "an undying love"], description: "No ma khong beo"},
    ]

let foodString = JSON.stringify(foodArr)
// console.log(foodArr)
localStorage.setItem("VietNamFood", foodString)


let foodData = localStorage.getItem("VietNamFood")
let foodDataArr = JSON.parse(foodData)
console.log(foodDataArr)

let food = document.getElementById("food")
foodDataArr.forEach( dish => {
    food.innerHTML += `
    <div class = "food-info">
    name: ${dish.name}
    <br>
    ingredients: ${dish.ingredients}
    <br>
    description: ${dish.description}
    </div>
    <br>
    `
});

let updateName = function(name){
    
}

let updateIngredients = function(ingredients){
    
}