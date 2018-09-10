import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular'

import { Quote } from '../../data/quote.interface'

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: {category: string, quotes: Quote[], icon: string}

  constructor(private navvypar: NavParams) {}

  ngOnInit() {
    this.quoteGroup = this.navvypar.data
  }

  //ionViewDidLoad() {
  // this.quoteGroup = this.navvypar.data
  //Add elvis operator (?) in template to use this approach
  //}
}
