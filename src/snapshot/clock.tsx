import React from 'react';

type Props = {};

export const Clock = (props: Props) => {
  const [state, setState] = React.useState({
    seconds: Date.now() / 1000,
  });

  function tick() {
    setState({
      seconds: Date.now() / 1000,
    });
  }

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  return <p>{state.seconds} seconds have ellapsed since the UNIX epoch.</p>;
};
