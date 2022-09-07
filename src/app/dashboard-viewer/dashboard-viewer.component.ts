import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-dashboard-viewer',
  templateUrl: './dashboard-viewer.component.html',
  styleUrls: ['./dashboard-viewer.component.scss']
})
export class DashboardViewerComponent implements AfterViewInit
{
  @ViewChild('revealView') el!: ElementRef;
  private revealView: any;

  constructor(private route: ActivatedRoute){}

ngAfterViewInit(): void {
  let id = this.route.snapshot.paramMap.get('id');
  console.log(id);
  
  $.ig.RevealSdkSettings.setBaseUrl('https://samples.revealbi.io/upmedia-backend/reveal-api/');
    $.ig.RevealSdkSettings.enableNewCharts='true'
    $.ig.RevealSdkSettings.ensureFontsLoadedAsync().then(() => {
        $.ig.RVDashboard.loadDashboard(id, (dashboard: any) => {
        this.revealView = new $.ig.RevealView(this.el.nativeElement);
        this.revealView.dashboard = dashboard;
    });
  });
}
  
}