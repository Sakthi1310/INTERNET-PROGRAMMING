 // Get the "Register" button by its Class Name
    var regbtn1 = document.getElementsByClassName("register-link");

    // Add a click event listener to the button
    regbtn1.addEventListener("click", function() {
// Redirect to the desired page when the button is clicked
        window.location.href = "Signup.html";
    });
    function login(){
        var form=document.getElementById('login');
        var formData=new FormData(form);
        console.log('Form Data:');
        formData.forEach((value,key)=>{
            console.log(key +':'+value);
        });
        window.location.href='home.html';
    }