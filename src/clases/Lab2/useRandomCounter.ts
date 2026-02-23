import { useState, useCallback } from 'react';

export function useRandomCounter(min: number = 0, max: number = 100) {
    const [count, setCount] = useState(0);

    const incrementRandom = useCallback(() => {
        const randomIncrement = Math.floor(Math.random() * (max - min + 1)) + min;
        setCount(prev => prev + randomIncrement);
    }, [min, max]);

    const reset = useCallback(() => {
        setCount(0);
    }, []);

    return {
        count,
        incrementRandom,
        reset,
    };
}