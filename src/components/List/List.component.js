import React, { Fragment } from 'react';

const List = ({ items }) => (
  <Fragment>
  { items.map((data) =>
     <div class="card" key={data}>
        <header class="card-header">
          <p class="card-header-title">{data.title}</p>
        </header>
      </div>)}
  </Fragment>
);

export default List;
