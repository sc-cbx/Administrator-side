import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import BackstagePage from './Backstage/backstage';

import LoginPage from './Login/login';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom';
class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter basename="index">
                    <Switch>
                        {/*<Route path="/" exact component={BackstagePage}></Route>*/}
                        <Route path="/backstage" component={BackstagePage}></Route>
                        <Route path="/login" component={LoginPage} history={this.props.history}></Route>
                   
                        <Redirect to="/login"></Redirect>
                    </Switch>
                    
                </BrowserRouter>
               
            </div>
        )
    }
}
ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
