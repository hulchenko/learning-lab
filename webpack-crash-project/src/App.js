import React from 'react';
import $ from 'jquery';

export default class App extends React.Component {
  componentDidMount() {
    $('<h1 />')
      .text('Hello World from JQuery!')
      .css({
        textAlign: 'center',
        color: '#2020c1',
      })
      .appendTo($('header'));
  }
  render() {
    return (
      <React.Fragment>
        <header></header>

        <hr />

        <div className="box">
          <h2 className="box-title">Box title</h2>

          <p className="box-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            ipsam laborum consequuntur amet similique, natus esse dolores neque
            voluptas veniam.
          </p>
        </div>
      </React.Fragment>
    );
  }
}
