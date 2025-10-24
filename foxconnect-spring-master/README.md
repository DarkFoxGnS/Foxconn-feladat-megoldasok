# 🦊 FoxConnect – Interview Assignment

## Simple social feed using SpringBoot🍃(Backend Only)

### 📋 General Overview

Your task is to build a minimalist social media-style app backend in **Spring**.  
The application should list posts and allow the user to create new ones or update existing ones.

More importantly, focus on delivering a solution that **best reflects your skills** and would be **realistic in a production environment**.

The **quality of your code** is the highest priority — clean, readable, and maintainable code matters most.

### 🤖 Prerequisites

JDK 17 or newer and Apache Maven should be installed on your machine.
Here is an URL to Maven: https://maven.apache.org/install.html

### ⚙️ Environment
You need to configure maven home and java home in your computer's environment variables before you start the task.
Install the Docker Desktop application.🐋

After you have pulled the project, open a CMD in the folder where the project is located. Type the following command: docker compose up

**IMPORTANT :** The Docker Desktop application must be running.
This will run a Postgre database locally on your machine.
The application is configured to connect to this database. If you want to check your solution, you can connect to it either from the development environment you are using or with a third party application (DBeaver etc).

### ❗️ Tasks

In the project, I marked all the tasks with TODOs.

**Additional tasks :**
- Set "title" to a minimum of 1 and a maximum of 50 characters.
- Set "body" to a minimum of 1 and a maximum of 2000 characters.
- Exception handling

Please write a short note on the way/approach you used to solve the task.

Recommended programs for API testing: Postman, Insomnia.

### ⭐ Additional task 1 (nice to have)

Create a validation layer between the controller and service classes that checks the correctness of the data received in the DTO.

### ⭐ Additional task 2 (nice to have)

We want all users to be happy with the system. Testing is therefore an essential part of software development. If you have the opportunity, create Unit Tests for the project. Aim for the highest possible code coverage.

<hr>

### 🍀 We wish you good luck, hope you'll enjoy the exercise. 🤞
