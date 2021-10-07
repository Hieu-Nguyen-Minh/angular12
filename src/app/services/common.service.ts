import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private counter = 0;

  public age = 10;

  public totalStudent = 0;

  public totalStudent$ = new BehaviorSubject<number>(0);

  constructor() {}

  public setTotalStudent(total: number) {
    this.totalStudent = total;
    this.totalStudent$.next(total);
  }

  public increamentTotalStudents() {
    this.totalStudent++;
    this.totalStudent$.next(this.totalStudent);
  }

  public tangtuoi() {
    this.age++;
  }

  public giamtuoi() {
    this.age--;
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
