import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {WebsocketService} from "./websocket.service";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class R2d2Service {
  public server: Subject<string>

  public speed: number = 0;
  public direction: number;

  directionChange: Subject<number> = new Subject<number>();

  constructor(private wsService: WebsocketService) {
    this.server = <Subject<any>>wsService
      .connect(environment.R2D2_URL)
      .map((response: MessageEvent) => {
        return JSON.parse(response.data);
      })

    this.directionChange.subscribe(value => {
      this.direction = value;
      let directionMotA: number = 0;
      let directionMotB: number = 0;
      // @ts-ignore
      switch (this.direction) {
        case 0:
          directionMotA = 1;
          directionMotB = 1;
          break;

        case 1:
          directionMotA = 1;
          directionMotB = -1;
          break;

        case 2:
          directionMotA = -1;
          directionMotB = -1;
          break;

        case 3:
          directionMotA = -1;
          directionMotB = 1;
          break;
      }
      // @ts-ignore
      this.server.next({
        directionMotA,
        speedMotA: this.speed,
        directionMotB,
        speedMotB: this.speed
      });
    })
  }

  changeDirection(direction: number): void {
    this.directionChange.next(direction)
  }


}
