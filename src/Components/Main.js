import React, { useState } from "react";
import { Button, Form, InputGroup, Label, Input, Card, CardBody } from "reactstrap";

function Main() {

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
    const showitems = items.map((item) => {
        return (
            <Card key={item.id}>
                <CardBody>
                   <Input
                   type="checkbox"
                   onChange={()=>handleCheck(item.id)}
                   checked={item.checked}>
                   </Input>
                   {item.id}
                    {item.item}
                    <Button>Delete</Button>
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