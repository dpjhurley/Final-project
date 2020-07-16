import React from 'react';
import { Link } from 'react-router-dom';
import HiddenMenu from './HiddenMenu.jsx';
import HiddenMenuMen from './HiddenMenuMen.jsx';
import HiddenMenuSearch from './HiddenMenuSearch.jsx';
import HiddenMenuWomen from './hiddenMenuWomen.jsx';
import HiddenMenuKids from './hiddenMenuKids.jsx';
import HiddenMenuAccessories from './HiddenMenuAccessories.jsx';
import HiddenMenuBrands from './HiddenMenuBrands.jsx';

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           
            hiddensearch: true,
          

        }
    }

 
    handleOnClickHiddenSearch = (event) => {
        this.setState({
            hiddensearch: !this.state.hiddensearch
        })
        const hiddenSearchField = document.querySelector('#hiddenSearch');
        console.log(hiddenSearchField.classList);
        if(this.state.hiddensearch === true){
             hiddenSearchField.classList = 'hiddenMenusearch'
        
        }else{
            hiddenSearchField.classList = 'hiddenMenusearch  hidden'
        }
       
    }

    render() {
        const { handleExtensionChange } = this.props;
        return (
            <nav className="mainNav">
    
            <div className="mainNav__list ">

                <button className="mainNav__link__item--btn" onClick={handleExtensionChange}  value='/women'>
                    <div className="mainNav__list__item">
                        <Link to="/women" className="link__inner" >Women's</Link>
                        <HiddenMenuWomen />
                   </div>
                </button>

                <button className="mainNav__link__item--btn" onClick={handleExtensionChange}  value='/men'>
                    <div className="mainNav__list__item">
                        <Link to="/men" >Men's</Link>
                        <HiddenMenuMen />
                    </div>
                </button>

                <button className="mainNav__link__item--btn" onClick={handleExtensionChange} value='/kids'>
                    <div className="mainNav__list__item">
                        <Link to="/kids" >Kids</Link>
                        <HiddenMenuKids />
                    </div>
                </button>
                                  
            </div>

            <div className="mainNav__list" >
                <Link to="/"> <h1><i className="fas fa-globe"></i> Global</h1></Link>
            </div>

            <div className="mainNav__list">

                <div className="mainNav__list__item" >
                    <Link to="/accessories">Accessories</Link>
                    <HiddenMenuAccessories />
                </div>

                <div className="mainNav__list__item">
                    <Link to="brands">Brands</Link>
                    <HiddenMenuBrands />
                </div>

                {/* <div className="mainNav__list__item">
                    <Link to="sales" style={{color: "red"}}>Sale</Link>
                    <HiddenMenu />
                </div> */}

                <div className="mainNav__list__icons">
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"> </i>
                    </Link>
                </div>

                <div className="mainNav__list__icons search-icon" onClick={this.handleOnClickHiddenSearch} >
                    
                        <i className="fas fa-search"></i>
                   
                </div>
                <HiddenMenuSearch handleOnClickHiddenSearch={this.handleOnClickHiddenSearch} />
            </div>
        </nav>
        
 
        )
    }
}