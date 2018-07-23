import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductModule} from './product/product.module';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ErrorComponent} from './error/error.component';
import {appRoutes} from './app.routes';


@NgModule({
  //registeration of the component must be in the declarations part only
  //1.component/2.directive/3.pipe
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    ProductModule,
    RouterModule.forRoot(appRoutes)
  ],
  //only services to be mentioned here
  providers: [],
  //to  load this component as the first component in the browser
  bootstrap: [AppComponent]
})
export class AppModule { }
