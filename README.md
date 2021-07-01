# Capstone: SETBREAK

This application was made for part of my capstone project for the Bloc/Thinkful Web Development course. It is a concert tracker application to be used by concert attendees that allows for the tracking of concerts and details about the concert, including the artist, venue, date, highlights, and other notes. This application was built to meet the specifications laid out by the Bloc/Thinkful course. The project's server-side code can be viewed on its GitHub repository here: https://github.com/sneakin-allie/setbreak-api

## Live Application

This application can be viewed here: https://setbreak-sneakin-allie.vercel.app/

The backend API is currently running here: https://vercel.com/sneakin-allie/setbreak/66RtADMKRviWkg74npPznViTsmSA

Both are hosted on Vercel with the SQL Database hosted on Heroku.

## Summary

SETBREAK has four main page branches. The Home/Landing Page, Concert Collection Page, Add New Concert Page, and Edit Concert Page.

The Home/Landing Page has concise instructions on what the application does and how to get started, as well as Sign Up and Log In forms for new users and existing users respectively. 

The Concert Collection Page lists a user's concerts with details the user has saved. The top of the page has an "Add New Concert" button for easy access and each concert listed has an "Edit" button so that users can edit all fields as desired.

The Add New Concert Page displays a form where a user can enter information about a concert, including the artist, venue, date, highlights, and notes. Only the artist and venue are required at first so that a user can quickly save a concert and return to it later to add details about date, highlights, and notes.

The Edit Concert Page displays a form where a user can update information about a concert that has been saved. The input fields auto-fill with the previously saved information so the user can make accurate edits where desired. At the bottom of the form, there is a "Delete" button that deletes the concert from the collection.

## Process

The design and implementation of this application came to life through multiple steps, each of which was approved by the grading team along the way. First, I wrote a proposal describing my project idea and the name for my application. Next, I wrote user stories to guide in development and edited the list to conform with the Pareto Principle, also known as the 80-20 rule. User stores were prioritized to focus my effort on the most needed ones. Then, I set up a Kanban board to manage my project and used it to keep track of my user stories and any issues with the application. Next, I created user flows and wireframes. This included creating a screen inventory, HTML wireframes for each page using HTML and CSS, and user flows for each wireframe. Using the wireframes and user flows, I built and implemented a static version of the client-side. I presented this to users to get initial feedback and did a round of iteration to address issues that came up. Next, I implemented the full MVP of the application, including the API and database. Once again, I did a final round of collecting user feedback and iterating. Finally, I styled the application with typography, color, and a responsive layout.

## Technology Used

The front-end of this project was built in React, using Router, class components, state, props, and vanilla CSS. An API was created that handled all promises necessary to interact with the back-end API database.

The back-end of this project was built using Node.js, Express, PostgreSQL, and Knex. RESTful APIs were used along with middleware including Morgan, Express.json, Helmet, and CORS. CORS was implemented to ensure connection between the front-end application and back-end API.
