import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { ClientService } from './service/client.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormComponent } from './clients/form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DetailsComponent } from './clients/details.component';
import { LoginComponent } from './user/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './user/register.component';
import { DetailsInvoiceComponent } from './invoice/details-invoice.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientsComponent,
    ErrorPageComponent,
    FormComponent,
    DetailsComponent,
    LoginComponent,
    RegisterComponent,
    DetailsInvoiceComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDatepickerModule,



  ],
  providers: [ClientService, { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
