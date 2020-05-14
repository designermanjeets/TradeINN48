import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FIS - TradeINN48';
  currentVal: number;
  expectedVal: number;
  value = 0;

  ngOnInit(): void {
    this.currentVal = 100;
    this.expectedVal = 105;
  }

  decrement(e) {
    e.stopPropagation();
    --this.value;
  }

  increment(e) {
    e.stopPropagation();
    ++this.value;
  }
}
