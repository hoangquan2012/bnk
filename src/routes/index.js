import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Landing';
import ContentFullWidth from '../layouts/ContentFullWidth';
import MainLayout from '../layouts/MainLayout';
import Skill from '../pages/Skills';
import Education from '../pages/Education';
export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="" element={<ContentFullWidth />}>
                        <Route path="" element={<Home />} />
                        <Route path="skill" element={<Skill />} />
                        <Route path="education" element={<Education />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
