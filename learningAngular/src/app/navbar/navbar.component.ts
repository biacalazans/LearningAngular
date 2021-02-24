import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  openNav() {
    var x: any = document.getElementById('mySidenav');
    var y: any = document.getElementById('myTitle');
    y.style.display = 'none';
    x.style.width = '250px';
  }

  closeNav() {
    var x: any = document.getElementById('mySidenav');
    var y: any = document.getElementById('myTitle');
    x.style.width = '0';
    y.style.display = 'inline';
  }

  ngOnInit(): void {}
}
