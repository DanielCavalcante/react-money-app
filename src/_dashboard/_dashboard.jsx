import React, { Component } from 'react';
import axios from 'axios';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';


const API = 'http://localhost:3000/api';

export default class _Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { credit: 0, debt: 0 };
  }

  componentWillMount() {
    axios.get(`${API}/billingCycles/summary`).then(resp => this.setState(resp.data));
  }

  render() {
    const { credit, debt } = this.state;
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão 2.0' />
        <Content>
          <ValueBox cols='12 4' color='green' icon='bank' 
            value={`R$ ${credit}`} text='Total de Créditos'>
          </ValueBox>
          <ValueBox cols='12 4' color='red' icon='credit-card' 
            value={`R$ ${debt}`} text='Total de Débitos'>
          </ValueBox>
          <ValueBox cols='12 4' color='blue' icon='money' 
            value={`R$ ${credit - debt}`} text='Valor consolidado'>
          </ValueBox>
        </Content>
      </div>
    )
  }
}
