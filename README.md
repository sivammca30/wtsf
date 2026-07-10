# React + TypeScript + Vite

npm create vite@latest wtsf -- --template react-ts
using vite build tool

## React command to run

 npm run dev -- in command prompt not in powershell - vscode



### Github Host React App

## Step 1: Install the gh-pages Package

npm install gh-pages --save-dev

## Step 2: Configure your package.json

Add a homepage key at the top level of the JSON file using your GitHub information:

"homepage": "https://<your-username>.github.io/<your-repo-name>",

## Step 3: Add deploy scripts

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",
  ...
}

(Note: If you are using a Vite-based React app instead of Create React App, change "gh-pages -d build" to "gh-pages -d dist". You will also need to add base: "/<your-repo-name>/" into your vite.config.js file).

## Step 4: Trigger the Build and Deployment

Execute: npm run deploy



### gsap implementation

https://reactbits.dev/get-started/installation

## installation

npm install gsap