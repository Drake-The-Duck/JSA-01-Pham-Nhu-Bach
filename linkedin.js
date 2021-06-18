let accounts = [
    {
        Email: "abcd@gmail.com",
        Phone: "09 12 345 678",
        Password: "qwertyuiop",
        Username: "Anonymous1"
    },
    {
        Email: "efgh@gmail.com",
        Phone: "09 23 456 789",
        Password: "qwertyuiop",
        Username: "Anonymous2"
    },
    {
        Email: "iklm@gmail.com",
        Phone: "09 34 567 890",
        Password: "qwertyuiop",
        Username: "Anonymous3"
    },
]
localStorage.setItem("UserAccounts", JSON.stringify(accounts))

let formSignIn = document.querySelector('form')
formSignIn.addEventListener("submit", (ev) => {
    ev.preventDefault()
    let e = accounts.find(account => account.Email == formSignIn.email.value)
    // console.log(e)
    if (e == undefined){
        document.getElementById("pass").innerHTML += "Incorrect Email or password, please try again"
    }
    else if(formSignIn.password.value == e.Password){
        window.location.href = "https://www.youtube.com"
    } else {
        document.getElementById("pass").innerHTML += "Incorrect Email or password, please try again"
    }
    document.querySelector("form").reset()
})

// console.log (formSignIn.email.value)
// console.log (formSignIn.password.value)