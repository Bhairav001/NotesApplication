import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
  
<ul class="sidenav">
  <li><a class="active" href="#home">Home</a></li>
  <li><a href="/crudApp">Crud App</a></li>
  <li><a href="/signup">Signup</a></li>
  <li><a href="/login">Login</a></li>
  <li><a href="/notes">NoteApp</a></li>
  <li><a href="/fileUpload">file upload</a></li>
</ul>
  )
}

export default Navbar