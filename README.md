

# IT Support Stats - Interactive Frontend Development Project

The IT Support Stats website displays statistics from real information extracted from Zendesk for an IT Support company. Data was only sanitized to remove email addresses etc.
Information being displayed is for December 2018 and conclusions drawn from stats are displayed on the statsinfo page. The data was extracted using the Zendesk API to generate the
JSON file and some fields were sanitized for security purposes.


The deployed project can be accessed on github pages at the following link: <a href="https://britsja.github.io/Interactive-Frontend-Development-Milestone-Project/">IT Support Stats</a>

#

### **Table of Contents**

[User Experience](#user-experience)

[Features](#features)

[Features Left to Implement](#features-left-to-implement)

[Technologies Used](#technologies-used)

[Testing](#testing)

[Deployment](#deployment)

#
 
### User Experience

As a user of the IT Support Stats website, you need to be able to do the following on the website:
- Opening the website needs to show the statistics in the forms of charts and a selection box
- User must be able to click on an element in a chart or selection box to filter the displayed results
- Multiple chart or selection box entries can be used to further filter the shown results
- A user can reset any active filters with a button in the menu
- The stats information page should display conclusions from the administrator regarding the statistics for that month

#

### Features

Home Page - take information from the provided json statistics file and render charts and selection box based on the information
          - Selecting entries on the list box or chart will filter the charts based on the selection. Multiple entries can be selected
          - The menu in the top right contains a button to reset any chart filters that might be active and reset the chart display
          - Navigation entry in menu also links to the "Stats Information" page
          
Home Page Charts - Ticket Type - Selection area with all the support ticket categories that tickets can be filtered by
                 - Ticket by Technician - Information on the total amount of tickets assigned or taken by each technician during the month
                 - Tickets per Facility - The piechart shows the highest call logging companies or facilities
                 - Top 5 users per User ID - Displays the user ID of the top 5 users that logged the most tickets during the month
                 - Tickets per Day - The total amount of tickets opened per day
                 - User ratings by date - Fictitious data was generated for user ratings as this feature wasn't enabled on Zendesk
          
Stats Information - This page displays information inserted by the callcentre administrator which are conclusions based on the months statistics


#

### Features Left to Implement

Data - Allow user to import new json files and display information for different months
Stats Information - Enable the administrator easy access to the cards on the Stats Information page to update conclusions and select and store information for different months
Zendesk Stats - Enable the option on Zendesk to receive user feedback and thus have ratings to display on the scatterplot chart.


#

### Technologies Used

- [HTML](https://www.w3.org/html/)
    - DOCTYPE of **HTML** is used for the markup of this project
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
    - **CSS** used to style the project
- [JQuery](https://jquery.com)
    - The project uses **JQuery Version 3.2.1** to simplify DOM manipulation.
- [Bootstrap](https://getbootstrap.com/)
    - **Bootstrap 4.0.0** front-end component library used to style this project.
- [d3](https://d3js.org/)
    - Used to manipulate documents based on data
- [dc.js](https://dc-js.github.io/dc.js/)
    - Javascript charting library which can be used with multi-dimensional datasets
- [crossfilter](https://github.com/crossfilter/crossfilter)
    - JavaScript library for exploring large multivariate datasets in the browser. 

#

### Testing

Manual website testing was conducted to ensure the functionality of the site and the features are working as required. 

Testing conducted were as follows:

1. Home Page:
    - Clicked on various charts and selection options to ensure data is being filtered based on selections
    - Selected a few filters and clicked on the "Reset Chart Filter" in the menu to reset the chart filters/selections

2. Stats Information:
    - Page loads and displays the manual data in cards with summaries from charts
    - The "Reset Chart Filter" doesn't display on this page which is correct

3. Browsers:
    - Tested site on both Chrome and Firefox web browsers

4. Responsiveness
    - Used chrome developer tools to test site responsiveness in various display sizes

5. Bugs discovered during testing:
    - The Dc/D3 javascript charts aren't very responsive to screen size changes during testing. This is unfortunately no fixable.

#

### Deployment

Github pages was used to host the deployed project.
The project can be found at: https://interactive-frontend-project-ci-janbrits.c9users.io

To deploy the project the following steps were taken:
- Added the latest files to the Github repository:
    - ```git add .```
    - ```git commit -m "Changes made for GitHub Pages deployment"```
    - ```git push```
- On Github, on the project page, opened the Settings tab
- On the project settings page, went down to the "GitHub Pages" Section and selected "Master Branch" under the Source Dropdown.
- The GitHub Pages section will then display the URL to the hosted website

To clone this project, you can use the following command:
    - ```git clone https://github.com/britsja/Interactive-Frontend-Development-Milestone-Project.git```

### Credits

**Content**
- The Json data used on this website was taken with permission from an active Zendesk being used by an IT support company. The data was sanitized to remove any 
  personal information. The data was extracted using the Zendesk API and JSON data needed to be combined from multiple exported files. 

**Media** 
- No images and other media used for this project

**Code**
- Ideas on how to reset the chart data was taken from: https://steemit.com/utopian-io/@faad/tutorial-18-dive-into-dc-js-a-javascript-library-data-count-and-reset-last-tutorial

**Inspiration**
- Code Institute for providing the knowledge and challenge in creating this project.