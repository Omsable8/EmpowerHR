
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('surveyForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            // var empID = document.getElementById("emp_ID").value;
            var q1 = parseInt(document.getElementById("q1").value);
            var q2 = parseInt(document.getElementById("q2").value);
            var q3 = parseInt(document.getElementById("q3").value);
            var q4 = parseInt(document.getElementById("q4").value);
            var q5 = parseInt(document.getElementById("q5").value);
            var q6 = parseInt(document.getElementById("q6").value);
            var q7 = document.getElementById("emp_comments").value;
            
            // Send the form data to the server
            fetch('http://localhost:3000/submit-survey', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ q1, q2, q3, q4, q5, q6, q7 }),
            })
            .then(response => response.json())
            .then(data => console.log(JSON.stringify(data)))
            .catch((error) => {
                console.error('Error:', error);
            });
        });
    } 
    else {
        console.error('Form element not found');
    }
});


function to_dash(){
    window.location.href = "edash.html";
}
function emp_login() {
    let epass = document.getElementById("emp_pass").value;
    let eemail = document.getElementById("emp_email").value;
    let loginbtn = document.getElementById("loginbtn");
    let signinbtn = document.getElementById("signinbtn");
    let namefield = document.getElementById("namefield");
    let title = document.getElementById("title").textContent;
    let t = document.getElementById("title");
    let login_status = document.getElementById("login");
    namefield.style.maxHeight = "0";
    signinbtn.classList.add("disable");
    loginbtn.classList.remove("disable");

    if(title === "Sign Up"){
        t.innerHTML = "Log In";
    }
    else{
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: eemail, password: epass }),
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');

            }
            return response.json()})
        .then(data => {
            console.log('Data:', data);
            if (data.success) {
                window.location.href = "survey.html";
                console.log("LOGGED IN");
            } else {
                console.log("Invalid credentials");
                login_status.innerHTML = "INVALID USERNAME OR PASSWORD";

            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

}



function emp_sign(){
    let loginbtn = document.getElementById("loginbtn");
    let signinbtn = document.getElementById("signinbtn");
    let namefield = document.getElementById("namefield");
    let t = document.getElementById("title");
    let title = document.getElementById("title").textContent;
    namefield.style.maxHeight = "60px";
    let epass = document.getElementById("emp_pass").value;
    let eemail = document.getElementById("emp_email").value;
    let ename = document.getElementById("emp_name").value;
    let login_status = document.getElementById("login");

    signinbtn.classList.remove("disable");
    loginbtn.classList.add("disable");
    if(title === "Log In"){
        t.innerHTML = "Sign Up";
    }
    else{   
        fetch('/esignup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:ename, email: eemail, password: epass }),
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');

            }
            return response.json()})
        .then(data => {
            console.log('Data:', data);
            if (data.success) {
                console.log("SIGNED IN");
                login_status.innerHTML = "Account Created";
            } else {
                console.log("Invalid credentials");
                // login_status.innerHTML = "INVALID USERNAME OR PASSWORD";

            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

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
    let hemail = document.getElementById("hr_email").value;
    let hpass = document.getElementById("hr_pass").value;
    let login_status = document.getElementById("hrlogin");
    if(title2 === "Sign Up"){
        t.innerHTML = "Log In";
    }
    else{
        fetch('/hrlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: hemail, password: hpass }),
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');

            }
            return response.json()})
        .then(data => {
            console.log('Data:', data);
            if (data.success) {
                window.location.href = "hrdashboard.html";
                console.log("LOGGED IN");
            } else {
                console.log("Invalid credentials");
                login_status.innerHTML = "INVALID USERNAME OR PASSWORD";

            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
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
        fetch('/hrsignup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:ename, email: eemail, password: epass }),
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Network response was not ok');

            }
            return response.json()})
        .then(data => {
            console.log('Data:', data);
            if (data.success) {
                console.log("SIGNED IN");
                login_status.innerHTML = "Account Created";
            } else {
                console.log("Invalid credentials");
                // login_status.innerHTML = "INVALID USERNAME OR PASSWORD";

            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}


//survey response

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/get-survey-responses')
    .then(response => response.json())
    .then(data => {
        const tbody = document.getElementById('surveyResponsesTable').getElementsByTagName('tbody')[0];
        data.forEach(response => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${response.name}</td>
                <td>${response.job_inv}</td>
                <td>${response.job_sat}</td>
                <td>${response.env_sat}</td>
                <td>${response.rel_sat}</td>
                <td>${response.balance}</td>
                <td>${response.overtime}</td>
                <td>${response.other}</td>
            `;
            tbody.appendChild(tr);
        });
    })
    .catch(error => console.error('Error fetching survey responses:', error));
});

