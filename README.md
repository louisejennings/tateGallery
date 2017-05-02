# Tate Gallery Assignment
## Overview:
For this assignment we were asked to create a theme for a web application. My application presents the art collection curated by the Tate gallery with two perspectives Artworks and Artists. I used Handlebars.js as my templating language and created a layout that could be tweaked using different views to create varying dynamic designs. MongoDB was used as the database backend. The data was broken into two collections each with varying amounts of information. I wanted to utilise both of these collections and allow the user to 
view the records in an aesthetically pleasing manner. 

After investigating both datasets I began to sketch out some ideas and eliminate concepts that were not suitable to both. Due to the vast amount of data available in each collection I wanted my design to be customizable so that more or less information could be presented. I wanted the homepage to be sleek and inviting so I kept the design very minimal. I used the Tate gallery logo as my main focus and a button ‘EXPLORE’ to invite the user to enter the site. 

I created two different style sheets to allow for a choice between a light (style.css) or dark theme (dark.css). These have varying different background colours, hidden elements or block colours, and each section is commented to allow for changes. This theme is highly dynamic for presenting data from many different collections of data. I tested this by importing movies database. I created new views to display the database schema. To view the database collection, I created a hidden navigation accessible in the top left corner of the artwork or artist homepage. Upon hovering over the top left corner a link becomes visible to change to the movies collection. I made the menu hidden because the movie collection is only to be viewed as a demo showing what integration from a different source would look like.

The design I choose for the main pages uses hierarchy and unity to convey the information in a stylish manner. The pattern I choose is a grid style. It contains a large box (350px) in the top left corner which is the main point of focus for each page. I used a linked image box (150px) in the bottom left corner to allow the user to navigate through the collections or back from a page. I wanted these two boxes to be static in their design whereas all the other boxes are customisable with content and visibility depending on the data. These dominant elements provide clear guidance to the user.  

The main page for both collections presents the user with all 9 boxes in unity. The proportions of the boxes are utilizing the negative and positive space around them to create the perception of a grid. This subconsciously creates structure and order for the viewer’s eye. Once a user selects an artwork or artist from the main page they are presented with a similar grid layout. This layout pulls the relevant data for that selection and presents it using a random arrangement of the 7 non-static boxes that are available. To achieve a diverse and customisable design any boxes that are not filled with data are hidden or alternatively if the ‘darkStyle.css’ - filled with colour of your choice. To create a cohesive layout, I ensured the space was kept the same between hidden or block coloured boxes creating unity.

In order to filter through the collections, I decided to allow certain data to be clickable. I didn’t want to ruin the simplistic design with a menu or checkboxes for searching so I introduced a hover effect over the filterable elements. For example - if a user moves their mouse over the year, a transition effect displays ‘SEE MORE’ to the user and once clicked will return another artwork from this year and render the page to the appropriate layout. 

Each filterable element layout is customisable. To help understand the layout I commented the grid in the html e.g. TOP LEFT, BOTTOM RIGHT in accordance with the design. This allows for simple rearranging depending on the design. I created custom partials to allow code to be reused throughout the application in varying different circumstances. For example -  I styled the {{> hidden}} partial to allow for the removal of a box from the grid without disturbing the positioning of other elements. 

For this assignment I took advantage of Handlebars.js’ abilities and created custom helpers.  These allowed me to present the data in a more suitable manner. For example - I display the first initial of the artist’s name followed by the surname (R. Blake) instead of the full name, however I still use the full name to accurately filter the search. 

The interaction a user can do with this web application is customisable as more or less elements can be added for filtering depending on the database. The hover effects create a playful yet stylish interface encouraging the user to interact. The layout and style properties of the boxes are versatile, this is demonstrated with the dark and light stylesheets. The inclusion of the movies database determines the theme is reusable with different datasets.

## Future Developments:
The current design allows for future developments of this web application. Updates could include different features such as an image lightbox. This would bring focus to the selected element in a large viewing area. Another development is changing the font style of the presented data with distinct colours to represent the recurring type e.g. blue for year, red for artist name. Using a diamond with the same proportional sizes instead of a box shape could create a similar theme that may be suited to a different dataset.


Homepage: 
![alt text](https://github.com/louisejennings/tateGallery/blob/master/screenshots/homepage.png "Homepage")


Artwork and Artist Home Pagse: 
![alt text](https://github.com/louisejennings/tateGallery/blob/master/screenshots/homeScreens.png "Artwork and Artist Home Pages")


Filter through attributes: 
![alt text](https://github.com/louisejennings/tateGallery/blob/master/screenshots/filterScreens.png "Filter through attributes")


Hover over effect for filtering: 
![alt text](https://github.com/louisejennings/tateGallery/blob/master/screenshots/hoverOption.png "Hover Option Filtering")


Movies Database (resusable template design): 
![alt text](https://github.com/louisejennings/tateGallery/blob/master/screenshots/%20moviesDatabase.png "Reusable Template Design")


Optional Dark Theme: 
![alt text](https://github.com/louisejennings/tateGallery/blob/master/screenshots/darkTheme.png "Optional Dark Theme")
