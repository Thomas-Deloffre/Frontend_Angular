// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BASE_URL: 'https://data.42matters.com',
  apiPrefix: "http://prod.projet-al07-thomas.com",
  imgServer: "https://al07-prod.s3.eu-west-1.amazonaws.com/images/",
  libenv : "Developpement",
  NumberOfDay : 8,
  timestamp: '2022/03/03'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.