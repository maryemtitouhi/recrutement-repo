import {Component, OnInit} from '@angular/core';
import {StatService} from '../../shared/services/stat.service';

@Component({
  selector: 'app-statistique', templateUrl: './statistique.component.html', styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {
  topCompany: any;
  topCandidature: any;

  constructor(private statService: StatService) {
  }

  ngOnInit(): void {
    this.getTopCompany();
    this.getTopCandidature();
  }

  getTopCompany(): void {
    this.statService.topCompany().subscribe(res => {
      this.topCompany = {
        labels: res.labels, datasets: [{
          data: res.values,
          backgroundColor: ['#EC407A', '#AB47BC', '#42A5F5', '#7E57C2', '#66BB6A'],
          hoverBackgroundColor: ['#EC407A', '#AB47BC', '#42A5F5', '#7E57C2', '#66BB6A']
        }]
      };
    }, ex => {
      console.log(ex);
    });
  }

  getTopCandidature(): void {
    this.statService.topCandidature().subscribe(res => {
      this.topCandidature = {
        labels: res.labels, datasets: [{
          data: res.values,
          backgroundColor: ['#EC407A', '#AB47BC', '#42A5F5', '#7E57C2', '#66BB6A'],
          hoverBackgroundColor: ['#EC407A', '#AB47BC', '#42A5F5', '#7E57C2', '#66BB6A']
        }]
      };
    }, ex => {
      console.log(ex);
    });
  }
}
