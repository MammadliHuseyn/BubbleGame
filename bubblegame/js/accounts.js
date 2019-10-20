let accounts = [
    {
        username:"huseyn",
        password:12345,
    },
    {
        username:"nurlan",
        password:12345,
    },
    {
        username:"memmed",
        password:12345,
    }
]

document.getElementById("login-btn").addEventListener('click', function (e) {
    e.preventDefault();
})

document.getElementById('login-btn').addEventListener('click',()=>{
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    for(let f of accounts){
        if(f.username==username && f.password==password){
            location.href = "bubbleGame.html"
        }
        
    }
})

