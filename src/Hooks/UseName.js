import { useState } from "react";

const UseName = () => {
  const [name] = useState("sameer");
  return name;
};

export default UseName;
