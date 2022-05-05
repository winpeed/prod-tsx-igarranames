import { useContext } from "react";
import { NameContext } from "../../pages";

function Counter() {
  const AppContext = useContext(NameContext);
  console.log(AppContext);
  return <div></div>;
}

export default Counter;
