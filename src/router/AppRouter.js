import React from 'react'
import { Navigate, useRoutes } from 'react-router';
import { ItemListContainer } from '../components/ListContainer/ItemListContainer';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from '../components/Cart/Cart';

export const AppRouter = () => {

    const routes = useRoutes([
        { path: "/", element: <ItemListContainer/>},
        { path: "/productos/:catId", element: <ItemListContainer/> },
        { path: "/detail/:itemId", element: <ItemDetailContainer/>},
        { path: "/cart", element: <Cart/>},
        { path: "*", element: <Navigate to="/" />},
    ])

    return routes
}
