import { RoomService } from './../room.service';
import { Room } from './../room';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room: Room = new Room(0,'','','','',false);
  submitted = false;

  constructor(private roomService: RoomService,
    private router: Router) { }

  ngOnInit() {
  }

  newRoom(): void {
    this.submitted = false;
    this.room = new Room(0,'','','','',false);
  }

  save() {
    this.roomService.createRoom(this.room)
      .subscribe(data => console.log(data), error => console.log(error));
    this.room = new Room(0,'','','','',false);
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/rooms']);
  }


}
