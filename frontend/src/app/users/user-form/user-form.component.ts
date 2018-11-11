import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() user;
  @Output() save = new EventEmitter<any>();

  public enableToSave: boolean = false;

  form = new FormGroup({
    descricao: new FormControl('', Validators.required),
    preco: new FormControl(),
    quantidade: new FormControl()
  });

  constructor() { }

  get descricao(): any { return this.form.get('descricao'); }
  get preco(): any { return this.form.get('preco'); }
  get quantidade(): any { return this.form.get('quantidade'); }

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.enableToSave = this.form.valid;
    });
  }

  ngOnChanges(changes) {
    if (changes.user.currentValue) {
      this.form.patchValue(changes.user.currentValue);
    }
  }

  submit() {
    this.save.emit(this.form.value);
  }

}
