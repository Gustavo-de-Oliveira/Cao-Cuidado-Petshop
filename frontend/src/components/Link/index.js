import React from 'react';
import NextLink from 'next/link';
import styles from './styles.module.css';

// eslint-disable-next-line react/prop-types
export default function Link({ href, children }) {
  return (
    <NextLink href={href} passHref className={styles.link}>
      {children}
    </NextLink>
  );
}
