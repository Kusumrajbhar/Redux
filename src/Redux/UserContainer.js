import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./action/Action";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers()
  }, []) //fetchUser dispatch only once
  return userData.loading ? (
    <div>
      <h2>Loading</h2>
      {console.log("loading", userData)}
    </div>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      {console.log("userData", userData)}
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {   //as we were getting state using useSelector, it does same
  return {
    userData: state.reducer,
  };
};

const mapDispatchToProps = (dispatch) => {   //useDispatch to trigger action, same perform by this
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
