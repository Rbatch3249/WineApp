import { Component, OnInit } from '@angular/core';
import {WineService} from "../service/wine.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
info;
  constructor(private wineService: WineService, private activatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
  }

}
