import { Component, OnInit } from '@angular/core';
import { PredictabilityDataService } from  '../predictability-data.service';

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.css']
})
export class IntakeComponent implements OnInit {

  warningMsg: string = ""
  successMsg: string = ""
  results: object = { "scoredApplicants": [] }

  constructor( public  predictabilityService: PredictabilityDataService ) { } //sevice injected for computation


  //gets input json uses service to validate and store and do computation
  saveIntake(value)  {

      if( this.predictabilityService.setJson(value)){
          this.successMsg = "Valid JSON";
          this.warningMsg = '';
          this.results = this.predictabilityService.generateResults();
      } else {
          this.warningMsg = "Invalid JSON";
          this.successMsg = '';
          this.results.scoredApplicants = [];
      }
  }
  ngOnInit() {

  }

}
