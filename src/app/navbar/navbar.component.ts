import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  stream;

  ngOnInit() {
  }

  takePicture() {
    if(this.stream) {
      this.stream.getTracks().forEach(function(tr){
        tr.stop();
      })
    }
    document.getElementById('take-snap').classList.add("show");
    navigator.getUserMedia({video: true}, (stream)=>{
      this.stream = stream;
      console.log(stream);
      
      document.getElementById('take-snap')["src"] = URL.createObjectURL(stream);
    }, ()=>{
      alert('could not connect stream');
    });
  }

  stop() {
    if(this.stream) {
      this.stream.getTracks().forEach(function(tr){
        tr.stop();
      })
      document.getElementById('take-snap').classList.remove("show");
    }
  }

}
