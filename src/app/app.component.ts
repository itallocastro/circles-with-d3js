import { Component } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'circlewindow';
  radius = 5;
  ngAfterContentInit()
  {
    d3.selectAll('circle').attr('r',30).attr('cx', function(){ return Math.random()*720});

  }
  clicked(event: any)
  {
    d3.select(event.target).append('circle').attr('cx',event.x).attr('cy',event.y).attr('r',this.radius).attr('fill','red');
    
  }

  
}
