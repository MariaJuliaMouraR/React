import React from 'react';

const AnimatedText = () => {
  const [text, setText] = React.useState('');
  const originalText = '  CONHEÇA A FATEC!  ';
  const delay = 200;

  React.useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < originalText.length - 1) {
        setText(prevText => prevText + originalText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return <div>{text}</div>;
};

const App = () => {
  return (
    <div>
      <h2>LETREIRO</h2>
      <AnimatedText />
    </div>
  );
};

export default App;
