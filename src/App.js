import React from "react";

import Profile from "./components/Profile/profile";
import user from "./json/user.json";

import Statistics from "./components/Statistics/statistics";
import statisticalData from "./json/statistical-data.json";

import FriendList from "./components/FriendList/friendList.js";
import friends from "./json/friends.json";

import TransactionHistory from "./components/Transaction/TransactionHistory.js";
import transactions from "./json/transaction.json";

const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
