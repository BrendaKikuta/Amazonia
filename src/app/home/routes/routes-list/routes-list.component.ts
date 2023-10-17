import { CommonModule } from '@angular/common'
import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { DroneRoute } from '../../interfaces/routes.interfaces'
import { RoutesListModel } from './routes-list.model'
import { NgxPaginationModule } from 'ngx-pagination'
import { ManageClassesModel } from '../../models/manage-classes.model'
import { RoutesListService } from '../routes-list.service'

@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgxPaginationModule],
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.scss'],
})

export class RoutesListComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>()
  
  manageClassesModel: ManageClassesModel = new ManageClassesModel()

  constructor(private routesListService: RoutesListService) {}

  routes: Array<DroneRoute> = []
  routesListModel: RoutesListModel = new RoutesListModel()
  page: number = 1

  ngOnInit(): void {
    this.listRoutes()
  }

  listRoutes() {
    this.routesListService.getLastRoutes().subscribe(response => {
      Object.entries(response).forEach(item => {
        this.routes.push({
          droneStart: item[0],
          pickUp: this.routesListModel.getPickUpCoordinate(item[1]),
          done: this.routesListModel.getDoneCoordinate(item[1]),
          time: this.routesListModel.getRouteTime(item[1])
        })
      })

      this.loading.emit(true)
    })
  }

  previousPage(currentButtonId: string, buttonId: string): void {
    this.manageClassesModel.removeClass(currentButtonId, 'active')
    this.manageClassesModel.addClass(buttonId, 'active')
    this.page -= 1
  }

  nextPage(currentButtonId: string, buttonId: string): void {
    this.manageClassesModel.removeClass(currentButtonId, 'active')
    this.manageClassesModel.addClass(buttonId, 'active')
    this.page += 1
  }
}
