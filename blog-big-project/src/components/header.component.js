//goal is to make header disappear on button click 'Start'
import { Component } from '../core/component.js';

//general methods below:
export class HeaderComponent extends Component {
  constructor(id) {
    super(id);
  }

  //init method checks if state visited and applies class hide() to keep header hidden from the existing user
  init() {
    if (localStorage.getItem('visited')) {
      this.hide();
    }
    const btn = this.$el.querySelector('.js-header-start');
    btn.addEventListener('click', buttonHandler.bind(this));
  }
}

//upon button click we indicate current state as visited #1
function buttonHandler() {
  localStorage.setItem('visited', JSON.stringify(true));
  this.hide();
}
