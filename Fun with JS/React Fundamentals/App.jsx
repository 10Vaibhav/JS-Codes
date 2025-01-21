import React, { Fragment } from 'react';


function App(){

    return (
        // when we don't want to use Extra div, we use Fragment in React.
    //   <Fragment>
    //   <div>Hi There !</div>
    //   <div>Hello</div>
    //   </Fragment>

    <>
    <div>Hi There !</div>
    <div>Hello</div>
    </>
    );
};

export default App;