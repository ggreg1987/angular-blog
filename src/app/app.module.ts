import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PictureCardComponent } from './components/picture-card/picture-card.component';
import { TextCardComponent } from './components/left-card/left-card.component';
import { RightCardComponent } from './components/right-card/right-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PictureCardComponent,
    TextCardComponent,
    RightCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
