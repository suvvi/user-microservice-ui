const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <div className="user-preview" key={user.id} >
          <h2>{ user.name }</h2>
          <p> { user.email }</p>
        </div>
      ))}
    </div>
  );
}
 
export default UserList;