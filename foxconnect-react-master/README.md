# 🦊 FoxConnect – Interview Assignment

## Simple social feed using React (Frontend Only)

### 📋 General Overview

Your task is to build a minimalist social media-style frontend app in **React**.  
The application should list posts and allow the user to create new ones. All data is handled on the frontend – no backend connection is required.

Think of this as a lightweight Twitter clone with just two features:

- Viewing a list of posts 📝
- Adding a new post ➕

The goal is to demonstrate your React fundamentals – component structure, state management, props, and code clarity.

### ⌛ Time Tracking

There is no strict time limit for this assignment.  
However, please **honestly track the time** you spend and include it in this README.

More importantly, focus on delivering a solution that **best reflects your skills** and would be **realistic in a production environment**.

The **quality of your code** is the highest priority — clean, readable, and maintainable code matters most.

### 🤖 Prerequisites

Node and npm should be installed on your machine.

### ⚙️ Environment

Install dependencies:

`npm i`

Run application in development:

`npm run dev`

Visit site on:

`http://localhost:3000/`

### ❓ Problem 1: Unnecessary posts

It can be really frustrating when you accidentally share a message before it’s ready. Most social media platforms offer a way to delete posts to avoid this problem. Currently, FoxConnect lacks this functionality.

### ❗️ Task 1: Implement post deletion functionality

Implement a functionality that allows users to delete posts. Since there is no authentication or user management in this app, **any user can delete any post**.

**IMPORTANT**: To prevent accidental deletions, the feature must include a confirmation step before the post is permanently removed.

Feel free to install and use any **new components from the [shadcn/ui](https://ui.shadcn.com/)** library.

### ❓ Problem 2: Incorrect posts

Often, we only notice a typo or mistake after posting. In these cases, deleting the entire post feels like overkill — usually a quick edit is all that’s needed.

### ❗️ Task 2: Implement post editing functionality

Build a functionality that enables users to update and correct existing posts. This will improve the user experience by allowing quick fixes without the need to delete and recreate posts.

Please prioritize clean, maintainable code and adhere to best practices throughout your implementation.  
Remember, since there is no authentication, any user can edit any post.

Consider how the editing UI will work smoothly and intuitively.

<hr>

Time spent on this project: 2 hours

### 🍀 We wish you good luck, hope you'll enjoy the exercise. 🤞
