const event = {
  name: 'Birthday Party',
  guestList: ['Vadym', 'Bailey', 'Tony'],
  printGuestList: function () {
    //if it was arrow function: << printGuestlist: () => console.log('Guest list for ' + this.name); >> 'this' would be undefined
    //const that = this; // workaround: binding this to that for future use
    console.log('Guest list for ' + this.name);

    this.guestList.forEach((guest) => {
      //arrow function is taking
      console.log(guest + ' is attending ' + this.name); // arrow functions don't bind their own 'this' value, they access to it through the context they are created in. (in our case 'this' = const 'event')
    });
  },
};
event.printGuestList();
