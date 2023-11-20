const fs = require("fs");
const { exec } = require("child_process");

// Read the content of the file
fs.readFile("src/make/libraries.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Split the file content into an array of library names
  const lines = data.split("\n");
  const libraries = lines
    .filter((line) => !line.startsWith("#")) // Exclude lines starting with #
    .map((library) => library.trim());

  // Install each library using npm
  libraries.forEach((library) => {
    if (library) {
      console.log(`Installing ${library}...`);
      exec(`npm install ${library}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error installing ${library}:`, error.message);
          return;
        }
        console.log(`Installed ${library}:`, stdout);
      });
    }
  });
});
