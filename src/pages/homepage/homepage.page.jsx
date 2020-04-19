import React from "react";
import FriendList from "../../components/friend-list/friend-list.component";
const FRIEND_LIST = [
  {
    id: 1,
    firstName: "Rey",
    middleName: "Gaspalinao",
    lastName: "Guidoriagao",
    email: "guidoriagaorey16@gmailc.com",
    age: "23",
    imageUrl: require("../../assets/people.svg"),
  },
  {
    id: 42,

    firstName: "Stephen",
    middleName: "PG",
    lastName: "Curry",
    email: "3pointmaster@gmailc.com",
    age: "31",
    imageUrl: require("../../assets/people.svg"),
  },
  {
    id: 22,
    firstName: "Giannis",
    middleName: "Greek Freak",
    lastName: "antetokounmpo",
    email: "greekfreak@gmailc.com",
    age: "25",
    imageUrl: require("../../assets/people.svg"),
  },
];

const HomePage = () => (
  <div className="page-layout">
    <h1>Friend List</h1>
    <FriendList data={FRIEND_LIST} />
  </div>
);

export default HomePage;
