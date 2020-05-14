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
  model = { value: 0 };

  ngOnInit(): void {
    this.currentVal = 100;
    this.expectedVal = 105;
  }

  decrement() {
    --this.model.value;
  }

  increment() {
    ++this.model.value;
  }
}
