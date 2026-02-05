import React from 'react';
import { render } from 'react-dom'; //render is a method
import AppService from './modules/app.service.js'; // '.js' extension is unnecessary, however all other files have to have their extensions.
import { config } from './modules/config';
import App from './App.js';
import './modules/ts.module';
import './css/index.css';
import './less/index.less';
import './scss/index.scss';

console.log('Config key', config.key);

const service = new AppService('Hello World!');
service.log();

render(<App />, document.getElementById('app'));
