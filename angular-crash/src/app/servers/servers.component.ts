import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = `Server hasn't been created`;
  serverName = '';
  username = '';
  servers = ['Testserver', 'Testserver 2'];
  secretPassword = false;
  clicks = [];
  item = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server name is ${this.serverName}`;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
    console.log(`THIS: `, this);
    console.log(`SERVER NAME: `, this.serverName);
  }

  onUpdateUsername(event) {
    this.username = event.target.value;
  }

  showSecretPassword() {
    this.secretPassword === true
      ? (this.secretPassword = false)
      : (this.secretPassword = true);
    this.item += 1;
    this.clicks.push(
      `Timestamp: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}, click(s): ${
        this.item
      }`
    );
  }

  getColor() {
    return this.item >= 5 ? 'blue' : 'white';
  }
}
