# Predictability

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
## Running App
paste in a json object like:
```
{
	"team": [{
		"name": "Eddie",
		"attributes": {
			"intelligence": 1,
			"strength": 5,
			"endurance": 3,
			"spicyFoodTolerance": 1
		}
	}, {
		"name": "Will",
		"attributes": {
			"intelligence": 9,
			"strength": 4,
			"endurance": 1,
			"spicyFoodTolerance": 6
		}
	}, {
		"name": "Mike",
		"attributes": {
			"intelligence": 3,
			"strength": 2,
			"endurance": 9,
			"spicyFoodTolerance": 5
		}
	}],
	"applicants": [{
		"name": "John",
		"attributes": {
			"intelligence": 4,
			"strength": 5,
			"endurance": 2,
			"spicyFoodTolerance": 1
		}
	}, {
		"name": "Jane",
		"attributes": {
			"intelligence": 7,
			"strength": 4,
			"endurance": 3,
			"spicyFoodTolerance": 2
		}

	}, {
		"name": "Joe",
		"attributes": {
			"intelligence": 1,
			"strength": 1,
			"endurance": 1,
			"spicyFoodTolerance": 10
		}
	}]
}
```
and if json is valid results and raw JSON out put will be displayed
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
