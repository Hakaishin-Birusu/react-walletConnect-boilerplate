import React from 'react';
import Header from '../header';
function Layout(props) {
  return (
    <div>
      <Header />
      <div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
