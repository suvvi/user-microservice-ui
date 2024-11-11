import { useEffect, useState } from "react";
import UserList from "./UserList";

const Home = () => {
  const [users, setUsers] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8080/users')
      .then(res => {
        if (!res.ok) { // error coming back from server
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setUsers(data);
        setError(null);
      })
      .catch(err => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      })
    }, 1000);
  }, [])

  return (
    <div className="home">
      <h1>All users</h1>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {users && <UserList users={users} />}
    </div>
  );
}
export default Home;