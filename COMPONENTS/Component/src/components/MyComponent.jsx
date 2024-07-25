import React from 'react';


function MyComponent(props) {
  return (
    <div className="container">
      <div className="extraProp">{props.extraProp}</div>
    </div>
  );
}

export default MyComponent;
