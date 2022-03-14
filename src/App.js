import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import GetData from './GetData';
import {GetDataFunction} from "./GetDataFunction"
import {UseEffectSample} from "./UseEffectSample"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function App() {
  

  return (<div>

<Paper elevation={3} >
      <UseEffectSample/>
      </Paper>  

      <Paper elevation={3} >
      <GetDataFunction/>
      </Paper>  


    <Paper elevation={3} >
      <GetData/>
      </Paper>  

    </div>
    );
  }
  
  

export default App;
