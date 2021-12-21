import React from 'react'
import { Navigate, useRoutes } from 'react-router';
import { ItemListContainer } from '../components/ListContainer/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from '../components/CartItem/CartView';
import { Checkout } from '../components/Checkout/Checkout';
import { Home } from '../components/Home/Home';

export const AppRouter = () => {

    const routes = useRoutes([
        { path: "/", element: <Home/>},
        { path: "/productos/:catId", element: <ItemListContainer/> },
        { path: "/detail/:itemId", element: <ItemDetailContainer/>},
        { path: "/cart", element: <CartView/>},
        { path: "/checkout", element: <Checkout/> },
        { path: "*", element: <Navigate to="/" />},
    ])

    return routes
}
