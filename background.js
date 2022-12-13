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
