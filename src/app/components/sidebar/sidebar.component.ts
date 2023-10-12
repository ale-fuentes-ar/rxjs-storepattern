import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  myBag$ = this.storeService.myBag$;

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit() {
  }

}
