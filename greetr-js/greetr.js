(function (global, $) {
  var Greetr = function (firstname, lastname, language) {
    //function constructor to generate the object
    return new Greetr.init(firstname, lastname, language);
  };

  var lang = ['en', 'fr', 'ru'];

  var greetings = {
    en: 'Hi',
    fr: 'Salut',
    ru: 'Привет',
  };

  var formalGreetings = {
    en: 'Hello',
    fr: 'Bonjour',
    ru: 'Здравствуйте',
  };

  var logMessages = {
    en: 'Welcome,',
    fr: 'Bienvenu(e),',
    ru: 'Добро пожаловать,',
  };

  // prototype holds methods
  Greetr.prototype = {
    fullName: function () {
      return this.firstname + ' ' + this.lastname;
    },
    // 'this' refers to the calling object at execution time
    validate: function () {
      // check that is a valid language
      if (!lang.includes(this.language)) {
        throw 'Language is not supported!';
      }
    },
    greeting: function () {
      return greetings[this.language] + ', ' + this.firstname;
    },

    greetingFormal: function () {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    greet: function (formal) {
      var msg;
      //if false - then non-formal
      if (formal) {
        msg = this.greetingFormal();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }
      // chainable method returns its own containing object
      return this;
    },
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ' ' + this.fullName() + '!');
      }
      return this;
    },
    setLang: function (i) {
      this.language = i;
      this.validate();
      return this;
    },
    onScreenGreeting: function (selector, formal) {
      if (!$) {
        throw 'jQuery is not working';
      }
      if (!selector) {
        throw 'Missing jQuery selector';
      }
      var msg;
      if (formal) {
        msg = this.greetingFormal();
      } else {
        msg = this.greeting;
      }
      $(selector).html(msg);
      return this;
    },
  };

  Greetr.init = function (firstname, lastname, language) {
    var self = this; //precautionary measure, to ensure this is same and does not point to the global window object
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';

    self.validate();
  };
  //jQuery trick so we don't have to use the 'new' keyword
  Greetr.init.prototype = Greetr.prototype;
  // attach our Greetr to the global object, and provide a shorthand '$G'
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
