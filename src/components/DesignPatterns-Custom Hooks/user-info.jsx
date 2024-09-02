/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from "react";
import { useDataSource } from "./data-source.hook";
import axios from "axios";
const fetchFromServer = (resourceUrl) => async () => {
  const resp = await axios.get(resourceUrl);
  return resp.data;
};

export const UserInfo = ({ userId }) => {
  const fetchUser = useCallback(fetchFromServer(`/users/${userId}`), [userId]);
  const user = useDataSource(fetchUser);
  console.log("RERENDER", user)
  const { name, age, country, books } = user || {};
  
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
