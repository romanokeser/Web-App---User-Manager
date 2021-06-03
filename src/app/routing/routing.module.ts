import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddClassComponent} from '../class/add-class/add-class.component'
import { EditClassComponent } from '../class/edit-class/edit-class.component';
import { ClassListComponent } from '../class/class-list/class-list.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent},
  { path: 'class', component: AddClassComponent},
  { path: 'dashboard', component:  DashboardComponent,
    children: [{ path:  'editclass:id', component:  EditClassComponent
  }]},
  { path: 'editclass', component: EditClassComponent }
  
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes ,{onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }