import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  myBag$ = this.storeService.myBag$;

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit() {
  }

}
