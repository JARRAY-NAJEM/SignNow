import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SignaturePadModule } from 'angular2-signaturepad';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationComponent } from './home/application/application.component';
import { MatRippleModule } from '@angular/material/core';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { FooterPComponent } from './home/footer-p/footer-p.component';
import { HomePComponent } from './home/home-p/home-p.component';
import { HomePcontentComponent } from './home/home-pcontent/home-pcontent.component';
import { MapComponent } from './home/map/map.component';
import { ServeurComponent } from './home/serveur/serveur.component';
import { TarifsComponent } from './home/tarifs/tarifs.component';
import { ToolbarPComponent } from './home/toolbar-p/toolbar-p.component';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    HomePComponent,
    FooterPComponent,
    TarifsComponent,
    ApplicationComponent,
    ToolbarPComponent,
    HomePcontentComponent,
    ServeurComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatTableModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    NgxMatFileInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    SignaturePadModule,
    NgxIntlTelInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatMenuModule,
    MatRippleModule,
    MatPaginatorModule,
    MatGridListModule,
 //   HttpClientInMemoryWebApiModule,

  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
