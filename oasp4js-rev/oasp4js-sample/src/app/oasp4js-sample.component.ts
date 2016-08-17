import { Component, OnInit } from '@angular/core';
import { TableDetailsComponent } from './table-mgmt/table-details/table-details.component';
import { TableSearchComponent } from './table-mgmt/table-search/table-search.component';
import { ButtonBarComponent } from './oasp/oasp-ui/button-bar/button-bar.component'
import { ModalDialogComponent } from './oasp/oasp-ui/modal-dialog/modal-dialog.component'
import { TableManagementRestService } from './table-mgmt/table-mgmt.rest.service'
import { TableService } from './table-mgmt/table.service';
import { OfferService } from './offer-mgmt/offer.service';
import { PositionService } from './offer-mgmt/position.service';
import { HTTP_PROVIDERS } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Table } from './table-mgmt/table';



import { HeaderComponent} from './components/header/view/Header.component';
import { LoginComponent} from './components/login/view/Login.component';
import { CrudComponent } from './components/crud/view/Crud.component'

import { User } from './models/user/User.model'


@Component({
  moduleId: module.id,
  selector: 'oasp4js-sample-app',
  templateUrl: 'oasp4js-sample.component.html',
  styleUrls: ['oasp4js-sample.component.css'],
  directives: [
      LoginComponent, HeaderComponent, CrudComponent,
      TableDetailsComponent, TableSearchComponent,
      ButtonBarComponent,ModalDialogComponent],
  providers: [TableService, PositionService, OfferService,HTTP_PROVIDERS,TableManagementRestService]
})
export class Oasp4jsSampleAppComponent{
  title = 'oasp4js-sample works!';
  public login:boolean
  public usuario: User = new User(0,"","");

  enviar(value){
    setTimeout(()=>{this.login = value;},1);
  }

  logOut(){
    this.login = false;
  }
}
