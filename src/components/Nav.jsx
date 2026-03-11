import React from 'react'

const Nav = ( { register, login, logout, loading, user }) => {
  return (
    <div>
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loading ? "loading..." : user.email}
    </div>
  );
}

export default Nav