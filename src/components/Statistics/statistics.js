import React from "react";
import PropTypes from "prop-types";
import statisticalData from "../../json/statistical-data.json";

import "./statistics.css";

import { colors, random } from "./randomColor.js";

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
      {statisticalData.map(({ id, label, percentage }) => (
        <li
          style={{ backgroundColor: colors[random(0, colors.length - 1)] }}
          className="item"
          key={id}
        >
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
