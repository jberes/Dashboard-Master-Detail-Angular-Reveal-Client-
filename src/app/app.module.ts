import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxIconModule, IgxNavbarModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { DashboardViewerComponent } from './dashboard-viewer/dashboard-viewer.component';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardsComponent,
    DashboardViewerComponent,
    DashboardListComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxListModule,
    IgxIconModule,
    IgxNavbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
