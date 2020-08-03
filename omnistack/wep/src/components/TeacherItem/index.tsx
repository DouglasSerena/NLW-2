import React from 'react';

import './style.css';

import whatsappIcon from './../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars2.githubusercontent.com/u/61251163?s=460&u=9a1935521826922a3b598cd97310c86cd1ab71e7&v=4"
                    alt="Douglas Serena"
                />
                <div>
                    <strong>Douglas Serena</strong>
                    <span>Matematica</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                in hendrerit augue.
                <br />
                <br />
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Vivamus tincidunt non magna luctus
                scelerisque.
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 75,00</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entra em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;
