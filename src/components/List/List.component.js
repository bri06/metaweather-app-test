import React, { Fragment } from 'react';

const List = ({ items, loading }) => {
  if(loading) {
    return <p>loading...</p>
  }
  return <Fragment>
  { items.map((data) =>
     <div className="card" key={data}>
        <header className="card-header">
          <p className="card-header-title">{data.title}</p>
        </header>
      </div>)}
  </Fragment>
};

export default List;
