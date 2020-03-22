import React from 'react';

type Props = {} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

export const Link = ({ href, children }: Props) => {
  const [state, setState] = React.useState({
    class: STATUS.NORMAL,
  });

  const _onMouseEnter = () => {
    setState((state) => ({ ...state, class: STATUS.HOVERED }));
  };

  const _onMouseLeave = () => {
    setState((state) => ({ ...state, class: STATUS.NORMAL }));
  };
  return (
    <a
      className={state.class}
      href={href || '#'}
      onMouseEnter={_onMouseEnter}
      onMouseLeave={_onMouseLeave}
    >
      {children}
    </a>
  );
};
