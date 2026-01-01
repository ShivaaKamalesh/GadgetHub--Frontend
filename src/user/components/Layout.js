import "../styles/user.css";
import {easeIn, motion} from 'motion/react'

const Layout = ({ children }) => {
  return (
    <div className="user-layout">

      <header className="user-navbar">
        <motion.h2
        initial={{opacity:0,y:15}}
        animate={{opacity:1,y:0}}
        transition={{duration:2,ease:easeIn}}
        >GadgetHub</motion.h2>

        <motion.nav
        initial={{opacity:0,y:15}}
        animate={{opacity:1,y:0}}
        transition={{duration:2,ease:easeIn}}
        >
          <a href="/">Home</a>
          <a href='/about'>About</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>

        </motion.nav>
      </header>

      {/* VERY IMPORTANT */}
      <main className="user-content">
        {children}
      </main>

      {/* <footer className="user-footer">
        <p>© 2025 GadgetHub</p>
      </footer> */}

    </div>
  );
};

export default Layout;
