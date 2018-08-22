import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoList',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList = [
    {name: 'list1', list: 'status'},
    {name: 'list2', list: 'list-status'},
    {name: 'list3', list: 'list-status'},
    {name: 'list4', list: 'list-status'},
    {name: 'list5', list: 'list-status'},
    {name: 'list6', list: 'list-status'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
