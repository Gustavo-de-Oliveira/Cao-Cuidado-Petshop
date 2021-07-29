/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

export default function InputQuantity({
  maximumQuantity,
  countQuantity,
  increase,
  decrease,
}) {
  return (
    <div className={styles.productQuantityContainer}>
      {countQuantity <= 1 ? (
        <button
          disabled
          type="button"
          className={styles.productQuantityBtn}
          onClick={decrease}
        >
          <FontAwesomeIcon height="20px" icon={faMinus} />
        </button>
      ) : (
        <button
          type="button"
          className={styles.productQuantityBtn}
          onClick={decrease}
        >
          <FontAwesomeIcon height="20px" icon={faMinus} />
        </button>
      )}

      <p className={styles.productQuantityInput}>{countQuantity}</p>
      {countQuantity >= maximumQuantity ? (
        <button
          disabled
          type="button"
          className={styles.productQuantityBtn}
          onClick={increase}
        >
          <FontAwesomeIcon height="20px" icon={faPlus} />
        </button>
      ) : (
        <button
          id="increase_button"
          type="button"
          className={styles.productQuantityBtn}
          onClick={increase}
        >
          <FontAwesomeIcon height="20px" icon={faPlus} />
        </button>
      )}
    </div>
  );
}
