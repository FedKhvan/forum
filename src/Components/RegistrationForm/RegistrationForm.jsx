import React from 'react';

const RegistrationForm = () => {
    return (
        <div>
            <h1>Регистрация</h1>
            <form action="">
                <label htmlFor="">Логин <input type="text"/></label>
                <label htmlFor="">Пароль <input type="text"/></label>
                <label htmlFor="">Повторите пароль <input type="text"/></label>
                <button type="submit">Зарегистрироваться!</button>
            </form>
        </div>
    );
};

export default RegistrationForm;