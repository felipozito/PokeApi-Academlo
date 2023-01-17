import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameTrainer } from "../store/slices/nameTrainer.slice";
import logo from "../assets/fondo-removebg-preview.png";
import pokeball from "../assets/pokeball.png";
import "../styles/home.css";

const Home = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const handleSubmit = (e) => {
            e.preventDefault();
            const inputValue = e.target.name.value.trim();

            if (inputValue.length !== 0) {
                  dispatch(setNameTrainer(inputValue));
                  navigate("/pokedex");
            }
            e.target.name.value = "";
      };

      return (
            <div className="home">
                  <div className="home_main">
                        <img src={logo} alt="" />
                        <h1>Hi Trainer!</h1>
                        <h2>To Start complete your name</h2>
                        <form className="form" onSubmit={handleSubmit}>
                              <input id="name" type="text" />
                              <button>Let's Go</button>
                        </form>
                  </div>
                  <div className="footer">
                        <div className="footer_red"></div>
                        <div className="footer_black"></div>
                        <img src={pokeball} alt="pokeball" />
                  </div>
            </div>
      );
};

export default Home;
