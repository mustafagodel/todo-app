import { Component } from '@angular/core';
import { TodoItem } from './todoitem';
import { Model } from './model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent {
  inputText: string = "";
massage="";
constructor(){
  this.model.items=this.getItemsFromLS();
} 
displayAll :boolean = true;
model=new Model();

onActionChanged(item:TodoItem){
  let items=this.getItemsFromLS();
  localStorage.clear();

  items.forEach(i =>{
if(i.description==item.description){
  i.action=item.action;
}   
});
localStorage.setItem("items",JSON.stringify(items));
}


getName(){
  return this.model.name;
}
getItems(){
  if(this.displayAll){
    return this.model.items;
  }else{
    return this.model.items.filter(item => item.action == false)
  }
  
}
addItem() {
  if (this.inputText !== "") {
    
    let data = { description: this.inputText, action: false };
    let items = this.getItemsFromLS();
    let isDuplicate = false;
    for (let item of items) {
      if (item.description === data.description && item.action === data.action) {
        isDuplicate = true;
        break; 
      }
    }

    if (!isDuplicate) {
      this.model.items.push(data);
      items.push(data);
      localStorage.setItem("items", JSON.stringify(items));
      this.inputText = "";
    } else {
      alert("This information already exists.");
    }
  } else {
    alert("Enter information.");
  }
}
getItemsFromLS()
{
  let items: TodoItem[]=[];
 let v1=localStorage.getItem("items");
 if(v1!=null){
  items=JSON.parse(v1);
 }
 
 
  return items;
}
displayCount(){
return this.model.items.filter(i=>i.action).length;

}
  getBtnClasses() {
    return   {
      'disabled': this.inputText.length==0,
      'btn-secondary': this.inputText.length==0,
      'btn-primary': this.inputText.length>0
    }

  }

}
