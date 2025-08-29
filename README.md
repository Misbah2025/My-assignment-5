1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   Answer: getElementById returns a single element and it works as an element "id".
    getElementsByClassName returns a live HTML collection like array and it works as a "class".
   querySelector accepts any valid css selector and it returns the first matching element.
   querySelectorAll returns a static NodeList of all matching elements.

   2. How do you **create and insert a new element into the DOM**?
   Answer:-First of all I have to create the element using document.createElement()
Secondly ,I have to set its content or attributes (like textContent, className, etc.
Finally , Insert it into the DOM using methods like appendChild(), prepend(), or insertBefore()

  3.What is **Event Bubbling** and how does it work?
  Answer:
Event bubbling is the default mechanism in a browser's Document Object Model (DOM) where an event, like a click, first triggers on the innermost element 
then "bubbles up" through its parent and ancestor elements until it reaches the root of the DOM tree.
first of all i click a button inside a tree then child click after that parent clicked-beacuse the event bubble up to the parent like the example
<div id="parent">
  <button id="child">Click Me</button>
</div>
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

4.What is **Event Delegation** in JavaScript? Why is it useful?
Answer:Event Delegation is a technique where I can  attach a single event listener to a parent element, and handle events triggered by its child elements using event bubbling.
it is useful because it works for dynamic UI like dynamic element,it is faster and more memory efficient code and also it's easy to maintain code.

5.What is the difference between **preventDefault() and stopPropagation()** methods?
Answer:preventDefault() prevents the browser’s default behavior for an event but stopPropagation() stops the event from bubbling up to parent elements.
 stopPropagation() can stop bubbling but preventDefault() can't stop bubbling.





 
   
   
   
