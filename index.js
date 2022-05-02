/* binds an event listener in addingEventListener():
ReferenceError: addingEventListener is not defined 
expect(input.addEventListener.called).to.be.true


addEventListener() method on the element we want to add the listener to, 
and passing it two arguments:
the name of the event to listen for, and
a callback function to "handle" the event

->grab the element that we want to add the event listener to 
and save a reference to it in variable.
->next call addEventListener() on the element, we pass 2 arguments:
name of event 'click' to listen for, and callback function that will be executed when event is heard
callback will be invoked as soon as the event occurs
*/

//binds an event listener in addingEventListener

//define addingEventListener
function addingEventListener(){
//grab element id to bind to event listener
    const input = document.getElementById('input');
//attach and plug in event 'click', and pass callback func as argument 
 input.addEventListener('click', function(){ 
     alert('click demo'); //action to be carried after click event is listened for 
});
}
