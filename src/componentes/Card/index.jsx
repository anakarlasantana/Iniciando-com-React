import './style.css';

export function Card (props) { //props -> é uma forma de acessar as propriedades; //
    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}