# dance-studio-app

#Share your favorite dance exercices through online platforms

# Retro

![](https://media.giphy.com/media/3o7aD2CXkN6owI3wMU/giphy.gif)

- [Overview](#Overview)
  - [Core Features](#Core-Features)
  - [Goals](#Goals)
  - [Team](#Team)
  - [Permissions](#Permissions)
- [MVP](#MVP)
  - [Client (Front End)](#Client-Front-End)
    - [Wireframes](#Wireframes)
    - [Component Hierarchy](#Component-Hierarchy)
    - [Component Breakdown](#Component-Breakdown)
    - [Component Estimates](#Component-Estimates)
  - [Server (Back End)](#Server-Back-End)
    - [ERD Model](#ERD-Model)
    - [Data Heirarchy](#Data-Heirarchy)
    - [Data Heirarchy](#Data-Heirarchy-1)
  - [Dependencies](#Dependencies)
- [Post-MVP](#Post-MVP)
- [Code Showcase](#Code-Showcase)
- [Code Issues & Resolutions](#Code-Issues--Resolutions)

<br>

## Overview

_**Retro ** Dance like nobody's watching. Like it's 1986. @home_

### Core Features

- _Full-stack, full-CRUD app, utilizing a RESTful JSON API with the so-called "React on Rails" stack_

### Goals

- Have a **RESTful JSON API**.
- Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
- Build a database with at least 3 tables:

  - 1 user table
  - 2 other tables, of your choosing
  - There must be at least 2 pairs of associated tables. (1:m _or_ m:m)
  - Utilize **Rails** to define models for interacting with the database.
  - Implement Authentication using **JWT**.
  - Implement working generic controller actions for full-CRUD (`index`, `show`, `create`, `update`, `delete`) between the 2 non-user tables AND partial-CRUD (`create`, at least) for the user table.

- Have a working, interactive **React** app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use _only_ React for DOM Manipulation.
- Consume data from your **Ruby on Rails API**, and render that data in your components.
- Utilize **React Router**, for client-side routing.
- Utilize Authentication, permitting the user to:
  - Register, login, and send authenticated requests.
  - Perform `index` or `show` actions, **whether or not they are logged in**.^
  - Perform `create`, `update`, and `delete` actions **when logged in**.

### Permissions

Digital assets used with full licensing and permission from [Unsplash](). Digital assets stored locally and on [Imgur]().

<br>

## MVP

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

- Desktop Landing

<img src="./landing.png" align="center" height="auto" width="900" >

- Classes list

<img src="./dance_classes.png"  height="auto" width="900" >

- login/register

<img src="./login_register.png"  height="auto" width="900" >

- one dance

<img src="./one-dance.png"  height="auto" width="900" >

- edit

<img src="./edit.png" height="auto" width="900" >

- create

<img src="./create.png"  height="auto" width="900" >

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ client/
  |__ App.jsx
  |__ Index.jsx
  |__ src/
    |__ components/
        |__ Header.jsx
        |__ Main.jsx
          |__ Hero.jsx
          |__ Login.jsx
          |__ Register.jsx
          |__ DanceList.jsx
            |__ DanceDetails.jsx
            |__ CreateItem.jsx
              |__ EditList
              |__ DeleteItem
|__ services/
    |__ apiConfig.jsx
```

```

#### Component Breakdown

![Dummy Link](https://i.imgur.com/iffMhUh.png)

#

### Server (Back End)

#### ERD Model

![Dummy Link](https://i.imgur.com/wfy9MNa.png)

#### Data Heirarchy

> Use this section to display the database, table, and attribute heirarchy.

```structure

database_db
|__ users/
|__ category/
|__ classes/
|__ instructors/

```

#### Data Heirarchy

> Use this section to display the expected endpoints from your API.

<br>

### Dependencies

|    Library    |
| :-----------: |
|     React     |
| React Router  |
|     axios     |
| ruby on rails |

<br>

---

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- only allow the users that posted the dance workout to edit/delete it
- instructors /
- youtube videos

---
