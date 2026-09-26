import React from 'react'

const Login = () => {
     let host = "http://localhost:5000";
    const handleSubmit= async (e)=>{
        e.preventDefault();
         const response = await fetch(`${host}/api/auth/getUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
          "eyJ1c2VyIjp7ImlkIjoiNmFiNTA1ZmRmOGZhOWZkMTMyOGU1NTVhIn0sImlhdCI6MTc5MDI0ODQ0NX0." +
          "vknLNMKf2NdHbWk24ZSzSSdduhUNLYFBKqm63TpQxzo",
      },
    });
    const json = await response.json();
    console.log(json);
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>

              <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" name="password" id="exampleInputPassword1"/>
              </div>

              <button type="submit" className="btn btn-primary" >Submit</button>
          </form>
      </div>
  )
}

export default Login
