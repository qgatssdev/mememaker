import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export const Meme = () => {
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);

  const shuffleMemes = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then((res) =>
      res.json().then((res) => {
        const meme = res.data.memes;
        shuffleMemes(meme);
        setMemes(meme);
      })
    );
  }, []);
  return memes.length ? (
    <div className={styles.container}>
      <button onClick={() => console.log(0)} className={styles.generate}>
        Generate
      </button>
      <button
        onClick={() => setMemeIndex(memeIndex + 1)}
        className={styles.skip}
      >
        Skip
      </button>
      <img src={memes[memeIndex].url} alt="" />
    </div>
  ) : (
    <></>
  );
};
