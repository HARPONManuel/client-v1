import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyProfileComponent } from '../my-profile/my-profile.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { DashboardService } from './services/dashboard.service';

@NgModule({
  declarations: [
    DashboardComponent,
    MyProfileComponent,
    AboutComponent,
    ProjectComponent
  ],
  imports: [ CommonModule ],
  exports: [ DashboardComponent, MyProfileComponent, AboutComponent, ProjectComponent ],
  providers: [ DashboardService ]
})
export class AdminModule
{
}
