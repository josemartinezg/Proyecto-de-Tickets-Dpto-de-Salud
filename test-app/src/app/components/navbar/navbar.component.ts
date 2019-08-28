import { Component, OnInit, Input } from '@angular/core';
import { QzTrayService } from 'src/app/services/qz-tray.service';
import { RabbitmqPrintService } from 'src/app/services/rabbitmq-print.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Input() tituloNavBar: string;
  title = 'app';
  printerName = "Generic / Text Only";
  constructor(private printService: QzTrayService) { 
  }

  ngOnInit() {
		this.printService.initQZ();
	}
}
