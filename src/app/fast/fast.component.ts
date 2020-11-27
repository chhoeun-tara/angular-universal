import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-fast',
  template: `
  <p>
    Response is: {{response | async | json}}
  </p>
  `,
  styles: []
})
export class FastComponent {

  public response: Observable<any> = this.service.getFast();
  constructor(private service: GetDataService) { }

}
