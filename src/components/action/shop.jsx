import React from 'react'

function Shop({i, f, sum, reset, fav}) {
  return (
    <div className="shop">
        <div className="btn-group shop" role="group" aria-label="Basic example">
            <button type="button" onClick={fav} className="btn btn-outline-secondary"><i className="bi bi-heart-fill"></i></button>
            <button type="button" onClick={sum} className="btn btn-outline-secondary"><i className="bi bi-share"></i></button>
        </div>
    </div>
  )
}

export default Shop