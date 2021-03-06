[![Netlify Status](https://api.netlify.com/api/v1/badges/f4e849fa-e8d5-4fa8-b0cb-5575fc106437/deploy-status)](https://app.netlify.com/sites/joeyui-realestate/deploys)

# Real Estate React App

- Built with Typescript, React, Redux, Sass
- Uses functional components and hooks
- Uses Zillow API for home data
- You will need to add your own (free) [Zillow API key](https://www.zillow.com/howto/api/APIOverview.htm)

![realestate](https://user-images.githubusercontent.com/3519112/64209978-fd6d4800-ce6f-11e9-81ee-a320962cafb6.JPG)

# To Run:

```
npm install

// you need to install the netlify cli first
npm install netlify-cli -g

// run the dev server
npm run dev
```

Note - API token is not included. To add one

- Sign up for a (free) [Zillow API key](https://www.zillow.com/howto/api/APIOverview.htm)
- Create a .env file and add this line:

```
REACT_APP_ZILLOW_ZWSID=yourzillowapikey
```

# Storybook

- This app uses [Storybook](https://storybook.js.org/) for its UI components
- Before running it for the first time run this

```
npm run build-storybook
```

- To launch the Storybook app just use

```
npm run storybook
```

# Testing

- This app uses Enzyme, and Jest
- To run the unit tests enter:

```
npm run test
```
