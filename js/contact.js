

const site_key = window.keys.SITE_KEY; //site key
const secret = window.keys.SECRET; //secret key

const captcha_container = document.querySelector(".h-captcha");  //get the hcaptcha div container
captcha_container.attributes[1].value = site_key; //add the site key attribute value


async function validate(e){

    
    //getting the hidden token for user solved captchas
    const captcha_token = document.querySelector("[name = 'h-captcha-response']");
    const garbage_token = document.querySelector("[name = 'g-recaptcha-response']")
     
    
    const error_captcha = document.querySelector(".error-captcha");

    e.preventDefault() //stop the default submit of the form and page refresh

    if(!captcha_token.value)
    {
         //user hasen't submitted captcha yet 
        error_captcha.classList.add("active");
    }
    else
    {
        const headers = new Headers();
        //custom request headers
        headers.append("Content-Type","application/x-www-form-urlencoded");
        headers.append('Accept', 'application/json');
        
        try{
            // sending the endpoint through a proxy to fix the CORS issue
            const res = await fetch(`https://cors-proxy-3434.herokuapp.com/https://hcaptcha.com/siteverify`, 
            {   method: "POST", 
                mode:"cors",
                 headers:headers,
                body: `response=${captcha_token.value}&secret=${secret}` 
            }) //post method for captcha result (success or fail)

            const json_data = await res.json();
            if(json_data.success)
            {
                //if captcha was successful then submit this form through API
              
                e.target.action = "https://formsubmit.co/kadariprathima4@gmail.com";
             
            }
            else
            {
                console.log("Captcha failed");
            }
            
        }
        catch(e)
        {
            console.log(e.message);
        }

        //remove all those hidden tokens from HTML
        garbage_token.remove();
        captcha_token.remove();
        error_captcha.classList.remove("active");

        //re-submit the form
        e.target.submit();
  
    }
}
