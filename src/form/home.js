import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import Header from '../components/header'
import Container from 'react-bootstrap/Container';
import User from '../data/user/user.js'
import InputFocus from '../components/InputFocus'
import UserTable from '../data/user/userTable.js'
import Footer from '../components/footer'
import Login from '../form/login'
import Signup from '../form/signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function HomePage() {

  return (
    <Container>
      <div className='app-container'>
        <InputFocus />
        <UserTable />
      </div>
    </Container>
  );
}

export default HomePage;