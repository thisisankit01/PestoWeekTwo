const result = document.getElementById("result");

window.addEventListener("click",(event)=>{ // initialized click event 
  event.stopPropagation(); //The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.
  const styles = getComputedStyle(event.target); // getComputedStyle() method returns an object containing the values of all CSS properties of an element
  const str = `<div> font-size: ${styles.fontSize} 
  width: ${styles.width};
  height : ${styles.height};
  </div>`; // returns font size , width and height of every element .
  result.innerHTML = str; //innerHTML is a property of every element
});


//percentage(%) = a length is set in ercent is based on the length of same property of parent element.
//em- relative unit- 1em is by default equals to parent size.
//viewport: vw and vh: 
          //vw: 1 vw is 1% width of your entire screen.
                 //vh: 1 vw is 1% height of your entire screen.
//vmin: the value will be smaller at the moment vw or vh.
//vmax: the value will be greater at the moment vw or vh.