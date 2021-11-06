## Tesla homepage clone

This was based on the tutorial by Clever Progammer at [Building the Tesla clone with Reactjs](https://www.youtube.com/watch?v=lUeS9Wsj6dk). Except instead of regular Reactjs, this was build using Typescript and using json-server and Redux toolkit.

### Approach

1. The page is divided into two components a Header which is always fixed to the top and a Home which is the body of the page.
1. The body consists of Sections which are another component. Each section will have two divs one at the top, another at the bottom. These are formatted using flex, and they are justify-content to space-between. 
1. The styling is done with styled components. Be sure to instal the types for styled components as well. 
1. Within the section, every Wrap(styled component) is of 100vh, with the background image being an image which is center, center/cover, no-repeat.
1. The background image is brought in from data fetched on useEffect with an empty array as the starting object. The data is fetched from a json file that is fake hosted with json-server. The data is then obtained using useSelector and passed into Wrap as props, then using props, it is passed into the background url. Be sure to put the images in the public folder so they can be accessed without importing (due to webpack).
1. For the down arrow that bounces, use a css animation with keyframe percentages and transform: translateY() at various percentages. Make sure to make the animation infinite.
1. The header is to use flex as well with justify-content space-between to keep one on the left, one in the center, and one on the right.
1. Within the header create a side menu bar component that opens up with a menu bar click which in turn changes a state. Put in a transform that does translateX(0) if the openMenu state is set to true, else translateX(100%). Give a transition time of say 0.2s and use ease-in-out.
1. Be sure to create a type for the props of the styled div and next to div in angle brackets mention the type of the props next to the styled.div.
1. Install react-reveal for the Fade bottom effect on the text on the top and bottom of section. To make this work with typescript create a react-reveal.d.ts in the root folder. In it put the following:
    ```
    declare module 'react-reveal' {
        export const Zoom: React.FC;
    }
    ```
