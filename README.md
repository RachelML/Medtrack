# :pill: MedTrack 
 medication tracker

## Overview

A user friendly medicaition tracker app that allows a user to create an account and add medication details to reference on a daily basis. User will have ability to edit/delete medication details and pharmacy details. 


## MVP

MedTrack MVP will allow a user to login and add medications and a pharmacy to their profile. User will be able to edit medication and pharmacy details. Medications will be able to be referenced daily on account and marked as taken


## MVP Goals
- User authentication with sign up, login, logout.
- Create, read, update, delete medication info and pharmacy info
- "take" button to notify user pill is taken 
- button to view medication details
- button to view pharmacy details

## MVP Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | react                                    |
|   React Router   | Routing in react                           |
|      Cors        | Cors gem                                   |
|     Axios        | fetch Api data                             |
|  react-moment    | a library to easily display current dates  |
|  react-calendar  | calendar library                           |
|  font-awesome  | icon library                           |




# MVP Client(Front end)

## Wireframes

Mobile

![alt text](https://res.cloudinary.com/rachelml/image/upload/v1583506023/Screen_Shot_2020-03-06_at_9.46.17_AM_lkstsa.png)

Desktop view

![alt text](https://res.cloudinary.com/rachelml/image/upload/v1583433987/Screen_Shot_2020-03-04_at_8.54.29_PM_mwouoj.png)


## React Component Hierarchy

![alt text](https://res.cloudinary.com/rachelml/image/upload/v1583433873/Screen_Shot_2020-03-04_at_8.50.58_PM_z9nnha.png)

## Component Breakdown



|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    Header    |   n   | _The header will contain the "back to home" navigation and logo._        |
|  Navigation  |   n   | _The navigation will provide a link to each of the pages, pharmacy detail and link to home page._       |
|   App        |   y   | _The app will hold state and onchange functions._      |
|   Login      |   n   | _The login will render the login prompt._                 |
|    Register  |   n   | _The registration will show the new user registration._ |
|    MedList   |   y   | _The medlist will display the medication names and basic detail._  |
|  MedDetail   |   y   | _The MedDetail will display all medication information and change state ._       |
| PharmDetail  |   n   | _The gallery will render the posts using cards in flexbox._      |
| CreateMed    |   n   | _The Create Med will allow user to Create medication _                 |
|    EditMed   |   n   | _The Edit Med will allow user to edit medication info._ |


## MVP Server (Back End)

## ERD Model
![alt text](https://res.cloudinary.com/rachelml/image/upload/v1583433885/Screen_Shot_2020-03-04_at_8.51.23_PM_bb489r.png)

## Endpoints

USER AUTH functionality 
- POST `/auth/login`
- GET `/auth/verify`

MEDICATION component CRUD functionality 
- GET `/medications`
- POST `/medications`
- GET `/medications/:medid`
- PUT `/medications/:medid`
- DELETE `/medications/:medid`

- POST `/pharmacy`
- GET `/pharmacy/:pharmid`
- PUT `/pharmacy/:pharmid`
- DELETE `/pharmacy/:phar,id`


## Priority Matrix

![alt text](https://res.cloudinary.com/rachelml/image/upload/v1583433867/Screen_Shot_2020-03-04_at_8.50.47_PM_jgfl4o.png)

## Timeframes

| Component | Estimated Time | Actual Time |
| --- | :---: | :---: |
| css| 12hrs | 12hrs |
| backend set-up | 6hrs | 8hrs |
| Front-End Routing | 7hrs | 2hrs |
| setting up components | 5 hrs | 2 |
| connecting front and backend | 5 hrs | 7hrs |
| passing props/ raising state | 8hrs | 1hr |
| pseudocoding | 4hrs | 4hrs |
| troubleshooting | 4hrs |6hrs |
| Total | 50hrs | 42hrs |

## Schedule
|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 5th | project pitch / build out endpoints       |
|Mar 6th | set up backend, test endpoints            |
|Mar 7th | build front end components                |
|Mar 8th | impliment user auth                       |
|Mar 9th | connect front end and backend             |
|Mar 10th| basic working app setup                   |
|Mar 11th| styling                                   |
|Mar 12th| post mvp                                  |
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
