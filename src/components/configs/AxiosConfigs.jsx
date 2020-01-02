import {useState} from 'react'

import axios from 'axios';

export const loginAxios = ({username, password}) => {

    axios.post('http://localhost:8443/oauth/token', `grant_type=password&username=${username}&password=${password}`, {

      headers: {

        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'

      }
    }}