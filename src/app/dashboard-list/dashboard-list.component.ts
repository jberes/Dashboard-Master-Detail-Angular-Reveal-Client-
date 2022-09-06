import { Component, OnInit } from '@angular/core';
import { RevealDashboardsListService } from '../services/reveal-dashboards-list.service';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {
  public revealDashboardsListDashboards: any = null;

  constructor(
    private revealDashboardsListService: RevealDashboardsListService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.revealDashboardsListService.getDashboards().subscribe(data => this.revealDashboardsListDashboards = data);
  }
}
