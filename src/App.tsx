import "./styles.css";

function App() {
  const transactions = [
    { id: "TXN1001", amount: "₹4,200", status: "Safe", risk: "15%" },
    { id: "TXN1002", amount: "₹15,000", status: "Suspicious", risk: "65%" },
    { id: "TXN1003", amount: "₹75,000", status: "Fraud", risk: "95%" },
    { id: "TXN1004", amount: "₹2,500", status: "Safe", risk: "10%" },
  ];

  const getColor = (status: string) => {
    if (status === "Safe") return "green";
    if (status === "Suspicious") return "orange";
    if (status === "Fraud") return "red";
  };

  return (
    <div className="container">
      <h1 className="header">SecurePay Fraud Monitoring Dashboard</h1>

      {/* Summary Cards */}

      <div className="cards">
        <div className="card">
          <h3>Total Transactions</h3>
          <p>1,240</p>
        </div>

        <div className="card">
          <h3>Fraud Detected</h3>
          <p>43</p>
        </div>

        <div className="card">
          <h3>Risk Score Average</h3>
          <p>72%</p>
        </div>

        <div className="card">
          <h3>Amount Blocked</h3>
          <p>₹2,34,000</p>
        </div>
      </div>

      {/* Transactions Table */}

      <h2 className="table-title">Transactions</h2>

      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Risk Score</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.amount}</td>

              <td
                style={{
                  color: getColor(t.status),
                  fontWeight: "bold",
                }}
              >
                {t.status}
              </td>

              <td>{t.risk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
