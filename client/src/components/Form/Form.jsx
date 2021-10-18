import React from 'react'
import { Table } from 'reactstrap';
import TopicList from '../TopicList/TopicList';

function Form() {
  return (
    <Table>
      <tbody>
        <TopicList />
      </tbody>
    </Table>
  );
}


export default Form
