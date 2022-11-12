import React, { useState } from "react";
import { Button, Form, InputGroup, Label, Input, Card, CardBody } from "reactstrap";

function Main({kategorie}) {

    const [items, setItems] = useState([
        {
            id: 1,
            checked: false,
            item: "pizza"
        },
        {
            id: 2,
            checked: false,
            item: "roll"
        }
    ]);
    const [addItem, setItem] = useState('');
   


    const handleCheck=(id)=>{
        const listItems = items.map((item)=>item.id === id ? {...item
        ,checked: !item.checked}: item);
        setItems(listItems);
    }
    const showitems = kategorie.map((kategoria) => {
        return (
            <Card key={kategoria.id}>
                <CardBody>
                
                   {kategoria.kategoria}
                    {kategoria.text}
                  
                </CardBody>
            
            </Card>
        )
    })

    return (
        
        <div>
            <h1>Inspiring sculptors:</h1>
            <input
                value={addItem}
                onChange={e => setItem(e.target.value)}
            />
            <button onClick={() => {
                setItem('')
                items.push({
                    id: items.length,
                    checked: false,
                    item: addItem,
                });
            }}>Add</button>
            
            <p>{showitems}</p>
        </div>


    )
}
export default Main;