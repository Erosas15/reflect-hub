#!/bin/bash

# Define the array
libraries=(
  "express" # server
  "cors"
  "module-alias" 
  "path"
  "firebase"  # firebase
  "firebase-admin"
  "openai"   # chatbot
  "langchain"
  "fs"
  "csv-parser"
  "d3-dsv@2"
  "papaparse"
  "react"  # frontend
  "react-dom"
  "react-router-dom"
  "react-scripts"
  "web-vitals"
  "axios"
  "concurrently"
)

# Function to install dependencies
install_dependency() {
  local library=$1
  echo "Installing: $library ..."
  npm install "$library"

  # Check if npm install was successful
  if [ $? -eq 0 ]; then
    echo "Installed: $library successfully."
  else
    echo "Error installing: $library"
  fi
}

# Loop through all elements in the array
for library in "${libraries[@]}"; do
  install_dependency "$library"
done
