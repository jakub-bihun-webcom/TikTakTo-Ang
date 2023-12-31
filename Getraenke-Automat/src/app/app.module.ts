import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeverageListComponent } from './beverage-list/beverage-list.component';
import { HeaderComponent } from './header/header.component';
import { CustomerControlPanelComponent } from './customer-control-panel/customer-control-panel.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { CustomerOutputComponent } from './output-customer/customer-output.component';

@NgModule({
  declarations: [
    AppComponent,
    BeverageListComponent,
    CustomerControlPanelComponent,
    MessageDisplayComponent,
    CustomerOutputComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
