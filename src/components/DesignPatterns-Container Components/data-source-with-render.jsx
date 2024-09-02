import { useState, useEffect } from "react";

export const DataSourceWithRender = ({ getData = () => {}, render }) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getData();
      setResource(response);
    })();
  }, [getData]);

  return render(resource);
};

/* <DataSourceWithRender
getData={() => getDataFromServer("/users/0")}
render={(resource) => <UserInfo user={resource} />}
>
</DataSourceWithRender> */
