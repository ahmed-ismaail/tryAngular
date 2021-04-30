import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-testing-list',
  templateUrl: './testing-list.component.html',
  styleUrls: ['./testing-list.component.scss']
})
export class TestingListComponent implements OnInit {

  brews: Object = '';

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getBear().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    }
  );
  }

}
