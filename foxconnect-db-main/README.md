# 🦊 FoxConnect – Database

## Server Order Managing Database

### 📋 General Overview

Your task is to extend the base database with some functions to help the warehouse managing the orders and the stock of servers. 💻

The goal is to map business logic and manufacturing/logistics processes into database elements (Trigger, View, SP, Job)

### ⌛ Time Tracking

There is no strict time limit for this assignment.  
However, please **honestly track the time** you spent on the excercise and include it in this README.

More importantly, focus on delivering a solution that **best reflects your skills** and would be **realistic in a production environment**.

The **quality of your code** is the highest priority — clean, readable, and maintainable code matters most.

### 🤖 Prerequisites

SQL Server (Express) installed on your machine or on a server.

Create the tables by building the project to FoxConnect database

### ⚙️ Environment

IDE of your choice (SSMS, VSCode, VS)

### ❗️ Task 1: Data Integrity and Stock Level

Create an  `AFTER UPDATE` trigger on `ServerModels` table! 

**Requirement**: When the `Available` field of a server model is updated (for example due to new production or shipment):

1. Update the given row's `LastUpdate` value to the actual date and time (`GETDATE()`)

2. If the `Available` value were to become negative (due to faulty data entry), revert the transaction (ROLLBACK) and return an error message (for example "The stock can not be negative!") 

### ❗️ Task 2: Sales Overview and Simplicity

Create a view that displays information relevant only to the sales team, focusing on the total financial value of pending orders.

**Requirement**: Create a view named `CurrentOrderValue` that lists only the orders that are not yet processed (`Processed = 0`).

- The view must include the following columns: `CustomerCompanyName`, `ModelName`, `OrderQty`, and a new column: `TotalAmount`.

- The TotalAmount should be calculated as: `OrderQty` * `BasePrice`.

### ❗️ Task 3: Business Logic

Create a stored procedure to handle the processing of a customer order.

**Requirement**: Create a stored procedure named `SP_ProcessOrder` that accepts the `OrderID` as an input parameter.

1. Check if the given `OrderID` exists and has not yet been processed (`Processed = 0`).

2. Check if the quantity required for the order (`OrderQty`) is available in stock (`ServerModels.Available`).

3. If both conditions are met:

  - Set the `Processed` field to 1 in the corresponding order row.

  - Decrease the `Available` field for the appropriate server model by the value of `OrderQty`.

4. Return a confirmation message (e.g., `SELECT 'Order successfully processed and stock reduced.'`).

5. If the order is already processed or there is insufficient stock, return an appropriate error message.

### ❗️ Task 4: Scheduled Task

Create an SQL Agent Job (or a suitable scheduling mechanism for the database used) to flag overdue orders.

**Requirement**: Create a Job named `Job_OverdueDeadlinesAlert` that:

1. Runs every Monday at 8:00 AM.

2. Creates (or overwrites) a temporary table named `OverdueOrders`.

3. **Inserts** into this table the `OrderID`, `CustomerCompanyName`, and `DeadlineDate` of all orders whose `DeadlineDate` is older than today's date (`GETDATE()`) AND are not yet processed (`Processed = 0`).

4. The purpose of the table is to provide visibility of backlogs to production planning.

<hr>

Time spent on this project: [should be filled by you]

### 🍀 We wish you good luck, hope you'll enjoy the exercise. 🤞
