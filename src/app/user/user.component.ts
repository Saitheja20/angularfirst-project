// import { Component } from '@angular/core';
// import {DUMMY_USERS} from "../dummy-user"
// const random = Math.floor(Math.random() * DUMMY_USERS.length)
// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class UserComponent {
//  SelectedUser = DUMMY_USERS[random];

//  get photosPath(){
//   return "assets/users/"+ this.SelectedUser.Avatar;
//  }
//  onSelectUser(){
//   const random = Math.floor(Math.random() * DUMMY_USERS.length)
//   this.SelectedUser = DUMMY_USERS[random];
//   console.log("you are clicked the "+this.SelectedUser.name+" profile");
//  }
// }
/*||||||||||||||||||||above is working fine but for signal concept use below code|||||||

*/
import { Component, Input ,Output, EventEmitter,output, computed, input} from '@angular/core';
import {DUMMY_USERS} from "../dummy-user";
import {user} from './user.model';
import { CardComponent } from "../shared/card/card.component";
const random = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
// we can use above or below
@Input({required:true}) user!:user;
@Input ({required:true}) selected!:boolean;
// {
// id:string;
// name:string;
// avatar:string;
// }

  @Output() select = new EventEmitter<string>();

  // we can use output method using above or below
  // select =output<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(()=>{
  //   return '../assets/users/'+this.avatar;
  // })
  get imagePath(){
    return "../assets/users/"+this.user.avatar;
  }

  onSelectUser(){

    this.select.emit(this.user.id);

  }
}
