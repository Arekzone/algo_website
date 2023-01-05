import React, { Component } from 'react';
import axios from 'axios';
import apiRequest from '../api/apiRequest.js';
import api from '../api/posts';
import {Typography} from "@mui/material"
import Header2 from './Header2.jsx';

class ZadaniaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      text: '',
      wynikUzytkownika: '',
      poprawnyWynik: ''
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
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Header2 title="Zadania" subtitle="Dodaj zadanie do bazy danych"/>
        <label>
          Checked:
          <input
            type="checkbox"
            name="checked"
            checked={this.state.checked}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Text:
          <input
            type="textbox"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Wynik Uzytkownika:
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ZadaniaForm;