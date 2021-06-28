import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

export default function InputQuantity() {
  const [countQuantity, setCountQuantity] = useState(0);
  return (
    <div className={styles.productQuantityContainer}>
      <button
        type="button"
        className={styles.productQuantityBtn}
        onClick={() => setCountQuantity(countQuantity - 1)}
      >
        <FontAwesomeIcon height="20px" icon={faMinus} />
      </button>
      <input
        className={styles.productQuantityInput}
        type="number"
        value={countQuantity}
        min="1"
        max="5"
      />
      <button
        type="button"
        className={styles.productQuantityBtn}
        onClick={() => setCountQuantity(countQuantity + 1)}
      >
        <FontAwesomeIcon height="20px" icon={faPlus} />
      </button>
    </div>
  );
}
