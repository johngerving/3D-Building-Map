import { baseApiURL } from "../../main";

export function Root() {
  const handleOAuth = () => {
    window.open(`${baseApiURL}/auth/google`, "_self");
  };

  return <button onClick={handleOAuth}>Login</button>;
}
