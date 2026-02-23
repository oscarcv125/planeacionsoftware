import { useFetch } from './useFetch';
import { Loading } from '../../components/Loading';
import { Card } from '../../components/Card';
import { useState } from 'react';

export const CustomHook = () => {

    const [fetchKey, setFetchKey] = useState(0);
    const { data, isLoading } = useFetch<{ message: string; status: string }>(
        `https://dog.ceo/api/breeds/image/random?key=${fetchKey}`
    );

    const next = () => setFetchKey(k => k + 1);
    const prev = () => setFetchKey(k => Math.max(0, k - 1));

    return (
        <>
            <h1>Random Dogs</h1>
            <hr />
            {isLoading
                ? <Loading />
                : <Card name="Dog" sprites={[data?.message]} />}

            <div className="controls">
                <button className='btn btn-primary' onClick={prev} aria-label="previous">Anterior</button>
                <button className='btn btn-primary' onClick={next} aria-label="next">Siguiente</button>
            </div>
        </>
    );
};