# React-Portfolio

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Questions](#questions)
  * [License](#license)

  ## Description
  
This is my personal react portfolio that will be used for potential employers.
  
  ## Installation
  To build a similar, single page portfolio or website for yourself, you'll want first create a new React app:
```
npx create-react-app <projectname>
```

Then for the single page, smooth scrolling, install react-scroll. To deploy to Github Pages, install gh-pages:
```
npm install react-scroll gh-pages
```
In the "scripts" property of your package.json, add two scripts:
```
"predeploy": "npm run build"
"deploy": "gh-pages -d build"
```
Then you will need to re-deploy each time you make changes:
```
npm run deploy
```
  

  ## Usage
    
  ## Questions
   - Please reach out to Ryan if you have any questions. He can be reached at rdcerp@gmail.com. His github account is located @ https://github.com/RDCERP/React-Portfolio
  ## License
   - None
