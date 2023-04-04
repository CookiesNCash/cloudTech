import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthPage } from "./pages/AuthPage.js"
import { CreatePage } from "./pages/CreatePage.js"
import { DetailPage } from "./pages/DetailPage.js"
import { LinksPage } from "./pages/LinksPage.js"
export const useRoutes = (isAuthenticated) => {
    if(isAuthenticated) {
        return (
           <Routes>
            <Route path ="/links" exact>
                <LinksPage />
            </Route>
            <Route path ="/create" exact>
            <CreatePage />
            </Route>
            <Route path ="/detail/:id">
                <DetailPage />
            </Route>
            <Navigate to ='/create' />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path='/'>
            <AuthPage />
            </Route>
            <Navigate to ="/"/>
        </Routes>
    )
}