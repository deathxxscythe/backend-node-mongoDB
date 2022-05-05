# Grow: Work - Backend

This repo is subject to large changes as this project evolves. To learn more about the over all project please visit the repo listed below.

## Related Frontend Repo

[React Native App](https://github.com/Dionne-Stratton/grow-work-frontend-react-native)

## Tech Stack - subject to change

• MongoDB / Mongoose

• Node / Express

• JavaScript

• Json webtokens

## Instalation and Starting

• Npm i - install dependencies

• Npm start - run app with node

• Npm run server - rup app with nodemon

## Back-End url

Base URL: http://localhost:5000 - to be deployed

## Data Structures

### Users

| data     | type   | required |
| -------- | ------ | -------- |
| id       | number | no       |
| email    | string | yes      |
| password | string | yes      |

### Profiles - to be added

| data        | type   | required |
| ----------- | ------ | -------- |
| user_id     | number | yes      |
| first_name  | string | yes      |
| last_name   | string | yes      |
| location    | string | yes      |
| profession  | string | yes      |
| bio         | string | yes      |

## End Points

### Authentication Routes

| Method | Endpoint          | Token Required | Description                                                          |
| ------ | ----------------- | -------------- | -------------------------------------------------------------------- |
| POST   | `/auth/signup` | no             | Registers a new user <br> Required: email and password.              |
| POST   | `/auth/signin` | no             | Signs in user and returns a token.<br> Required: email and password. |

### Profile Routes - to be added

| Method | Endpoint         | Token Required | Description                  |
| ------ | ---------------- | -------------- | ---------------------------- |
| GET    | `/profiles`      | yes            | Returns all profiles         |
| GET    | `/profiles /:id` | yes            | Returns single profile by id |
| POST   | `/profiles `     | yes            | Returns newly added profile  |
| PUT    | `/profiles/:id`  | yes            | Returns newly updated profile|
| DELETE | `/profiles/:id`  | yes            | Deletes a single profile     |


