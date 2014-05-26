
$.index.open();

var pickercontroller = Alloy.createController('pickerview');

setTimeout( function() { $.container.add(pickercontroller.getView()) }, 3000);


setTimeout( function() { $.container.remove(pickercontroller.getView()) }, 9000);

setTimeout( function() { $.container.add(pickercontroller.getView()) }, 11000);

