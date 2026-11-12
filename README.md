# JonathanDallaireLearningAngularF26

I first made my project about taco orders because I taught there was a taco API but that API doesn't work very well.
After looking around a little bit I found a Food Bank API that doesn't require any key and is pretty convenient to use.
In the end I chose this API for convenience more than anything else.


Lazy Loading here is before and after chunk tables. Instead of storing everything
in the main file, there is now multiples because they now load independently of 
one another. The landing page stays eager because we want it to load immediately
when someone gets on the page.

Before:
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-TZ2CDAA3.js    | main          | 317.20 kB |                84.01 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

After:
Initial chunk files | Names         |  Raw size | Estimated transfer size
chunk-CtoIhyRG.js   | -             | 180.11 kB |                52.51 kB
main-LYJFUOHU.js    | main          |  96.87 kB |                25.19 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 276.98 kB |                77.69 kB

Lazy chunk files    | Names         |  Raw size | Estimated transfer size
chunk-D8wO-YKx.js   | order-form    |  42.28 kB |                 9.66 kB
chunk-BkqMcAwW.js   | taco-detail   |   1.31 kB |               708 bytes
chunk-DgdmMVPg.js   | order-list    |  92 bytes |                92 bytes



This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
