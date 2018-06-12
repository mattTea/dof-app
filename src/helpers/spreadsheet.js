import config from '../../config';

// Load data from spreadsheet | get the right values from it and assign

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "trainingResources!A2:U59" // <- test dof-app-data sheet range
        // range: "trainingResources!A4:M194" <-real sheet requiring credentials
      })
      .then(
        // The response values are an array of arrays where each one is a row within the spreadsheet
        // [0] below refers to the position of the cell across the row (column A)
        response => {
          const data = response.result.values;
          const trainingCatalogueItems = data.map(trainingCatalogueItem => ({
            discipline: trainingCatalogueItem[0],
            stage: trainingCatalogueItem[1],
            skill: trainingCatalogueItem[2],
            topic: trainingCatalogueItem[3],
            description: trainingCatalogueItem[4],
            learningObjective: trainingCatalogueItem[5],
            url: trainingCatalogueItem[12],
            duration: trainingCatalogueItem[10],
            rating: trainingCatalogueItem[20]
          })) || [];
          callback({
            trainingCatalogueItems
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}