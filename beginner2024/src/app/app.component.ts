import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Lily';
  list_of_names: string[] = [];

  save_name = () => {
    this.list_of_names.push(this.name);
  }

  print_list_of_names () {
    console.log(this.list_of_names);
    
  }

  process_action () {
    this.save_name();
    this.print_list_of_names();
  }
}
