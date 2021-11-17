export class Room {
  id: number;
  name: string;
  date:string;
  startHour: string;
  endHour: string;
  active: boolean;

  constructor(id: number, name: string, date:string, startHour: string, endHour: string, active: boolean) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.startHour = startHour;
    this.endHour = endHour;
    this.active = active;
  }
}
