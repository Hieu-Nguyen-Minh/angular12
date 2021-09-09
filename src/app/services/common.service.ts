import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private counter = 0;

  constructor() {
    // console.log(this.counter);
  }

  public binhPhuong(n: number): number {
    return n * n;
  }

  public getCounter(): number {
    return this.counter;
  }

  public setCounter(n: number): void {
    this.counter = this.counter + n;
  }

  public submitData(data: any) {
    console.log('send data to server. data = ', data);
  }
}
