import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';

interface DataItem {
  id: number;
  name: string;
  age: number;
  city: string;
}

@Component({
  templateUrl: 'tasks.component.html'
})
export class TasksComponent {
  filterValue: string = '';
  dataSource: DataSource;

  data: DataItem[] = [
    { id: 1, name: 'John Doe', age: 25, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 30, city: 'Los Angeles' },
    { id: 3, name: 'Michael Johnson', age: 45, city: 'Chicago' },
    { id: 4, name: 'Emily Davis', age: 28, city: 'Houston' },
  ];

  constructor() {
    this.dataSource = new DataSource({
      store: {
        type: 'array',
        data: this.data,
      },
      searchOperation: 'contains',
      searchExpr: ['name', 'city' , 'age' , 'id'], 
    });
  }

  onFilterChange(event: any) {
    this.filterValue = event.target.value;
    this.dataSource.searchValue(this.filterValue); 
    this.dataSource.load(); 
  }
}
