# Wandr_Client
The front-end of Wandr, my dissertation project.

# Setting up the development environment
You must have Node installed because this project uses gulp (the task runner) to compile and convert scss into css. After installing Node and downloading the project, navigate to the project in your command-line and run the command `npm update`. This will update all development dependencies.

## Compiling SCSS files
Once you've updated all development dependencies and have navigated to the Wandr_Client folder, run the command `gulp watch` and this will update the `style.css` file whenever there is a change to an scss file. 

NOTE: If you save an scss file with broken styles, you will need to re-run the gulp command above.

# Putting the front-end into production
When you are ready to push the site live, you only need to push the following files to your web server: `index.html`, `itinerary.html`, `css` folder and `js` folder.