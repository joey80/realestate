# Real Estate React App
- Built with React, Redux, Sass
- Uses Zillow API for home data
- You will need to add your own (free) [Zillow API key](https://www.zillow.com/howto/api/APIOverview.htm)

![realestate](https://user-images.githubusercontent.com/3519112/64209978-fd6d4800-ce6f-11e9-81ee-a320962cafb6.JPG)

# To Run:
```
npm install
npm start
```

Note - API token is not included. To add one
- Sign up for a (free) [Zillow API key](https://www.zillow.com/howto/api/APIOverview.htm)
- Create a .env file and add this line:
```
REACT_APP_ZILLOW_ZWSID=yourzillowapikey
```

# Storybook
- This app uses [Storybook](https://storybook.js.org/) for its UI components
- To launch the Storybook app just use
```
npm run storybook
```

# Testing
- This app uses Enzyme, Chai, and Jest
- To run the unit tests enter:
```
npm run test
```