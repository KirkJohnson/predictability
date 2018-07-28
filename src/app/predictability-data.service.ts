import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredictabilityDataService {
    rawJson: object = {}
    results: object = { "scoredApplicants": [] }
    teamAverages: object

  constructor() { }

  setJson( value ) {
      //check json string and set if valid
      try {
          var temp = JSON.parse(value);
          if( this.validaateJson(temp)){
              this.rawJson = JSON.parse(value);
              return true;
          }
          return false;
      } catch (error ) {
          return false;
      }
  }

  validaateJson(value) {
      
      //validate the JSON and make sure their is team property with attributes and applicatn property
      if( ! value.hasOwnProperty('team') || !value.hasOwnProperty('applicants')){
          return false;
      }
      //check for attributes
      if( value.team[0].attributes === undefined ){
          return false;
      }
      if( value.applicants[0].attributes === undefined ){
          return false;
      }
      return true;

  }

  generateResults(){
      //get team averages on attributes
      var team = this.rawJson.team;
      var applicants = this.rawJson.applicants;

      var tValues = {};

      for( var i =0; i < team.length; i++ ){
          for( var key in team[i].attributes ) {
              if( team[i].attributes.hasOwnProperty(key) ) {
                  if( tValues[key] == undefined ){
                      tValues[key] = [];
                  }
                  tValues[key].push(team[i].attributes[key]);
              }
          }
      }

      //use reduce get sum and replace tValues with the average
      for( var key in tValues ){
          if( tValues.hasOwnProperty(key) ) {
              var sum  = tValues[key].reduce( (total, amount) => total + amount );
              tValues[key] = (sum/tValues[key].length);
          }
      }
      this.teamAverages = tValues;

      //for each applicant compute compatibility
      for( var i=0; i < applicants.length; i++ ){
          this.results.scoredApplicants.push({
              "name" : applicants[i].name,
              "score" : this.computeCompatibility(applicants[i]).toFixed(2)
          });
      }

      return this.results;
  }

  //compute the compatibility of passed in user
  computeCompatibility( applicant ) {
      //compute applicant score based on team averages and where their scores fall relative
      //to those
      var scores = [];
      for( var key in applicant.attributes ){
          if( applicant.attributes.hasOwnProperty(key) && this.teamAverages[key] !== undefined ){
              //determine percentage of closeness number is to average
              //if lower push percentage of user score over average
              var appScore = applicant.attributes[key]
              var tScore = this.teamAverages[key];

              if(appScore < tScore ){
                  scores.push( appScore/tScore);
              } else if ( appScore > tScore ) {
                  scores.push( ( (10-tScore)- (appScore-tScore) )/ (10-tScore)  );
              } else {
                  //matched push 1
                  scores.push(1);
              }
          }
      }

      //get and return average
      var sum = scores.reduce((total, amount) => total + amount);
      return sum/scores.length;
  }
  getJson() { return this.rawJson; }
}
