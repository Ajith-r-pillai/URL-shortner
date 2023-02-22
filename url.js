function search(){
    longurl=longurl.value
    // console.log(longurl);
       fetch(`https://api.shrtco.de/v2/shorten?url=${longurl}`).then(data1=>data1.json()).then(data1=>displayUrl(data1))
}
function displayUrl(UrlDetails){
      // result=UrlDetails.ok
      // longurl1=longurl.value
      // if(longurl1==true){
      //   if(result){
      //     error1.innerHTML=" "
      //     error2.innerHTML=" "
          short=UrlDetails.result.short_link
      input1.innerHTML=`<input id="shorturl" type="text"> 
      <button type="submit" onclick="myFunction()"><i class="fa-regular fa-clone"></i></button>`
      document.getElementById("shorturl").value=short
    //   }else{
    //     error1.innerHTML="p>Please Enter The Long URL....</p>"
    //     error2.innerHTML=" "
    //     input1.innerHTML=""
    //   }
    // }else{
    //   error2.innerHTML=" <p> Please Enter The Correct URL....</p>"
    //   error1.innerHTML=" "
    //   input1.innerHTML=""
    // }
  }
     
    
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("shorturl");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the URL: " + copyText.value);
  }



