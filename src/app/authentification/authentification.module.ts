import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SignaturePadModule } from 'angular2-signaturepad';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification.component';



@NgModule({
  declarations: [
   LoginComponent,
   RegisterComponent,
   AuthentificationComponent,


  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
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
    MatTableModule ,
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
    RouterModule
  ]
})
export class AuthentificationModule { }
