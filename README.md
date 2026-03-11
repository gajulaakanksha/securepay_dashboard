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
```
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
└── screenshot_1.png
```

## Example:
SecurePay Dashboard
```
---------------------------------
Total Transactions | Fraud Detected
Risk Score Avg     | Amount Blocked

Transaction Table
TXN1001 | ₹4,200 | Safe | 15%
TXN1002 | ₹15,000 | Suspicious | 65%
TXN1003 | ₹75,000 | Fraud | 95%
---
```

## Installation

Clone the repository:

```bash
git clone https://github.com/gajulaakanksha/securepay_dashboard.git
```

Navigate to the project folder:
```
cd securepay_dashboard
```

Install dependencies:
```
npm install
```

Run the project:
```
npm run dev
```

The dashboard will start at:
```
http://localhost:5173
```

## Dashboard Preview

<img width="1354" height="566" alt="Screenshot_1" src="https://github.com/user-attachments/assets/57dcf719-2991-43a5-af3f-4ab0cbb3000d" />

## Future Improvements

- Connect the dashboard to a Machine Learning fraud detection model

- Add charts and data visualizations

- Implement real-time transaction monitoring

- Deploy the dashboard online
