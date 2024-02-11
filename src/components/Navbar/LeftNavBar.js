import React, { useState } from "react";
import "../Navbar/LeftNavBar.css";
import logo from "../../assets/svg/logo.svg";
// import home from "../../assets/svg/home.svg";
import Home from "../../assets/svgComponent/home";
import Transaction from "../../assets/svgComponent/transaction";
import Accounts from "../../assets/svgComponent/accounts";
import Investments from "../../assets/svgComponent/investments";
import CreditCards from "../../assets/svgComponent/creditCards";
import Loans from "../../assets/svgComponent/loans";
import Services from "../../assets/svgComponent/services";
import MyPrivileges from "../../assets/svgComponent/myPrivileges";
import Settings from "../../assets/svgComponent/settings";

const leftBarLinks = [
  {
    img: <Home color={""} />,
    title: "Dashboard",
  },
  {
    img: <Transaction />,
    title: "Transactions",
  },
  {
    img: <Accounts />,
    title: "Accounts",
  },
  {
    img: <Investments />,
    title: "Investments",
  },
  {
    img: <CreditCards />,
    title: "Credit Cards",
  },
  {
    img: <Loans />,
    title: "Loans",
  },
  {
    img: <Services />,
    title: "Services",
  },
  {
    img: <MyPrivileges />,
    title: "My Privileges",
  },
  {
    img: <Settings />,
    title: "Setting",
  },
];

const LeftNavBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const top = 3.75 * selectedIndex;

  const handleLinkClick = (element, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="leftnavbar">
      <div className="bankdash">
        <div className="bankdash_logo">
          <img src={logo} alt="Home_Logo" />
          <h3 className="bankdash_word lato primary-color">BankDash.</h3>
        </div>
      </div>
      <div className="leftnavList-container">
        <div
          style={{ top: `${top}rem` }}
          className="slidebar primary-background "
        ></div>
        {leftBarLinks.map((el, i) => {
          return (
            <div
              className="left-nav-links"
              key={i}
              onClick={() => handleLinkClick(el, i)}
            >
              <div className="left-nav-links">
                <div className="link-img">
                  {/* <img src={el.img} alt="home" /> */}
                  {React.cloneElement(el.img, {
                    color: selectedIndex === i ? "#2d60ff" : "",
                  })}
                </div>
                <div className="link-title-container">
                  <h3 className="link-title inter grey-color">{el.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNavBar;
