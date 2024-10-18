import { useEffect, useState, useMemo } from 'react';
import { zalgoGeneration } from "../src/utils/zalgo";
import styles from './BombTimer.module.css';

export default function BombTimer({ className }) {
  const startTime = useMemo(() => new Date('2024-08-01T00:00:00Z'), []);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [zalgoText, setZalgoText] = useState([]);

  useEffect(() => {
    setZalgoText([
      zalgoGeneration("WARNING: EXPLOSION IMMINENT EXIT NOW", 1, 1, 1),
    ]);
  }, []);

  useEffect(() => {
    const calculateElapsedTime = () => {
      const now = new Date();
      const differenceInSeconds = Math.floor((now - startTime) / 1000);
      setElapsedTime(differenceInSeconds);
    };

    calculateElapsedTime();
    const interval = setInterval(calculateElapsedTime, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const formatTime = (seconds) => {
    const months = Math.floor(seconds / (30 * 24 * 3600));
    const weeks = Math.floor((seconds % (30 * 24 * 3600)) / (7 * 24 * 3600));
    const days = Math.floor((seconds % (7 * 24 * 3600)) / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return [
      String(months).padStart(2, '0'),
      String(weeks).padStart(2, '0'),
      String(days).padStart(2, '0'),
      String(hours).padStart(2, '0'),
      String(minutes).padStart(2, '0'),
      String(secs).padStart(2, '0')
    ].join(':');
  };

  return (
    <div className={`${styles.timerContainer} ${className}`}>
      <h1 className={styles.title}>{zalgoText}</h1>
      <div className={styles.timer}>
        {formatTime(elapsedTime)}
      </div>
    </div>
  );
}
