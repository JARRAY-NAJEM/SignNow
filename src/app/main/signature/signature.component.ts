import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignaturePad } from 'angular2-signaturepad';

import { SavemodalComponent } from '../savemodal/savemodal.component';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
 click = false
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
  signatureImg: string | undefined;
  @ViewChild(SignaturePad) signaturePad: SignaturePad | undefined;

  signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 500,
    'canvasHeight':250,
  };
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad?.set('minWidth', 2);
    this.signaturePad?.clear();
  }
  drawComplete() {
    console.log(this.signaturePad?.toDataURL());
  }
  drawStart() {
    console.log('begin drawing');
  }
  clearSignature() {
    this.signaturePad?.clear();
  }
  savePad() {
    const base64Data = this.signaturePad?.toDataURL();
    this.signatureImg = base64Data;
    const dialogRef = this.dialog.open(SavemodalComponent);
  }
//   refresh(): void {
//     window.location.reload();
// }


}
