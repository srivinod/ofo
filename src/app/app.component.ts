import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isCollapsed = true;
  private apiURL = "http://vx1.test/api/recipies";
  data: any = {};
  

  constructor(private http: HttpClient){
    
  } 
  
  ngOnInit() {
    this.getRecipies();
  }

  getRecipies(){
    return this.http.get(this.apiURL)
    .subscribe(
      data =>{
        this.data = data;
        console.log(data);
      }
    )
  }

  OnCategoryChange(selelcted){
    console.log("Category Changed"+selelcted);
    let obj = this.data.filter(m => m.category == selelcted);  
    this.data = obj;  
    return this.data;  
    
  }

}
