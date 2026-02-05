export class Component {
  constructor(id) {
    //$el = some DOM component
    this.$el = document.getElementById(id);
    this.init();
  }
  //general classes below:
  init() {}

  onShow() {}

  onHide() {}

  hide() {
    this.$el.classList.add('hide');
    this.onHide();
  }

  show() {
    this.$el.classList.remove('hide');
    this.onShow();
  }
}
