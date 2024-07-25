import React from 'react';


function withStyledComponent(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div className="wrapper">
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withStyledComponent;
