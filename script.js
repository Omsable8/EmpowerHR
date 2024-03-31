
employee = {pass:"1234", email:"aman@gmail.com"}
hr = {email:"om@gmail.com",pass:"1234"}
function emp_sign(){
    let loginbtn = document.getElementById("loginbtn");
    let signinbtn = document.getElementById("signinbtn");
    let namefield = document.getElementById("namefield");
    let t = document.getElementById("title");
    let title = document.getElementById("title").textContent;
    namefield.style.maxHeight = "60px";

    signinbtn.classList.remove("disable");
    loginbtn.classList.add("disable");
    if(title === "Log In"){
        t.innerHTML = "Sign Up";
    }
    else{   


    }

}
function emp_login(){
    let loginbtn = document.getElementById("loginbtn");
    let signinbtn = document.getElementById("signinbtn");
    let namefield = document.getElementById("namefield");
    let title = document.getElementById("title").textContent;
    let t = document.getElementById("title");
    namefield.style.maxHeight = "0";
    signinbtn.classList.add("disable");
    loginbtn.classList.remove("disable");
    
    if(title === "Sign Up"){
        t.innerHTML = "Log In";
    }
    else{
        let epass = document.getElementById("emp_pass").value;
        let eemail = document.getElementById("emp_email").value;
        if(employee.email === eemail && employee.pass === epass){
            window.location.href = "survey.html";
            console.log("LOGGED IN");
            
        }
    }
}

function hr_login(){
        
    let loginbtn2 = document.getElementById("loginbtn2");
    let signinbtn2 = document.getElementById("signinbtn2");
    let namefield2 = document.getElementById("namefield2");
    let t = document.getElementById("title2");
    let title2 = document.getElementById("title2").textContent;
    namefield2.style.maxHeight = "0";
    signinbtn2.classList.add("disable");
    loginbtn2.classList.remove("disable");
    if(title2 === "Sign Up"){
        t.innerHTML = "Log In";
    }
    else{
        // let epass = document.getElementById("emp_pass").value;
        // let eemail = document.getElementById("emp_email").value;
        // if(employee.email === eemail && employee.pass === epass){
        //     // window.location.href = "survey.html";
        //     console.log("LOGGED IN");
            
        // }
    }
}
function hr_sign(){
    
    let loginbtn2 = document.getElementById("loginbtn2");
    let signinbtn2 = document.getElementById("signinbtn2");
    let namefield2 = document.getElementById("namefield2");
    let t = document.getElementById("title2");
    let title2 = document.getElementById("title2").textContent;
    namefield2.style.maxHeight = "60px";
    signinbtn2.classList.remove("disable");
    loginbtn2.classList.add("disable");
    if(title2 === "Log In"){
        t.innerHTML = "Sign Up";
    }
    else{   

    }
}



function add(){
    
    let epass = document.getElementById("emp_pass").value;
    let eemail = document.getElementById("emp_email").value;

    var mysql = require("mysql2");
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "company"
    });
    con.connect(function(err) {
        if (err) throw err;
        let query = "select * from emp_login where email = "+eemail +" and password = "+epass +" ;";
        con.query(query,function(err){
            if(err) throw err;
            window.location.href = "survey.html";
            console.log("DONE");
        });
    });
}




