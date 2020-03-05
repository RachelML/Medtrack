# medication-tracker

## Project Description

A user friendly medicaition tracker app that allows a user to create an account and add medication details to reference on a daily basis. User will have ability to edit/delete medication details and pharmacy details. 

## Wireframes

GENERAL MVP - updated workflow 

![alt text]()



## MVP
- User authentication with sign up, login, logout.
- Create, read, update, delete medication info and pharmacy info
- "take" button to decrement pill count by 1 
- button to view medication details
- button to view pharmacy details



## Post-MVP
- pharmacy map with mapbox
- additional logic with pill info  
- incorporate FDA API for additional medication data
- add to calendar feature 
- add a reminder feature
- change password in user auth



## ERD Diagram
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

Sample JSON from GET `/api/users`

  ```
  [
    {
      "name": "Erinn",
      "email": "erinn@erinn.erinn",
      "likes": [
        {
          "name": "Frank"
        }
      ]
    },
    {
      "name": "Frank",
      "email": "frank@erinn.erinn",
      "likes": [
        {
          "name": "Erinn"
        }
      ]
    }
  ]
  ```


## React Component Hierarchy

![alt text]()


## Components

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

_Be sure to document the actual time spent as you progress_

## Additional Libraries
- cors
- express
- react-router-dom
- axios 
- morgan
- passport 
- pg sequelize

## Expected Issçues
routing, user authentication

## Issues and Resolutions

#### ISSUES AND RESOLUTIONS EXAMPLE:


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```

```

## Change Log

Update as neccessary with any changes or directional adjustments made throughout the project week