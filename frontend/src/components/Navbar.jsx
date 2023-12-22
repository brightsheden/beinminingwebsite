
import { Navbar } from 'flowbite-react';
import { useSelector } from 'react-redux';


const NavbarComponentNew = () => {
  const userstate = useSelector((state)=>state.user)
  const {userInfo} = userstate
  return (
    <Navbar fluid rounded>
    <Navbar.Brand href="/">
     
      <span className="self-center whitespace-nowrap  text-xl font-bold dark:text-white">Bein Muhammed Mining and construction ltd.</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link href="/" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="#/aboutus">
        About
      </Navbar.Link>
      <Navbar.Link href="#/teams">Teams</Navbar.Link>
      <Navbar.Link href="#/projects">Projects</Navbar.Link>
      <Navbar.Link href="#/blogs">Blogs/news</Navbar.Link>
      <Navbar.Link href="#/#contact">Contact</Navbar.Link>
      {userInfo && (
         <Navbar.Link href="#/admin/dashboard">Dashboard</Navbar.Link>

      )}
    </Navbar.Collapse>
  </Navbar>
  );
};

export default  NavbarComponentNew ;
