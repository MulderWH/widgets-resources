[![Build Status](https://travis-ci.org/mendixlabs/calendar.svg?branch=master)](https://travis-ci.org/mendixlabs/calendar)
[![Dependency Status](https://david-dm.org/mendixlabs/calendar.svg)](https://david-dm.org/mendixlabs/calendar)
[![Dev Dependency Status](https://david-dm.org/mendixlabs/calendar.svg#info=devDependencies)](https://david-dm.org/mendixlabs/calendar#info=devDependencies)
[![codecov](https://codecov.io/gh/mendixlabs/calendar/branch/master/graph/badge.svg)](https://codecov.io/gh/mendixlabs/calendar)
![badge](https://img.shields.io/badge/mendix-7.14.1-green.svg)


# Calendar
Display and manage calendar events

## Features
 * Add and edit calendar events
 * Drag and drop calendar events
 * Change calendar event color

## Dependencies
* Mendix 7.15.1

## Development test project
[https://reactcalendar.mxapps.io](https://reactcalendar.mxapps.io)

## Basic configuration
![CalendarProperties](/assets/Datasource.png)

* Place the widget in data form within the context of the event entity
* Calendar event can be retrieved from the database by context, xpath, microflow or nanoflow
* Select the event entity
* For data source `Microflow`, select a `Data source microflow` and for data source `Nanoflow`, select a `Data source nanoflow`
* Select attributes to provide the event `Title`, `start date`, `end date`, `color` and a boolean attribute to determine whether the event should be considered `all day`

![CalendarProperties](/assets/Appearance.png)

* `Standard` view has `day`, `week` and `month` view only
* To set a `Custom toolbar`, select `Custom` view
* `Month` is the default view
* `Start position attribute` is optional

![CalendarProperties](/assets/TruncatedEvents.png)

* Truncated events are shown in an overlay when you click the `+x more` link

![CalendarProperties](/assets/Events.png)

* There are three types of `Events`
* There are two click events. Clicking on a `calendar event` and clicking on a `day slot`
* The third event is the change event
* There two change events as well. `Drag and drop` plus `event resizing`

![CalendarProperties](/assets/DragAndDrop.gif)

## Issues, suggestions and feature requests
We are actively maintaining this widget, please report any issues or suggestion for improvement at [https://github.com/mendixlabs/calendar/issues](https://github.com/mendixlabs/calendar/issues)

## Development and contribution
Prerequisite: Install git, node package manager, webpack CLI, grunt CLI, Karma CLI

To contribute, fork and clone.

    > git clone https://github.com/mendixlabs/calendar.git

The code is in typescript. Use a typescript IDE of your choice, like Visual Studio Code or WebStorm.

To set up the development environment, run:

    > npm install

Create a folder named `dist` in the project root.

Create a Mendix test project in the dist folder and rename its root folder to `dist/MxTestProject`. Changes to the widget code shall be automatically pushed to this test project.
Or get the test project from [https://github.com/mendixlabs/calendar/releases/latest](https://github.com/mendixlabs/calendar/releases/latest)

To automatically compile, bundle and push code changes to the running test project, run:

    > npm start

To run the project unit tests with code coverage, results can be found at `dist/testresults/coverage/index.html`, run:

    > npm run test:unit

Run the unit test continuously during development:

    > npm run test:dev

Run the end to end test during development:

    > npm run test:e2e:dev

## Scripts
While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`|Build the project and monitor source and config for changes and rebuild.|
|`test`|Runs lint, build, unit tests with Karma and generates a coverage report, deploy and run e2e test|
|`test:dev`|Runs Karma and watches for changes to re-run tests; does not generate coverage reports.|
|`test:unit`|Runs unit tests with Karma and generates a coverage report.|
|`test:e2e`|Runs end 2 end tests with remote.|
|`test:e2e:dev`|Runs end 2 end tests with locally on localhost:8080|
|`deploy`|Use latest widget build to update the Mendix project update the application to Mendix node.|
|`build:prod`|Build widget optimized for production|
|`build:dev`|Build widget optimized for debugging.|
|`lint`|Lint all `.js` files.|
|`lint:fix`|Lint and fix all `.ts` files.|

# CI and remote testing
To enable the continues integration services.
Copy the `node_modules/mendix-widget-build-script/dist/localSettings.js`
 to your project root, and update the settings to run the update deployment from local source.

**Do not forget** to exclude this file in the `.gitignore` as it contains sensitive data.
```
exports.settings = {
    appName: "appName",
    key: "xxxxxxxx-xxxx-xxxx-xxxxx-xxxxxxxxxxxx",
    password: "secret",
    projectId: "xxxxxxxx-xxxx-xxxx-xxxxx-xxxxxxxxxxxx",
    user: "ci@example.com"
};
```

More information about the [Mendix widget build script](https://github.com/FlockOfBirds/mendix-widget-build-script).
