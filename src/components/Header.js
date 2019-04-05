import React, { Component } from 'react';



/*
                    <a class="p-2 text-dark" href="#">Leaderboard</a>
                    <a class="p-2 text-dark" href="#">How it Works</a>
                    <a class="p-2 text-dark" href="#">Support</a>

                <a class="btn btn-outline-primary" href="#">Get Started</a>
*/

class Header extends Component {
  render() {
    return (
       
            <div>
                <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 class="my-0 mr-md-auto font-weight-normal"><a class="p-2 text-dark" href="/">echo</a></h5>
                    <nav class="my-2 my-md-0 mr-md-3">
                        <a class="p-2 text-dark" href="#/leaderboard">Leaderboard</a>
                        <a class="p-2 text-dark" href="#/my_portfolio">My Portfolios</a>
                    </nav>
                    
                    <a class="btn btn-outline-primary" href="#">Get Started</a>
                </div>
                
              
            </div>
    );
  }
}

export default Header;







