import React from "react";
import { includeUpdatableResource } from "./include-updatable-resource";

export const UserInfoForm = includeUpdatableResource(
  ({ user, onChangeUser, onPostUser, onResetUser }) => {
    const { name, age } = user || {};
    return user ? (
      <>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => onChangeUser({ name: e.target.value })}
          ></input>
        </label>
        <label>
          Age:
          <input
            name="age"
            type="number"
            value={age}
            onChange={(e) => onChangeUser({ age: Number(e.target.value) })}
          ></input>
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onPostUser}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  '/users/1',
  'user'
);
