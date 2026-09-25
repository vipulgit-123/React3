import React from 'react'

const Noteitem = (props) => {
  const {notes} = props;
  return (
      <div className="col-md-2">
        <div className="card my-2">
          <div className="card-body">
            <h5 className="card-title">{notes.title}</h5>
            <p className="card-text">{notes.description} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum nam consequuntur esse facere, quos quasi consectetur dolores. Ipsam nobis iste pariatur voluptatem cupiditate delectus rem at esse architecto aspernatur.</p>
          </div>
        </div>
      </div>
  )
}

export default Noteitem

