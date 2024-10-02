import React from 'react';
import css from '../styles/y.module.css'; // Ensure this path is correct

const Y = () => {
  return (
    <>
      <div className={css.header}>
        {/* Your content here */}
        <h1>Your Title Here</h1>
        <button className={css.btn}>Click</button>
        <p className={css.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>


        <h5 style={{color:"red"}}>lorem 6</h5>
        <h2> Hello dev dutt sharma</h2>

        <style jsx>
            {`
 h2{
 color:red;
 background-color:yellow
 }
                `}

        </style>
      </div>
    </>
  );
};

export default Y;
