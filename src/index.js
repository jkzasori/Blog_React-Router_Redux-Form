import React, {Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const app = document.getElementById("app");
const createStoreWithMiddleware= applyMiddleware(promise)(createStore);

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			<div>
			<Switch>
				
				<Route path="/posts/new" component={PostsNew} />
				<Route path="/posts/:id" component={PostsShow} />
				<Route path="/" component={PostsIndex} />
				
			</Switch>
				
			</div>
		</BrowserRouter>
	</Provider>
	, app)
