import config from '../../config';

// Load data from spreadsheet | get the right values from it and assign

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "trainingResources!A4:L165" // <- dof-app-data sheet range
        // range: "trainingResources!A4:M194" <- live sheet requiring credentials
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
            title: trainingCatalogueItem[3],
            description: trainingCatalogueItem[4],
            deliveryMethod: trainingCatalogueItem[6],
            url: trainingCatalogueItem[5],
            duration: trainingCatalogueItem[8],
            rating: trainingCatalogueItem[11]
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