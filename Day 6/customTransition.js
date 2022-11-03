const app3 = document.getElementById("app3");//importing app3 div

window.addEventListener('click',function(event){ // adding click listener
  const {clientX,clientY} = event; // what will be the event? event will catching x and y axis of mouse click on the screen. 
  app3.style.transform = `translate(${clientX-50}px,${clientY-50}px)` //usig axis to implement transform in css.
});