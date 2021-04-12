import * as React from 'react';
// import * as CSS from 'csstype';

// interface PProps {
//   style?: CSS.Properties;
//   children: React.ReactNode;
// }
export const P= ({ children, style, ...rest }) => (
  <p style={{
      margin: '3vh 0',
      lineHeight: '1.4',
      ...style,
    }}
    {...rest}
  >
    {children}
  </p>
);

// interface CodeProps {
//   children: React.ReactText;
// }
export const Code = ({ children }) => (
  <code
    style={{
      fontFamily: 'monospace',
      fontSize: '15px',
      paddingLeft: '2px',
    }}
  >
    {children}
  </code>
);

// interface LiProps {
//   children: React.ReactText;
// }
export const Li = ({ children, ...rest }) => (
  <li
    style={{
      paddingLeft: '18px',
      textIndent: '-15px',
      margin: '0.5vh 0',
      listStyle: 'none',
    }}
    {...rest}
  >
    <span style={{ paddingRight: '7px' }}>&ndash;</span>
    {children}
  </li>
);