import Sidebar from './components/SideBar';
import Header from './components/Header';


const Layout = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div>
            <Sidebar />        
        </div>
    </div>
  );
};

export default Layout;
