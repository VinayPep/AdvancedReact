import axios from "axios";
import { useState, useEffect } from "react";

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return resource;
};
