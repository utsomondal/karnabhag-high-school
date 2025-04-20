import React from 'react';

const Login = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[calc(100vh-121px)]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold whitespace-nowrap">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label text-lg font-semibold">Admin</label>
                <input
                  type="email"
                  className="input w-full focus:outline-none"
                  placeholder="admin"
                />
                <label className="fieldset-label text-lg font-semibold">Pin</label>
                <input
                  type="password"
                  className="input w-full focus:outline-none"
                  placeholder="Pin"
                />
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
