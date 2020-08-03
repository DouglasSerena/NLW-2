import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from './../../assets/images/logo.svg';
import LandingImg from './../../assets/images/landing.svg';

import studyIcons from './../../assets/images/icons/study.svg';
import giveClassesIcons from './../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from './../../assets/images/icons/purple-heart.svg';

import './style.css';

export default function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataform de estudos online.</h2>
                </div>
                <img
                    src={LandingImg}
                    alt="Plataform de estudo"
                    className="hero-image"
                />
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcons} alt="Estudar" />
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcons} alt="Dar aulas" />
                        Dar aulas
                    </Link>
                </div>
                <span className="total-connections">
                    Total de 200 conexões já realizadas{' '}
                    <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    );
}
