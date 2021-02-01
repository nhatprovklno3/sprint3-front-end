import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SubscribeThesisComponent} from './subscribe-thesis/subscribe/subscribe-thesis.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ViewThesisComponent} from './subscribe-thesis/view-thesis/view-thesis.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotificationSubscribeComponent} from './subscribe-thesis/notification-subscribe/notification-subscribe.component';
import {ListInstructorComponent} from './mai-htq/list-instructor/list-instructor.component';
import {DetailTeacherComponent} from './mai-htq/detail-teacher/detail-teacher.component';
import {NotificationTeacherComponent} from './mai-htq/notification/notification-teacher.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { MessageStudentComponent } from './message-student/message-student.component';

export const routes: Routes = [
  {
    path: 'student',
    children: [
      // {path: 'test', component: TestStudentComponent},
      {path: 'subscribe/:idStudent', component: SubscribeThesisComponent},
      {path: 'list-instructor/:idStudent', component: ListInstructorComponent},
      {path: 'student-list', component: ListStudentComponent},
    ]
  },
];

@NgModule({
  declarations: [SubscribeThesisComponent, ViewThesisComponent, NotificationSubscribeComponent,
    ListInstructorComponent, DetailTeacherComponent, NotificationTeacherComponent,
    AddStudentComponent, MessageStudentComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxPaginationModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  entryComponents: [ViewThesisComponent, NotificationSubscribeComponent]
})
export class AppRoutingStudentModule {
}
