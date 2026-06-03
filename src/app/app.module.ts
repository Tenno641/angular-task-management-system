import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.components';
import {UserComponent} from './user/user.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgSelectComponent} from '@ng-select/ng-select';
import {TaskModule} from './ticket/task/task.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, NgSelectComponent, TaskModule]
})
export class AppModule {

}
