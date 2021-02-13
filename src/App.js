import Loading from './components/loading/index';
import {lazy, Suspense} from 'react';

const Appp = lazy(()=>import('../Copyright'))

export default function App() {
    return (
        <>
            <Suspense fallback={<Loading/>}>
                <Appp/>
            </Suspense>
        </>
    )
}
