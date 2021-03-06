import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/main/Home'
import Login from '../pages/configs/Login'
import PrivateRoute from './PrivateRoute'
import LoggedIn from '../pages/main/LoggedIn'
import AddVideo from '../pages/AddEditVids/AddVideo'
import EditVideo from '../pages/AddEditVids/EditVideo'


const AppRouter = () => {
    return (
        <>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route  path='/login' component={Login} />
            <PrivateRoute  path='/addvideo' component={AddVideo} />
            <PrivateRoute  path='/editvideo' component={EditVideo} />
            <PrivateRoute path='/login/login' component={LoggedIn} />
          </Switch>  
        </>
    )
}

export default AppRouter
