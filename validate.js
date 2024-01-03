var popovr=document.querySelector(".ovrlay")
var popbox=document.querySelector(".popup")
const spanchange=document.getElementById("changes");

function validates(){
    
    const spanh5=document.getElementById("h5");
    const emailstext=document.getElementById("emailsin");
   //var regx=/^([a-z0-9\.-]+)@([a-z0-9+]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var regx = /^([a-z0-9\.-]+)@gmail\.com$/i;
    
    if(regx.test(emailstext.value)){
        sendemail()
        function sendemail(){

            var email=document.getElementById("emailsin").value;
            var message="Thank You for subscribtion";
        
            var templateParams = {
                email: email,
                message: message
              };
        
              emailjs.send('service_1dpudxk', 'template_1qp66qh', templateParams)
          .then(function(response) {
             console.log('SUCCESS!', response.status, response.text);
             
          })    
        }
        popbox.style.display="block"
        popovr.style.display="block"
        spanchange.innerHTML=emailstext.value
        emailstext.value = "";
        emailstext.style.boxSizing="border-box"
        emailstext.style.paddingLeft="20px";
        emailstext.style.color = "hsl(234, 29%, 20%)";
        emailstext.style.fontFamily="'Roboto', sans-serif"
        spanchange.style.fontWeight="700"
        emailstext.style.width="94%"
        
    } else {
        
        spanh5.innerHTML="Valid email required";
        spanh5.style.visibility="visible";

        spanh5.style.color="Tomato";
        emailstext.style.backgroundColor = "rgba(255, 99, 71, 0.3)"
        emailstext.style.color = "Tomato";
        emailstext.style.paddingLeft="20px";
        emailstext.style.borderColor="Tomato"
        emailstext.style.boxSizing="border-box"
        emailstext.style.width="94%"
    }
}
function dismiss(){
    popbox.style.display="none"
    popovr.style.display="none"
    emailstext.style.boxSizing="border-box"
    
    
}