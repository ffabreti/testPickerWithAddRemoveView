
$.index.open();

var pickercontroller = Alloy.createController('pickerview');

//using setTimeout to simulate user interaction

//add pickerview to the container
setTimeout( function() { $.container.add(pickercontroller.getView()) }, 3000);

//if you open, pickerview.js, you will see a setTimeout selecting option 2 on the picker (coconut)


//remove the pickerview from container
setTimeout( function() { $.container.remove(pickercontroller.getView()) }, 9000);

//re-add pickerview into container
setTimeout( function() { $.container.add(pickercontroller.getView()) }, 11000);

//RESULT:  pickerRow was reseted to first option (APPLE)
