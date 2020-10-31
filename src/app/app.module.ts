import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilesizePipe, EmptyPipe } from '@app/pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { DishComponent } from './dish/dish.component';
import { CountryComponent } from './country/country.component';
import { CountryButtonPipe } from './pipes/country-button.pipe';
import { MenuMessagePipe } from './pipes/menu-message.pipe';
import { SpicyMessagePipe } from './pipes/spicy-message.pipe';
import { SpicyColorPipe } from './pipes/spicy-color.pipe';
import { BoxShadowDirective } from './directives/box-shadow.directive';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './country/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrderComponent,
    DishComponent,
    CountryComponent,
    FilesizePipe,
    EmptyPipe,
    CountryButtonPipe,
    MenuMessagePipe,
    SpicyMessagePipe,
    SpicyColorPipe,
    BoxShadowDirective,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
