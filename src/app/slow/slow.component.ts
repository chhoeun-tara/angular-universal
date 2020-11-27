import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-slow',
  template: `
    <p>
      Response is: {{response | async | json}}
    </p>
  `,
  styles: []
})
export class SlowComponent {


  public response: Observable<any> = this.service.getSlow();
  constructor(private service: GetDataService) { }

}
