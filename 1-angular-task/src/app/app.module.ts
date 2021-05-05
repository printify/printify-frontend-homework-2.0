import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlueprintListComponent } from './blueprint-list/blueprint-list.component';
import { BlueprintPageComponent } from './blueprint-page/blueprint-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlueprintListComponent,
    BlueprintPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
