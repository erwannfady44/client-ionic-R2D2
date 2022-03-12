import {Injectable} from '@angular/core';
import {interval, Subject, Subscription} from 'rxjs';
import {WebsocketService} from './websocket.service';


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class R2d2Service {
  public static ip: string = "192.168.0.1";
  public static server: Subject<any>;
  public data = {
    direction1: 0,
    direction2: 0,
    speed1: 0,
    speed2: 0,
    token: ''
  };
  directionChange: Subject<number> = new Subject<number>();
  private direction = -1;
  private token;
  private send: Subscription;


  constructor(private wsService: WebsocketService) {
    //const IP = localStorage.getItem('ip');


    R2d2Service.server = <Subject<any>>this.wsService
      .connect('ws://' + R2d2Service.ip + ':3000/webSocket')
      .map((response: MessageEvent) => JSON.parse(response.data));

    this.send = interval(10).subscribe(
      () => {
        if (this.data.token === '') {
          console.log('token : ' + this.token);
          this.getToken();
        } else {
          // @ts-ignore
          R2d2Service.server.next(this.data);
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


  public connect(): void {
    //this.wsService = new WebsocketService();
  }

  public disconnect(): void {
    this.wsService.disconnect();
  }

  public changeDirection(direction: number): void {
    this.directionChange.next(direction);
  }

  private getToken() {
    // @ts-ignore
    R2d2Service.server.next({token: ''});
    R2d2Service.server.subscribe(msg => {
      // @ts-ignore
      if (!this.data.token) {
        // @ts-ignore
        this.data.token = msg.token;
        R2d2Service.server.unsubscribe();
      }
    });
  }
}

