import ListGroup from 'react-bootstrap/ListGroup'

export default function ItemListContainer(props){
    const lista = props.greeting;
    return(   
       
        <div className="col">
            {lista.map(item => <div>{item.title}</div>)}
        </div>
    )
  
}

