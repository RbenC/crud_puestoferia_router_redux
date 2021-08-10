import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
// import UserList from './containers/user-list/UserList'
import store from './store'
import UserCreate from './containers/user-create/UserCreate'
import ProductCreate from './containers/product-create/ProductCreate'
import UserDetail from './containers/user-detail/UserDetail'
import ProductDetail from './containers/product-detail/ProductDetail'
import ProductList from './containers/product-list/ProductList'
import Menu from './components/menu/Menu'
import Dashboard from './components/dashboard/Dashboard'
import Comments from './components/dashboard/Comments'

function App() {
	return (
		<div className="container mt-0">
			<Provider store={store}>
				<Router>
					<Menu />
					<Switch>
						<Route path="/" exact>
							<Dashboard />
							<Comments />
						</Route>
						<Route path="/create">
							<UserCreate />
						</Route>
						<Route path="/detail/:id">
							<UserDetail />
						</Route>
						<Route path="/products" exact>
							<ProductList />
						</Route>
						<Route path="/products/create">
							<ProductCreate />
						</Route>
						<Route path="/products/detail/:id">
							<ProductDetail />
						</Route>
					</Switch>
				</Router>
			</Provider>
		</div>
	)
}

export default App
