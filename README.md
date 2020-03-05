# MedTrack - medication tracker

## Overview

A user friendly medicaition tracker app that allows a user to create an account and add medication details to reference on a daily basis. User will have ability to edit/delete medication details and pharmacy details. 


## MVP

MedTrack MVP will allow a user to login and add medications and a pharmacy to their profile. User will be able to edit medication and pharmacy details. Medications will be able to be referenced daily on account and marked as taken


## MVP Goals
- User authentication with sign up, login, logout.
- Create, read, update, delete medication info and pharmacy info
- "take" button to decrement pill count by 1 
- button to view medication details
- button to view pharmacy details

## MVP Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |


## Additional Libraries
- cors
- express
- react-router-dom
- axios 
- morgan
- passport 
- pg sequelize

# MVP Client(Front end)

## Wireframes

GENERAL MVP - updated workflow 

![alt text]()

## React Component Hierarchy

![alt text]()

## Component Breakdown

Breakdown the initial logic defined in the previous sections into stateful and stateless components

| Component | Description | 
| --- | :--- |
| Nav |functional |
| App.js  | class | 
| Login | functional  |
| Register | functional |
| MedList   | functional |
| MedDetail   | functional |
| PharmDetail   | functional |
| CreateMed   | functional |
| EditMed   | functional |

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    Header    |   n   | _The header will contain the navigation and logo._               |
|  Navigation  |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   y   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card |   n   | _The cards will render the post info via props._                 |
|    Footer    |   n   | _The footer will show info about me and a link to my portfolio._ |


## MVP Server (Back End)

## ERD Model
![alt text]()

## Endpoints

USER AUTH functionality 
- POST `/auth/login`
- GET `/auth/verify`

MEDICATION component CRUD functionality 
- GET `/medications`
- POST `/medications`
- GET `/medications/:medid`
- GET `/trips/:departure_city/:destination_city/:travel_date_begin`
- PUT `/medications/:medid`
- DELETE `/medications/:medid`


## Priority Matrix

Render your project priority matrix here

## Timeframes

Estimate the amount of time your team expects to spend on each area of your app

| Component | Estimated Time | Actual Time |
| --- | :---: | :---: |
| css| 15hrs | 15 hrs |
| backend set-up | 6hrs | 12 hrs |
| Front-End Routing | 7hrs | 6 hrs |
| setting up components | 5 hrs | 4 hrs |
| connecting front and backend | 5 hrs | 10hrs |
| Server | 4hrs | 6 hrs |
| pseudocoding | 4hrs | 12 hrs |
| troubleshooting | 4hrs |  20 hrs|
| Total | hrs | 85 hrs |

## Schedule
|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 4th | project proposal worksheet / psuedocoding |
|Mar 5th | project pitch / build out endpoints       |
|Mar 6th | Build out front-end components            |
|Mar 7th | OFF                                       |
|Mar 8th | impliment user auth                       |
|Mar 9th | styling                                   |
|Mar 10th| MVP, begin post-MVP                       |
|Mar 11th| post-MVP                                  |
|Mar 12th| polishing                                 |
|Mar 13th| final presentations                       |

## Post-MVP
- pharmacy map with mapbox
- additional logic with pill info  
- incorporate FDA API for additional medication data
- add to calendar feature 
- add a reminder feature
- change password in user auth
- Oauth

## Project Change Log

> This section should be expanded and revised as you work on your project.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
