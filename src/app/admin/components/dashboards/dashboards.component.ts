import { Component, OnInit } from '@angular/core';
import {
  AlertifyService,
  MessageType,
  Position,
} from '../../../services/admin/alertify.service';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrl: './dashboards.component.scss',
})
export class DashboardsComponent implements OnInit {
  constructor(private alertify: AlertifyService) {}

  ngOnInit(): void {}

  m() {
    this.alertify.message('Merhaba', {
      messageType: MessageType.Success,
      delay: 5,
      position: Position.TopRight,
    });
  }

  d() {
    this.alertify.dismiss();
  }
}
