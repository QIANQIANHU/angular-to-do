import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';//why add this two
import { FormsModule }  from '@angular/forms';//add form need to add this line


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule//and this is for import form, remeber add coma
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
