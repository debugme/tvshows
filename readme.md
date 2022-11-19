## Introduction
Showz™️ is a web application that allows a user to find information about TV shows.

<img width="1034" alt="showz" src="https://user-images.githubusercontent.com/2932374/201993072-a021b156-7f8b-4f18-a27d-e09a669ad2cd.png">

This information includes the following for each show
- Title - the name of the show
- Artwork - an image of the show
- Genres - the categories the show belongs to
- Summary - a short description of the show
- Cast - the name and image of each cast member
- Seasons - the title and image of each season

## How to Run
Before you can run the application you need to install its dependencies

```
% npm install
```

Now you can run the application in development mode

```
% npm run dev
```

To see the application visit the following URL in your browser

```
http://localhost:5173/
```

## Technologies
This application was written using a carefully curated set of libraries

- [React](https://reactjs.org/) - the industry standard for building modern web applications 
- [TypeScript](https://www.typescriptlang.org/) - used to provide type safety over plain JavaScript
- [Tailwind](https://tailwindcss.com/) - a lightweight utility-first CSS framework for styling
- [React Router DOM](https://reactrouter.com/) - used to provide client-side routing
- [React Lazy Load Image Component](https://github.com/Aljullu/react-lazy-load-image-component) - for image loading and UI effects
- [React Loading Skeleton](https://www.npmjs.com/package/react-loading-skeleton) - to build custom loading images
- [SWR](https://swr.vercel.app/) - a collection of hooks for data fetching 
- [Lodash](https://lodash.com/) - a collection of utility functions for data shaping
- [Vite](https://vitejs.dev/) - a bundler used to provide a better development experience

## Architecture
This application follows a standard approach to building a single page application.
- Pages - contains the home page and the info page
- Components - houses the components used by the pages
- Providers - hold application state and exposes it via hooks
- Hooks - custom hooks for fetching show, cast and season information
- Types - a set of common types used across the application

## Responsive
I like to use a mobile-first approach that scales to tablet, laptop and desktop.

This required me to adjust the designs which were desktop-first.

You can resize the browser width to see how the application adjusts accordingly.

## Performance
I optimised for data fetching and image fetching using certain well-known strategies
- Data Fetching - API requests cached via SWR to avoid unnecessary network calls
- Image Fetching - lazy loading was used to only fetch above the fold images

## User Experience
I like to build applications that provide feedback on actions and clarity of context
- Search - a spinner in the search field reassures the user that something is happening
- Blur - cards appear blurred and come into sharp relief suggesting a responsive UI
- Spacing - elements are spaced out and and easy to differentiate from each other 
- Typography - the font used allows for easy reading on both small and large screens

## Developer Experience
Each breakpoint required potentially different styles.

But it was not always clear what the active breakpoint was.

To make this easier for myself, I added visual cues in the footer.

That way I could resize the browser and know what breakpoint was active.

## Future Improvements
Given more time, there are several changes I would like to make
- I18N - Use a language/localisation library instead of hard-coded strings
- Theming - Add support for different themes rather than just one theme
- A11Y - Add support for accessibility for users with specific impairments
- PWA - Add support for allowing application to behave better when offline
- Performance - Profile the application and make any improvements
- Testing - Add some E2E or Unit Tests for increased confidence in correctness
- Compatability - Test across different browser, browser versions and operating systems
- Usability - Test application against actual users to improve UI/UX
