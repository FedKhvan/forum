import React from 'react';

const AuthorizationForm = () => {
    return (
        <div>
            <h1>Авторизация</h1>
            <form action="">
                <label htmlFor="">Логин <input type="text"/></label>
                <label htmlFor="">Пароль <input type="text"/></label>
                <button type="submit">Авторизоваться!</button>
            </form>
        </div>
    );
};

export default AuthorizationForm;