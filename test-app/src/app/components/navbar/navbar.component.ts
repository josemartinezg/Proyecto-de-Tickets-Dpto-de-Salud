import { Component, OnInit, Input } from '@angular/core';
import { QzTrayService } from 'src/app/services/qz-tray.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input() tituloNavBar: string;

  constructor(private printService: QzTrayService) { 
   
  }

  ngOnInit() {
  }
  onClickList(){
    this.printService.getPrinters();
    console.log();
  }
}
