import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Landing from './Landing';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import LearnMore from './LearnMore'
import SignupPage from './components/SignUp';
import DashBoard from './components/DashBoard';
import PageNotFound from './components/pageNotFound';
import Profile from './components/Profile';
import Message from './components/Message';
import Request from './components/Request';
import MyDashBoard from './components/MyDashBoard';
import Posts from './components/Posts';
import ProfileUpdate from './components/profileUpdate';
export default function App() {

  const [initial,setIntial]=useState(false)
const check=()=>{
  
  const check=localStorage.getItem('token')
if(check){
  setIntial(true)
}
}
useEffect(()=>{
  check();
},[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={initial?<DashBoard/>:<Landing/>} />
        <Route path='/landing' element={<Landing/>} />
        <Route path='/learnmore' element={<LearnMore/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup'  element={<SignupPage/>}/>
        <Route path='/home'element={<DashBoard/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/request' element={<Request/>}/>
        <Route path='/mydashboard' element={<MyDashBoard/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/profileupdate' element={<ProfileUpdate/>}/>
      </Routes>
    </BrowserRouter>
  )
}