import { Component, OnInit } from '@angular/core';
import {StatService} from '../../shared/services/stat.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  counts: any;
  constructor(private statService: StatService) { }

  ngOnInit(): void {
    this.getCount();
  }

  getCount(): void {
    this.statService.count().subscribe(data => {
      this.counts = data;
    }, ex => console.log(ex));
  }
}
