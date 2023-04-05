import React from "react"
import { Routes, Route, Navigate} from 'react-router-dom'
import { AuthPage } from "./pages/AuthPage.js"
import { CreatePage } from "./pages/CreatePage.js"
import { DetailPage } from "./pages/DetailPage.js"
import { LinksPage } from "./pages/LinksPage.js"


export const useRoutes = (isAuthenticated) => {
    if(isAuthenticated) {
        return (
           <Routes>
            <Route path ="/links" element={<LinksPage />} />
            <Route path ="/create" element={<CreatePage />} />
            <Route path ="/detail/:id" element={<DetailPage />} />
            <Navigate to ='/create' />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Navigate to ="/"/>
        </Routes>
    )
}

// 