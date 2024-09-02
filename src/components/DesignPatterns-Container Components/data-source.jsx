import React, { useState, useEffect } from "react";

export const DataSource = ({ getData = () => {}, resourceName, children }) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getData();
      setResource(response);
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};

/* Only work is to fetch data */

/* Only work is to render  for UserInfo*/

/*
const getDataFromServer = async (url) => {
  const resp = await axios.get(url);
  return resp.data;
};

const getDataFromLocalStorage = (key) => () => {
  return localStorage.getItem(key);
};

const Message = ({ message }) => {
  return <h1> {message}</h1>;
};

*/ 

/* <DataSource
        getData={()=>getDataFromServer("/users/0")}
        resourceName={"user"}
      >
       
        <UserInfo />
      </DataSource> 
*/

/* <DataSource
        getData={()=>getDataFromLocalStorage('test')}
        resourceName={"message"}
      >
        <Message />
      </DataSource> 
*/
