import React from 'react';

function Button({ onClick, children }) {
    return (
      <button onClick={e => {
        e.stopPropagation();
        onClick();
      }}>
        {children}
      </button>
    );
  }

export default function Toolbar2() {
    return (
        <>
        <div className="Toolbar" onClick={() => {
            alert('You clicked on the toolbar!');
          }}>
            <button onClick={() => alert('Playing!')}>
              Play Movie
            </button>
            <button onClick={() => alert('Uploading!')}>
              Upload Image
            </button>
          </div>
          </>
        
     
    );
  }
  
  