import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col gap-8 mx-auto border-2 rounded-xl max-w-[600px] p-20 bg-amber-50">
      <Outlet />
      <div className="flex gap-8 self-center">
        <Link to="/deleted" className="px-4 py-2 bg-blue-400 rounded-xl text-white">Deleted</Link>
        <Link to="/" className="px-4 py-2 bg-blue-400 rounded-xl text-white">All</Link>
      </div>
    </div>
  );
}

export default App;
