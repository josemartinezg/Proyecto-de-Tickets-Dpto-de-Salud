import { Component, OnInit, Input } from '@angular/core';
import { QzTrayService } from 'src/app/services/qz-tray.service';

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
  onPrintHTML() {
		var colA = '<p style="font-weight: bold; font-size: 2mm;">Ticket 10001</p>';
		var colB = '<p>Php 1500.00</p>';
		var currentDate = new Date();

		var printData = [
			{
				type: 'html',
				format: 'plain',
				data: 
					`<html>
						<div style="width: 50mm;">
							<div style="width: 100%; text-align: center;">
								<h6 style="margin: 2mm 0mm">*&nbsp;SHOPPING MALL&nbsp;*</h6>
							</div>
							<table>
								<tr style="padding: 0; margin: 0; margin-bottom: 1.5mm;">
									<td valign="top" style="width: 25mm; font-weight: bold; font-size: 2mm;">&nbsp;</td>
									<td valign="top" style="width: 25mm; ">
										<div style="width: 100%; text-align: right; font-size: 2mm;">
											<span>Date: 07/27/2018</span>
										</div>
									</td>
								</tr>
								<tr style="padding: 0; margin: 0; margin-bottom: 1mm;">
									<td valign="top" style="width: 25mm;">
										<div style="width: 100%; text-align: center; font-size: 2mm;">
											<span>Items</span>
										</div>
									</td>
									<td valign="top" style="width: 25mm; ">
										<div style="width: 100%; text-align: center; font-size: 2mm;">
											<span>Price</span>
										</div>
									</td>
								</tr>
								<tr style="padding: 0; margin: 0">
									<td valign="top" style="width: 25mm; font-weight: bold; font-size: 2mm;">Item 1</td>
									<td valign="top" style="width: 25mm; ">
										<div style="width: 100%; text-align: right; font-size: 2mm;">
											<span>Php 1000.00</span>
										</div>
									</td>
								</tr>
								<tr style="padding: 0; margin: 0">
									<td valign="top" style="width: 25mm; font-weight: bold; font-size: 2mm;">Item 2</td>
									<td valign="top" style="width: 25mm; ">
										<div style="width: 100%; text-align: right; font-size: 2mm;">
											<span>Php 1000.00</span>
										</div>
									</td>
								</tr>
								<tr style="padding: 0; margin: 0">
									<td valign="top" style="width: 25mm; font-weight: bold; font-size: 2mm;">Total</td>
									<td valign="top" style="width: 25mm; ">
										<div style="width: 100%; text-align: right; font-weight: bold; font-size: 2mm;">
											<span>Php 2000.00</span>
										</div>
									</td>
								</tr>
							</table>
							<div style="width: 100%; text-align: center;">
								<p style="font-size: 2mm;">*This invoice is valid for 1 day</p>
							</div>
						</div>
					</html>`
			}
		];

		this.printService.printHTML(this.printerName, printData);
	}

  onClickList(){
    this.printService.getPrinters();
    console.log();
  }
}
