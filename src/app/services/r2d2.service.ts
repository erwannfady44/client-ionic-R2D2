import {Injectable} from '@angular/core';
import {interval, Subject, Subscription} from 'rxjs';
import {WebsocketService} from './websocket.service';
import {environment} from '../../environments/environment';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class R2d2Service {
  public server: Subject<string>;
  private direction = -1;
  private token;
  public data = {
    direction1: 0,
    direction2: 0,
    speed1: 0,
    speed2: 0,
    token: ''
  };
  private send: Subscription;


  directionChange: Subject<number> = new Subject<number>();

  constructor(private wsService: WebsocketService) {
    this.server = <Subject<any>>wsService
      .connect(environment.R2D2_URL)
      .map((response: MessageEvent) => JSON.parse(response.data));

    this.send = interval(10).subscribe(
      () => {
        if (this.data.token === '') {
          console.log('token : ' + this.token);
          this.getToken();
        } else {
          // @ts-ignore
          this.server.next(this.data);
        }
      }
    );

    this.directionChange.subscribe(value => {
      this.direction = value;

      // @ts-ignore
      switch (this.direction) {
        case 0:
          this.data.direction1 = 2;
          this.data.direction2 = 2;
          break;

        case 1:
          this.data.direction1 = 1;
          this.data.direction2 = 2;
          break;

        case 2:
          this.data.direction1 = 1;
          this.data.direction2 = 1;
          break;

        case 3:
          this.data.direction1 = 2;
          this.data.direction2 = 1;
          break;

        default:
          this.data.direction1 = 0;
          this.data.direction2 = 0;
      }
    });
  }


  changeDirection(direction: number): void {
    this.directionChange.next(direction);
  }

  private getToken() {
    // @ts-ignore
    this.server.next({token: ''});
    this.server.subscribe(msg => {
      // @ts-ignore
      if (!this.data.token) {
        // @ts-ignore
        this.data.token = msg.token;
        this.server.unsubscribe();
      }
    });
  }
}
