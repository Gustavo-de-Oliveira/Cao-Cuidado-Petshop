import React from 'react';
import NextLink from 'next/link';
import styles from './styles.module.css';

// eslint-disable-next-line react/prop-types
export default function Link({ href, children, color }) {
  return (
    <NextLink href={href} passHref>
      {/* <a className={styles.linkStyle}>{children}</a> */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a style={{ color: `${color}` }} className={styles.linkStyle}>
        {children}
      </a>
    </NextLink>
  );
}
