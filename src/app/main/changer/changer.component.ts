import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-changer',
  templateUrl: './changer.component.html',
  styleUrls: ['./changer.component.css'],
})
export class ChangerComponent implements OnInit {
  hide = true;
  hidex = true;
  myFormChanger: any;

  condition =
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}';
  constructor(private formbuilder: FormBuilder) {
    this.myFormChanger = this.formbuilder.group({
      ancien: ['', [Validators.required]],
      nouveau: ['', [Validators.required, Validators.pattern(this.condition)]],
      confirmer: [
        '',
        [Validators.required, Validators.pattern(this.condition)],
      ],
    });
  }
  ngOnInit(): void { }
}
