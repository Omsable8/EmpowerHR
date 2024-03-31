var mysql = require("mysql2");

function form(){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "company"
    });
    // var empID = document.getElementById("emp_ID").value;
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;
    var q4 = document.getElementById("q4").value;
    var q5 = document.getElementById("q5").value;
    var q6 = document.getElementById("q6").value;
    var q7 = document.getElementById("emp_comments").value;
    con.connect(function(err) {
        if (err) throw err;
        let query = "insert into survey values('name',?,?,?,?,?,?,'?')";
        con.query(query,[q1,q2,q3,q4,q5,q6,q7],function(err){
            if(err) throw err;
            console.log("DONE");
        });
    });
}

function getData() {

    // event.preventDefault(); 
    var empID = document.getElementById("emp_ID").value;
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2").value;
    var q3 = document.getElementById("q3").value;
    var q4 = document.getElementById("q4").value;
    var q5 = document.getElementById("q5").value;
    var q6 = document.getElementById("q6").value;
    var q7 = document.getElementById("emp_comments").value;
    // let userAnswers = {
    //   empID,
    //   q1,
    //   q2,
    //   q3,
    //   q4,
    //   q5,
    //   q6,
    //   q7
    // };
    // console.log(userAnswers);
    // var myArray = userAnswers;
    // localStorage.setItem("myArray", JSON.stringify(myArray));
    return true; 
}