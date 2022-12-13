
var timerID = setInterval(function() {
     if(document.querySelector('._1qfi0x77.pii-hide')){
        document.querySelector('._1qfi0x77.pii-hide').remove();
        
     }else{
        console.log('not found!');
     }
 },  5000);    


var oldText="";
var textInterval = setInterval(function() {
     var msg = new SpeechSynthesisUtterance();
     msg.text = text = window.getSelection().toString();
  
     if(oldText!==msg.text){
     oldText=msg.text;
     window.speechSynthesis.speak(msg);
     msg.text="";
     }
},  2000);  
