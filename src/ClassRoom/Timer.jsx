import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

// Импортируем все 5 фоток из папки src/Cat
import cat1 from '../Cat/Cat.jpg';
import cat2 from '../Cat/Cat2.jpg';
import cat3 from '../Cat/Cat3.jpg';
import cat4 from '../Cat/Cat4.jpg';
import cat5 from '../Cat/Cat5.jpg';

const CAT_PHOTOS = [cat1, cat2, cat3, cat4, cat5];

// Генерируем 15 кошечек, повторяя 5 фоток по кругу (0, 1, 2, 3, 4, 0, 1...)
const CATS = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    imageUrl: CAT_PHOTOS[i % CAT_PHOTOS.length],
    top: `${(i * 7 + 5) % 85}%`,
    size: `${70 + (i % 4) * 20}px`,       // Размер фото (от 70px до 130px)
    duration: `${3 + (i % 5) * 1.2}s`,
    delay: `-${(i * 0.7).toFixed(1)}s`,
}));

function Timer() {
    const [increment, setIncrement] = useState(0);
    const isMount = useRef(false);
    const timeoutId = useRef(null);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        if (isMount.current) {
            timeoutId.current = setInterval(() => {
                setIncrement((prev) => prev + 1);
            }, 30);
        }
        return () => clearInterval(timeoutId.current);
    }, [isRunning]);

    const backgroundColor =
        increment === 0 && !isRunning
            ? '#ffffff'
            : `hsl(${(increment * 3) % 360}, 85%, 75%)`;

    useEffect(() => {
        document.documentElement.style.backgroundColor = backgroundColor;
        document.body.style.backgroundColor = backgroundColor;
        document.body.style.margin = '0';
        document.body.style.overflow = 'hidden';

        return () => {
            document.documentElement.style.backgroundColor = '';
            document.body.style.backgroundColor = '';
            document.body.style.overflow = '';
        };
    }, [backgroundColor]);

    const handleStop = () => {
        isMount.current = false;
        setIsRunning(false);
    };

    const handleStart = () => {
        isMount.current = true;
        setIsRunning(true);
    };

    const handleReset = () => {
        isMount.current = false;
        setIsRunning(false);
        setIncrement(0);
    };

    return createPortal(
        <section
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                maxWidth: 'none',
                height: '100vh',
                margin: 0,
                padding: 0,
                border: 'none',
                zIndex: 9999,
                backgroundColor: backgroundColor,
                transition: 'background-color 0.05s linear',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            <style>{`
                @keyframes flyCat {
                    0% {
                        transform: translateX(-160px) rotate(-10deg);
                    }
                    50% {
                        transform: translateX(50vw) translateY(-25px) rotate(10deg);
                    }
                    100% {
                        transform: translateX(calc(100vw + 160px)) rotate(-10deg);
                    }
                }
            `}</style>

            {/* Летающие фоточки кошечек */}
            {(isRunning || increment > 0) &&
                CATS.map((cat) => (
                    <img
                        key={cat.id}
                        src={cat.imageUrl}
                        alt="Котик"
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: cat.top,
                            width: cat.size,
                            height: cat.size,
                            objectFit: 'cover',
                            borderRadius: '50%',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            border: '3px solid white',
                            userSelect: 'none',
                            pointerEvents: 'none',
                            animation: `flyCat ${cat.duration} linear ${cat.delay} infinite`,
                            animationPlayState: isRunning ? 'running' : 'paused',
                        }}
                    />
                ))}

            <article
                style={{
                    position: 'relative',
                    zIndex: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    padding: '24px 36px',
                    borderRadius: '16px',
                    textAlign: 'center',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                }}
            >
                <p style={{ fontSize: '28px', fontWeight: 'bold', margin: '0 0 16px' }}>
                    Таймер: {increment}
                </p>

                <span style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button onClick={handleStop}>Stop</button>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handleReset}>Reset</button>
                </span>
            </article>
        </section>,
        document.body
    );
}

export default Timer;
