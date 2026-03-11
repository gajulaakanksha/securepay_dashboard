# SecurePay Dashboard

A modern and responsive fraud monitoring dashboard built using **React.js** and **Tailwind CSS**.  
The dashboard simulates how financial institutions monitor transactions and detect potential fraud in real time.

This project is part of the **SecurePay AI Fraud Detection System**, which combines machine learning fraud detection with a monitoring interface.

---

## Project Overview

Financial institutions process thousands of transactions every minute. Monitoring suspicious activity quickly is essential to prevent fraud.

The **SecurePay Dashboard** provides a clean interface to visualize transaction data, fraud alerts, and risk scores.

The goal of this project is to simulate how a real fraud monitoring system might look in a production fintech environment.

---

## Features

### Transaction Summary Cards
The dashboard displays key metrics:

- **Total Transactions:** 1,240  
- **Fraud Detected:** 43  
- **Risk Score Average:** 72%  
- **Amount Blocked:** ₹2,34,000  

These cards provide a quick overview of the system’s status.

---

### Transaction Monitoring Table

Each transaction contains:

| Field | Description |
|------|-------------|
| Transaction ID | Unique identifier for the transaction |
| Amount | Transaction amount |
| Status | Safe / Suspicious / Fraud |
| Risk Score | Fraud risk percentage |

Status is color-coded for quick identification:

- **Green:** Safe
- **Orange:** Suspicious
- **Red:** Fraud

---

### Real-Time Fraud Alert (Simulated)

The dashboard highlights high-risk transactions using a fraud alert banner.

Example:

Transaction TXN1003 flagged as Fraud (Risk Score: 95%)


This simulates how real fintech platforms notify analysts about suspicious activity.

---

## Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS
- **Language:** TypeScript / JavaScript
- **Development Tool:** VS Code

---

## Project Structure

securepay-dashboard
│
├── src
│ ├── App.tsx
│ ├── styles.css
│
├── public
│
├── package.json
│
└── README.md


---

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/your-username/securepay-dashboard.git
```

Navigate to the project folder:


# SecurePay Dashboard

SecurePay Dashboard is a simple and responsive **fraud monitoring dashboard** built using **React.js** and **Tailwind CSS**.  
It simulates how financial institutions monitor transactions and identify suspicious or fraudulent activities.

---

## Project Overview

The goal of this project is to build a **clean and professional frontend dashboard** that displays transaction metrics and highlights potential fraud risks.

The dashboard includes summary statistics and a transaction table that categorizes transactions based on their risk status.

---

## Features

### 1. Header
Displays **SecurePay branding** at the top of the dashboard.

---

### 2. Summary Cards

The dashboard shows four key metrics:

- **Total Transactions:** 1,240  
- **Fraud Detected:** 43  
- **Risk Score Average:** 72%  
- **Amount Blocked:** ₹2,34,000  

These cards provide a quick overview of transaction activity.

---

### 3. Transactions Table

The dashboard includes a transaction table with the following columns:

| Column | Description |
|------|-------------|
| Transaction ID | Unique identifier for the transaction |
| Amount | Transaction amount |
| Status | Safe / Suspicious / Fraud |
| Risk Score | Fraud risk percentage |

Status colors:

- 🟢 **Safe** – Low risk  
- 🟠 **Suspicious** – Medium risk  
- 🔴 **Fraud** – High risk  

---

## Tech Stack

- **React.js** – Frontend framework  
- **Tailwind CSS** – Styling and responsive design  
- **JavaScript / TypeScript** – Programming language  

---

## Project Structure
securepay-dashboard
│
├── public
│   └── index.html
│
├── src
│   ├── App.tsx
│   ├── styles.css
│   └── main.tsx
│
├── package.json
├── README.md
└── screenshot.png


---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/securepay-dashboard.git
```

Navigate to the project folder:
cd securepay-dashboard
Install dependencies:
npm install
Run the project:

npm run dev

The dashboard will start at:

http://localhost:5173

Dashboard Preview

(Add your dashboard screenshot here)

## Dashboard Preview

![SecurePay Dashboard](screenshot.png)

Example:
SecurePay Dashboard
---------------------------------
Total Transactions | Fraud Detected
Risk Score Avg     | Amount Blocked

Transaction Table
TXN1001 | ₹4,200 | Safe | 15%
TXN1002 | ₹15,000 | Suspicious | 65%
TXN1003 | ₹75,000 | Fraud | 95%

Future Improvements

Connect the dashboard to a Machine Learning fraud detection model

Add charts and data visualizations

Implement real-time transaction monitoring

Deploy the dashboard online
