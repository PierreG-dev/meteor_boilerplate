import React    from 'react'
import {
    Switch,
    Route
}                   from 'react-router-dom'
import Landing      from '/imports/pages/Landing'
import Signup       from '/imports/pages/Signup'
import Signin       from '/imports/pages/Signin'
import NotFound     from '/imports/pages/NotFound'
import AdminUsers   from '/imports/pages/admin/AdminUsers'


function MainLayout(props){
    return(
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Route path="/admin/users" component={AdminUsers} />
            <Route path="*" component={NotFound} />
        </Switch>
    )
}

export default MainLayout
