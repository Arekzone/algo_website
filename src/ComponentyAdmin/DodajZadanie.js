import { useState, useEffect } from 'react';
import axios from 'axios';

function DodajZadanie() {
    const Post_API_URL = 'http://localhost:8080/createExercises';
    const [addZadanie,setZadanie]=useState([])
    const [items,setItems]=useState([{
        id: 1,
        checked: false,
        item: 'zadanie 1'
    }])
    

    const mystyle = {
        width: "500px",
  height: "150px",
  padding: "12px 20px",
  border: "2px solid #ccc",
  backgroundColor: "#f8f8f8",
  fontSize: "16px",
  resize: "none",
      }
     


      useEffect(() => {
        items.pop(items[0]);
    },[]);

  const showitems = items.map((item) => (
    <div key={item.id}>
      <input type="checkbox" checked={item.checked} />
      <label>{item.item}</label>
    </div>
  ));
  const handleSubmit= async (e)=>{
    axios({
        url: Post_API_URL,
        method: 'post',
        data: items[1]
      })
      .then(function (response) {
          // your action after success
          console.log(response);
      })
      .catch(function (error) {
         // your action on error success
          console.log(error);
      });
}

  return (
    <div>
      <h1>Kolejne zadanie = {items.length}</h1>
      <h1>Dodawanie zadania</h1>
      <div>
        <textarea
          style={mystyle}
          value={addZadanie}
          onChange={(e) => setZadanie(e.target.value)}
        />
        <button
          onClick={() => {
            setZadanie('');
            setItems([
              ...items,
              {
                id: items.length + 1,
                checked: false,
                item: addZadanie,
              },
            ]);
          }}
        >
          Add
        </button>
      </div>
      <button onClick={(e) => handleSubmit()}>Dodaj do bazy danych</button>
      <div>{showitems}</div>
    </div>
  );
};

export default DodajZadanie;