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

| data         | type   | required |
| ------------ | ------ | -------- |
| id           | number | no       |
| email        | string | yes      |
| password     | string | yes      |
| account_type | number | yes      |

### Professionals

| data          | type   | required |
| ------------- | ------ | -------- |
| user_id       | number | yes      |
| first_name    | string | yes      |
| last_name     | string | yes      |
| country       | string | yes      |
| profession    | string | yes      |
| contact_email | string | no       |
| phone         | string | no       |
| bio           | string | no       |
| links         | object | no       |

### Professionals Links Object

| data        | type   | required |
| ----------- | ------ | -------- |
| linkedin    | string | no       |
| facebook    | string | no       |
| instagram   | string | no       |
| twitter     | string | no       |
| porfolio    | string | no       |
| other       | string | no       |

### Companies

| data          | type   | required |
| ------------- | ------ | -------- |
| user_id       | number | yes      |
| company_name  | string | yes      |
| location      | string | yes      |
| sector        | string | yes      |
| contact_email | string | no       |
| phone         | string | no       |
| description   | string | no       |
| links         | object | no       |

### Companies Links Object

| data        | type   | required |
| ----------- | ------ | -------- |
| linkedin    | string | no       |
| facebook    | string | no       |
| instagram   | string | no       |
| twitter     | string | no       |
| website     | string | no       |
| other       | string | no       |

## End Points

### Authentication Routes

| Method | Endpoint       | Token Required | Description                        |
| ------ | -------------- | -------------- | ---------------------------------- |
| POST   | `/auth/signup` | no             | Registers a new user.              |
| POST   | `/auth/signin` | no             | Signs in user and returns a token. |

### Professionals Routes

| Method | Endpoint              | Token Required | Description                       |
| ------ | --------------------- | -------------- | --------------------------------- |
| GET    | `/professionals`      | yes            | Returns all profesionals profiles |
| GET    | `/professionals /:id` | yes            | Returns single profile by id      |
| POST   | `/professionals `     | yes            | Returns newly added profile       |
| PUT    | `/professionals/:id`  | yes            | Returns newly updated profile     |
| DELETE | `/professionals/:id`  | yes            | Deletes a single profile          |

### Companies Routes

| Method | Endpoint          | Token Required | Description                  |
| ------ | ----------------- | -------------- | ---------------------------- |
| GET    | `/companies`      | yes            | Returns all company profiles |
| GET    | `/companies /:id` | yes            | Returns single profile by id |
| POST   | `/companies `     | yes            | Returns newly added profile  |
| PUT    | `/companies/:id`  | yes            | Returns newly updated profile|
| DELETE | `/companies/:id`  | yes            | Deletes a single profile     |
