import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TradeINN48';
  currentVal: number;
  expectedVal: number;

  ngOnInit(): void {
    this.currentVal = 100;
    this.expectedVal = 105;
  }
}
