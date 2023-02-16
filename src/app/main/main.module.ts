import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { AcheterComponent } from './acheter/acheter.component';
import { ChangerComponent } from './changer/changer.component';
import { ConditionComponent } from './condition/condition.component';

import { GenererComponent } from './generer/generer.component';
import { ProfilComponent } from './profil/profil.component';
import { SavemodalComponent } from './savemodal/savemodal.component';
import { SignatureComponent } from './signature/signature.component';
import { SignerComponent } from './signer/signer.component';
import { SupportComponent } from './support/support.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
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
import { MainComponent } from './main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    MainComponent,
    TransactionsComponent,
    ProfilComponent,
    SupportComponent,
    ChangerComponent,
    SignatureComponent,
    SignerComponent,
    AcheterComponent,
    ConditionComponent,
    SavemodalComponent,
    GenererComponent,

    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
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
    MatRippleModule
  ]
})
export class MainModule { }
