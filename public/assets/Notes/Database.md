# ❓ What is SQL?

**Answer:**  
SQL (Structured Query Language) is a programming language used to interact with databases. 🗃️ It is the standard language for querying, inserting, updating, and managing data stored in relational databases.

---

## 📚 Real-World Example: Library Analogy

Think of a **database** as a **📖 library**, and **SQL** as the language used to communicate with the **👩‍💼 librarian (Database Management System)**.

- A **🎓 student or 👨‍🏫 teacher** comes to the librarian and asks for a specific **📘 book**.
- The **librarian** searches for the book in the library’s catalog (database) using that request.
- Once found, the librarian **retrieves** the book and **hands it over** to the student/teacher.

This is similar to how SQL works:

- The **user** sends an SQL query (like `SELECT * FROM Books WHERE Title = 'Database Systems'`)  
- The **DBMS** processes this query  
- It **returns the result** to the user — in this case, the information about the requested book 📄.

---

## ❗ Why we use SQL?

SQL is used for:

- 🔍 **Data Retrieval**: To fetch specific data from a database.
- ✍️ **Data Manipulation**: To insert, update, or delete data in a database.
- 🏗️ **Data Definition**: To create, modify, or drop database structures such as tables, indexes.
- 🛡️ **Data Control**: To manage access to data, including user authentication and authorization.
- 📈 **Data Analysis**: To perform complex queries and data analysis tasks.
- 🔗 **Data Integration**: To combine data from multiple sources into a single database.
- 💾 **Data Backup and Recovery**: To create backups of the database and recover data in case of loss.
- 🔒 **Data Security**: To ensure the integrity and security of the data.
- 🧾 **Data Auditing**: To track and monitor changes to the data.
- 🧮 **Data Reporting**: To generate reports based on the data.
- 🧠 **Data Mining**: To discover patterns and relationships in the data.
- 🏢 **Data Warehousing**: To create a centralized repository of data for analysis and reporting.
- 🚚 **Data Migrations**: To move data from one database to another.

---

## 🌐 SQL used in the following areas 

- **👨‍🔬 Data Scientist**
- **📊 Data Analyst**
- **🛠️ Data Engineer**
- **💼 Business Analyst**
- **🧑‍💻 Database Administrator**

## ❓ What is Data?

**Answer:**  
Everything can be considered as **data**. 💡  
For example, any **🏦 financial institution** has details related to its **👨‍💼 employees**, **👥 customers**, and their **💳 services**.
It can be in any form such as **📝 text**, **🖼️ images**, **🎥 videos**, **📄 documents**, or even a single **🔤 character** itself.

# 🗂️ Types of SQL Commands

SQL commands are categorized into five main types:

---

## 🛠️ DDL – Data Definition Language

Used to define and manage all structures in a database.

| **Command** | **Used For** | **Example** |
|-------------|--------------|-------------|
| `CREATE` 🏗️ | Create new database objects (tables, views, etc.) | `CREATE TABLE employees (id INT, name VARCHAR(100));` |
| `ALTER` 🔧 | Modify existing database objects | `ALTER TABLE employees ADD email VARCHAR(100);` |
| `DROP` 💣 | Delete database objects completely | `DROP TABLE employees;` |
| `TRUNCATE` 🚮 | Delete all rows from a table quickly | `TRUNCATE TABLE employees;` |

---

## 📝 DML – Data Manipulation Language

Used to manipulate data in existing tables.

| **Command** | **Used For** | **Example** |
|-------------|--------------|-------------|
| `INSERT` 🧾 | Add new data | `INSERT INTO employees (id, name) VALUES (1, 'John');` |
| `UPDATE` ✏️ | Modify existing data | `UPDATE employees SET name = 'Jane' WHERE id = 1;` |
| `DELETE` 🗑️ | Remove data | `DELETE FROM employees WHERE id = 1;` |
| `MERGE` 🔀 | Merge rows from two tables | `MERGE INTO sales USING new_sales ON (sales.id = new_sales.id) WHEN MATCHED THEN UPDATE SET ...` |
| `CALL` ☎️ | Execute stored procedure | `CALL GetEmployeeDetails(1);` |
| `EXPLAIN` 📊 | Analyze query performance | `EXPLAIN SELECT * FROM employees;` |
| `LOCK` 🔒 | Lock table or row | `LOCK TABLE employees IN EXCLUSIVE MODE;` |
| `UNLOCK` 🔓 | Unlock table or row | _(Varies by DBMS)_ |

---

## 🔐 DCL – Data Control Language

Used to manage permissions and access control.

| **Command** | **Used For** | **Example** |
|-------------|--------------|-------------|
| `GRANT` 🎟️ | Give permissions to users | `GRANT SELECT ON employees TO user1;` |
| `REVOKE` ⛔ | Remove permissions from users | `REVOKE SELECT ON employees FROM user1;` |

---

## 🔍 DQL – Data Query Language

Used to query and retrieve data.

| **Command** | **Used For** | **Example** |
|-------------|--------------|-------------|
| `SELECT` 🔎 | Retrieve data from tables | `SELECT * FROM employees;` |

---

## 🔄 TCL – Transaction Control Language

Used to manage database transactions.

| **Command** | **Used For** | **Example** |
|-------------|--------------|-------------|
| `COMMIT` ✅ | Save all changes made in the transaction | `COMMIT;` |
| `ROLLBACK` ❌ | Undo changes since the last commit | `ROLLBACK;` |
| `SAVEPOINT` 🛑 | Set a savepoint for partial rollbacks | `SAVEPOINT before_update;` |
| `RELEASE` 🧹 | Remove a savepoint | `RELEASE SAVEPOINT before_update;` |
| `SET TRANSACTION` ⚙️ | Set transaction properties | `SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;` |


# 🆚 Difference Between SQL and NoSQL

| Feature | SQL Databases 🗃️ | NoSQL Databases 🌐 |
|--------|------------------|-------------------|
| **Data Model** | Relational (tables with rows and columns) | Non-relational (document, key-value, wide-column, graph) |
| **Schema** | Fixed schema (predefined structure) | Dynamic schema (flexible structure) |
| **Scalability** | Vertically scalable (scale-up) | Horizontally scalable (scale-out) |
| **Examples** | MySQL, PostgreSQL, Oracle, SQL Server | MongoDB, Cassandra, Redis, Couchbase |
| **Best For** | Structured data with complex queries | Unstructured or semi-structured data, fast development |
| **Query Language** | SQL (Structured Query Language) | Varies by database (e.g., MongoDB uses JSON-like queries) |
| **Transactions** | Strong ACID compliance | Some support BASE (eventual consistency), limited ACID |




# 📘 SQL Commands with Examples

A complete reference of SQL commands with syntax and real-world examples.

---

## 🏗️ CREATE DATABASE

Creates a new database.

```sql
CREATE DATABASE COMPANY;
```

---

## 🗑️ DROP DATABASE

Deletes an existing database permanently.

```sql
DROP DATABASE COMPANY;
```

---

## 🏗️ CREATE TABLE

Creates a new table in the selected database.

```sql
CREATE TABLE EMPLOYEE (
  EMPLOYEE_ID INT PRIMARY KEY,
  NAME VARCHAR(255) NOT NULL,
  AGE INT
);
```

---

## ➕ INSERT DATA

Inserts a new row of data into the table.

```sql
INSERT INTO EMPLOYEE (EMPLOYEE_ID, NAME, AGE)
VALUES (1, 'John Doe', 25);
```

---

## ♻️ UPDATE DATA

Modifies existing data in a table.

```sql
UPDATE EMPLOYEE
SET AGE = 26
WHERE EMPLOYEE_ID = 1;
```

---

## 🗑️ DELETE DATA

Removes data from a table based on a condition.

```sql
DELETE FROM EMPLOYEE
WHERE EMPLOYEE_ID = 1;
```

---

## 🔍 SELECT DATA

Retrieves data from one or more tables.

```sql
SELECT * FROM EMPLOYEE
WHERE AGE > 25;
```

---

## 💣 DROP TABLE

Deletes a table and all its data permanently.

```sql
DROP TABLE EMPLOYEE;
```

---

## 🧹 TRUNCATE TABLE

Deletes all rows from a table without removing the table itself.

```sql
TRUNCATE TABLE EMPLOYEE;
TRUNCATE TABLE EMPLOYEE RESTART IDENTITY;
```

---

## 🛠️ ALTER TABLE

### ➕ Add a Column

Adds a new column to an existing table.

```sql
ALTER TABLE EMPLOYEE
ADD EMAIL VARCHAR(255);
```

### 📝 Modify a Column

Changes the data type or properties of a column.

```sql
ALTER TABLE EMPLOYEE
MODIFY AGE SMALLINT;
```

### ❌ Drop a Column

Removes a column from a table.

```sql
ALTER TABLE EMPLOYEE
DROP COLUMN EMAIL;
```

---

## ✅ COMMIT

Saves all changes made during the current transaction.

```sql
COMMIT;
```

---

## ❌ ROLLBACK

Reverts changes made during the current transaction.

```sql
ROLLBACK;
```

---

## 🛑 SAVEPOINT

Sets a point within a transaction to rollback to.

```sql
SAVEPOINT before_update;
```

---

## 🧹 RELEASE SAVEPOINT

Deletes a savepoint created in a transaction.

```sql
RELEASE SAVEPOINT before_update;
```

---

## ⚙️ SET TRANSACTION

Sets the isolation level for a transaction.

```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
```

---
