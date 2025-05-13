import React from 'react'
import './notFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
      <div className="container not-found_container">
        <h1>404</h1>
        <p>Page Not Found.</p>
        <Link to="/" className="btn">
          Go back home
        </Link>
      </div>
    </section>
  );
}

export default NotFound