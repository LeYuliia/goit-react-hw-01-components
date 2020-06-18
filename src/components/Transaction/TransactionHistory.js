import React from "react";
import PropTypes from "prop-types";

import "./transaction.css";

const TransactionHistory = ({ items }) => (
  <table className="table">
    <thead>
      <tr className="columns">
        <th className="columns-name">Type</th>
        <th className="columns-name">Amount</th>
        <th className="columns-name">Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr className="string-container" key={id}>
          <td className="string type">{type}</td>
          <td className="string">{amount}</td>
          <td className="string">{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
