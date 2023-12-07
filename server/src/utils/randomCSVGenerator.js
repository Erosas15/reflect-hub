const fs = require("fs");
const Papa = require("papaparse");

function createRandomCSV(inputCSVPath, outputCSVPath, numRows = 300) {
  // Read the original CSV file
  const originalData = fs.readFileSync(inputCSVPath, "utf8");

  // Parse the CSV data
  Papa.parse(originalData, {
    header: true,
    dynamicTyping: true,
    complete: (result) => {
      const originalRows = result.data;

      // Check if the number of rows in the original file is less than the desired number
      if (originalRows.length < numRows) {
        throw new Error(
          "The input CSV file has fewer rows than the specified number."
        );
      }

      // Randomly select numRows from the original rows
      const randomRows = [];
      for (let i = 0; i < numRows; i++) {
        const randomIndex = Math.floor(Math.random() * originalRows.length);
        randomRows.push(originalRows.splice(randomIndex, 1)[0]);
      }

      // Convert the selected rows back to CSV format
      const randomCSV = Papa.unparse(randomRows, { header: true });

      // Write the randomly selected rows to a new CSV file
      fs.writeFileSync(outputCSVPath, randomCSV, "utf8");
    },
  });
}

module.exports = createRandomCSV;
