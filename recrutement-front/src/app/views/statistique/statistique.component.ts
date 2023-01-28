import {Component, OnInit} from '@angular/core';
import {StatService} from '../../shared/services/stat.service';

@Component({
  selector: 'app-statistique', templateUrl: './statistique.component.html', styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {
  topCompany: any;
  topCandidature: any;
  offreCandidature: any;
  basicOptions = {
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 1, beginAtZero: true
        }
      }]
    }
  };

  constructor(private statService: StatService) {
  }

  ngOnInit(): void {
    this.getTopCompany();
    this.getTopCandidature();
    this.offreCandidatureByMonth();
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

  offreCandidatureByMonth(): void {
    this.statService.offreCandidatureByMonth().subscribe(res => {
      this.offreCandidature = {
        labels: res.labels, datasets: [

          {
            type: 'line', label: 'En attente', borderColor: '#82858c', borderWidth: 2, fill: false, data: res.values3
          }, {
            type: 'line', label: 'Acceptée', borderColor: '#66BB6A', borderWidth: 2, fill: false, data: res.values4
          }, {
            type: 'line', label: 'Refusée', borderColor: '#EC407A', borderWidth: 2, fill: false, data: res.values5
          }, {
            type: 'bar', label: 'Offre', backgroundColor: '#0a71f6', data: res.values, borderColor: 'white', borderWidth: 2
          }, {
            type: 'bar', label: 'Candidature', backgroundColor: '#FFA726', data: res.values2
          }]
      };
    }, ex => console.log(ex));
  }
}
