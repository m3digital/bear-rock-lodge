import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public today = new Date();
  public currentYear = this.today.getFullYear()

  constructor() { }

  ngOnInit() {
  }

}
