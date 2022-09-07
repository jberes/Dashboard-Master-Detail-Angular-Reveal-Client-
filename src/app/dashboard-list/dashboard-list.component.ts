import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { RevealDashboardsListService } from '../services/reveal-dashboards-list.service';

declare let $: any;

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {
  public revealDashboardsListDashboards: any = null;
@ViewChild('revealView') el!: ElementRef;
private revealView: any;
  constructor(
    private revealDashboardsListService: RevealDashboardsListService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.revealDashboardsListService.getDashboards().subscribe
      (data => this.revealDashboardsListDashboards = data);
  }
  public onItemClicked(item: any)
  {
    $.ig.RevealSdkSettings.setBaseUrl('https://samples.revealbi.io/upmedia-backend/reveal-api/');
    $.ig.RevealSdkSettings.enableNewCharts='true'
    $.ig.RevealSdkSettings.ensureFontsLoadedAsync().then(() => {
        $.ig.RVDashboard.loadDashboard(item.Title, (dashboard: any) => {
        this.revealView = new $.ig.RevealView(this.el.nativeElement);
        this.revealView.dashboard = dashboard;
    });
  });
  }
}
