import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Hero } from '../hero';
import { MessageService } from "../messages/message.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private messageService: MessageService) {
    this.messageService.add( `HeroDetailComponent: c'tor()`);
  }

  ngOnInit() {
    this.messageService.add( `HeroDetailComponent: ngOnInit()`);
  }

}
