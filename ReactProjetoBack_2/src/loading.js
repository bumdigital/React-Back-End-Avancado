import {Spinner} from 'react-bootstrap';

export default function Loading() {
    return (
        <>
            <div className="text-center text-success py-4" title="Loading...">
                <h1>Carregando...</h1>
                <Spinner animation="border" role="status"/>
            </div>
        </>
    )
}