import React from "react";
import { Link } from "react-router-dom";


const Home = () => {

    return (
        
        <div className="Home">
          <form className="Home_form">
         <h1>WELCOME TO AGRIMART !</h1>

         <Link to="/signin"><button>
            Sign in
         </button></Link>

              <Link to="/sign"><button>
              Sign Up 
              </button>  </Link>
              <Link to="/sellreg"> <button>
              Selling
              </button>  </Link>
         
         </form>
         </div>
         
    );
};
export default Home; 
