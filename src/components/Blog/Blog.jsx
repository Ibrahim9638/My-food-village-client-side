import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import BlogContent from './BlogContent/BlogContent';

const Blog = () => {
    return (
        <div>
            <NavBar></NavBar>
            <BlogContent></BlogContent>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Blog;