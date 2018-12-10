// @flow

import React from 'react';
import styles from './PlaceHolderSection.module.scss';

type Props = {
  errorStatus: boolean
}

const PlaceHolderSection = ({ errorStatus }: Props) => (
  <section className={styles.noresult}>
    {!errorStatus ? (
    <>
      <h3 className={styles.header} >No results matched your search.</h3>
      <p className={styles.paragraph} >You could search 
        <a className={styles.link} href="https://github.com/search" target="_blank" rel="noopener noreferrer"> all of GitHub </a> 
        or try an 
        <a className={styles.link} href="https://github.com/search/advanced" target="_blank" rel="noopener noreferrer"> advanced search</a>.
      </p>
    </> ) 
    : (<p className={styles.paragraph} > Issues couldn't be fetched, please try again later </p>)}
  </section>
);

export default PlaceHolderSection;
