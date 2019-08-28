import { UserInterface } from './../../../models/User-interface';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mobileQuery: MediaQueryList;

  //fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  fillerNav = [
    {name:" Dashboard",route:"/admin",icon:"dashboard"},
    //{name:" Turnos",route:"/turnos-admin",icon:"event"},
    {name:" Tipo Turno",route:"/tipoturno-admin",icon:"format_list_bulleted"},
    {name:" Usuarios",route:"/usuarios-admin",icon:"supervised_user_circle"},
    {name:" Puestos",route:"/puestos-admin",icon:"transfer_within_a_station"},
    {name:" Estados",route:"/estados-admin",icon:"refresh"}
  ]
  private _mobileQueryListener: () => void;

  user: UserInterface;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private atuhService: AuthService,private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  ngOnInit() {
    this.user = this.atuhService.getCurrentUser();
    
  //  console.log(this.user);

  }
  onLoggedout(){
    if(confirm("Estas seguro que deseas cerrar sesión?")) {
      this.atuhService.logoutUser();
      this.router.navigate(['/login']);
    }
   
   
  }



}
