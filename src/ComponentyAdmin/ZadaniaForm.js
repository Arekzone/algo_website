import React, { Component } from 'react';
import axios from 'axios';
import apiRequest from '../api/apiRequest.js';
import api from '../api/posts';
import {Typography} from "@mui/material"
import Header2 from './Header2.jsx';
import {Input} from "reactstrap"
import '../ComponentyAdmin/admincss.css';

class ZadaniaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      text: '',
      wynikUzytkownika: '',
      poprawnyWynik: '',
      kategoria:'',
      nazwaZadania:'',
      odpowiedz:''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    api.post('/admin/form', this.state, {
        headers: {
          'Content-Type': 'application/json',
        }
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    })
    this.setState({
        checked: false,
        text: '',
        wynikUzytkownika: '',
        poprawnyWynik: '',
        kategoria:'',
        nazwaZadania:'',
        odpowiedz:''
      });
  
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
<Header2 title="Zadania" subtitle="Dodaj zadanie do bazy danych"/>
        <label>
        <Header2 subtitle="Zostaw to pole puste"/>
          <input
            type="checkbox"
            name="checked"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Treść Zadania:
          <Input
          className='my-textarea'
            type="textarea"
            name="text"
            size="lg"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
        <Header2 subtitle="Zostaw to pole puste"/>
          <input
            type="text"
            name="wynikUzytkownika"
            value={this.state.wynikUzytkownika}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Poprawny Wynik:
          <input
            type="text"
            name="poprawnyWynik"
            value={this.state.poprawnyWynik}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Kategoria:
          <input
            type="text"
            name="kategoria"
            value={this.state.kategoria}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
         Nazwa zadania:
          <input
            type="text"
            name="nazwaZadania"
            value={this.state.nazwaZadania}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
         Odpowiedz(przekonwertuj na base64 przed wysłaniem):
          <Input
          className='my-textarea'
            type="textarea"
            name="odpowiedz"
            size="lg"
            value={this.state.odpowiedz}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ZadaniaForm;