# Expense Tracker

A basic web app to provide CRUD feature for tracing expenses.

- Built with Node.js / Express / MongoDB
- Let user to sort, browse, add, edit, delete expense records

## Features

- Show all expenses at landing page and display the total amount of expenses.
- You can add an expense.
- You can edit category after adding.
- You can delete any expenditure.
- You can select the drop-down menu to filter the expenditure category and see the total expenditure of the category.

## Demo

- Landing page
  ![home](/public/photos/home.jpg)

- Add a new expense
  ![new](/public/photos/new.jpg)

## Prerequisites

```
Node.js 10.15.0
```

## Installation and execution

**1. Save the project to local**

- git clone https://github.com/emilycodeee/expense-tracker.git

**2. Enter the project folder (shortURL) and use the terminal to install related packages**

```
npm install
```

**3. Import seed data**

```
npm run seed
```

**4. Use nodemon to start the project server**

```
npm run dev
```

**5. If the following string appears on the terminal, the server has been successfully started**

Express is listening on http://localhost:3000

## Environment

- Node.js v14.15.1 -Execution environment
- Express v4.17.1 -Framework
- Express-handlebars v5.2.0 -Template engine
- mongoDB Community Serve v4.2.12 -Database
- mongoose v5.11.14 -ODM
- body-parser v1.19.0
- method-override v3.0.0
