import { Component, OnInit } from '@angular/core';
import * as jwt from 'jsonwebtoken';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(/*public _DomSanitizer: DomSanitizer*/) { }
  iframeURL: string = '';
  ngOnInit() {
  }

  // getDashboard(){
  //   const METABASE_SITE_URL = "http://localhost:3000";
  //   const METABASE_SECRET_KEY = "7408c543ef16470cbf2ffdf126aa73347d622e3d05ec8d2d65d40ed41537be95";

  //   const payload = {
  //     resource: { dashboard: 1 },
  //     params: {},
  //     exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
  //   };
  //   const token = jwt.sign(payload, METABASE_SECRET_KEY);

  //    this.iframeURL = METABASE_SITE_URL + "/embed/dashboard/" + token + "#bordered=true&titled=true";
  // }

}
