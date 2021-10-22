import {Injectable} from '@angular/core';
import {interval, Subject, Subscription} from "rxjs";
import {WebsocketService} from "./websocket.service";
import {environment} from "../../environments/environment";


// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class R2d2Service {
  public server: Subject<string>
  private static direction = -1;
  private static token;
  public static data = {
    speed1: 0,
    direction1: 0,
    speed2: 0,
    direction2: 0,
    token: ""
  }

  private send: Subscription;


  directionChange: Subject<number> = new Subject<number>();

  constructor(private wsService: WebsocketService) {
    this.server = <Subject<any>>wsService
      .connect(environment.R2D2_URL)
      .map((response: MessageEvent) => {
        return JSON.parse(response.data);
      })

    this.send = interval(200).subscribe(
      () => {
        if (R2d2Service.data.token === '') {
          console.log("token : " + R2d2Service.token)
          this.getToken();
        } else {
          // @ts-ignore
          this.server.next(R2d2Service.data)
        }
      }
    )

    this.directionChange.subscribe(value => {
      R2d2Service.direction = value;

      // @ts-ignore
      switch (R2d2Service.direction) {
        case 0:
          R2d2Service.data.direction1 = 2;
          R2d2Service.data.direction2 = 2;
          break;

        case 1:
          R2d2Service.data.direction1 = 2;
          R2d2Service.data.direction2 = 1;
          break;

        case 2:
          R2d2Service.data.direction1 = 1;
          R2d2Service.data.direction2 = 1;
          break;

        case 3:
          R2d2Service.data.direction1 = 1;
          R2d2Service.data.direction2 = 2;
          break;
      }
    })
  }


  changeDirection(direction: number): void {
    this.directionChange.next(direction)
  }

  private getToken() {
    // @ts-ignore
    this.server.next({token: ""})
    this.server.subscribe(msg => {
      // @ts-ignore
      if (!R2d2Service.data.token) {
        // @ts-ignore
        R2d2Service.data.token = msg.token
        this.server.unsubscribe();
      }
    });
  }
}
