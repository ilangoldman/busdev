import { Component } from '@angular/core';
import { NavController, NavParams, Content,ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {
  // @ViewChild(Content) content: Content;

  title:string;
  list = [];

  text:string;
  btn:any;
  isEdit:boolean;
  index;

  form : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder
  ) {
    this.list = this.navParams.get('content');

    this.title = this.navParams.get('title');
    this.text = this.navParams.get('text');
    this.btn = this.navParams.get('btn');
    this.index = this.navParams.get('i');

    this.form = this.formBuilder.group({
      Title: ['', Validators.required],
      Subtitle: ['', Validators.required],
      Image: ['', ],
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlankPage');
  }

  edit() { 
    this.isEdit = !this.isEdit;
  }

  itemButton(action) {
    
  }

  back() {
    this.navCtrl.pop();
  }

  done() {
    let data = { 
      title: this.form.value.Title,
      subtitle: this.form.value.Subtitle,
      i: this.index
    };
    this.viewCtrl.dismiss(data);
  }

}
