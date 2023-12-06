# Define the array of libraries
$libraries = @(
    "express" # server
    "cors",
    "module-alias" ,
    "path",
    "firebase",  # firebase
    "firebase-admin",
    "openai",   # chatbot
    "langchain",
    "fs",
    "csv-parser",
    "d3-dsv@2",
    "papaparse",
    "react",  # frontend
    "react-dom",
    "react-router-dom",
    "react-scripts",
    "web-vitals",
    "axios",
    "concurrently"
)

# Loop through all elements in the array
foreach ($library in $libraries) {
    Write-Host "Installing: $library ..."
    npm install $library -g

    # Check if npm install was successful
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Installed: $library successfully."
    } else {
        Write-Host "Error installing: $library"
    }
}