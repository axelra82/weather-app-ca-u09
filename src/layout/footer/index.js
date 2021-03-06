/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import './style.scss';

export default () => {

    return(
        <footer id="main-footer">
            <article className='container ts-small fw-thin text-center'>
                <p>
                    CREDITS <a href='https://openweathermap.org/api'>@OPENWEATHERMAP.ORG</a> | <a href='https://erikflowers.github.io/weather-icons/'>@ERIKFLOWERS.GITHUB.IO</a>
                </p>
                <p>
                    REPO <a href='https://github.com/axelra82/weather-app-ca-u09'>@GITHUB</a> | CHAS ACADEMY ASSIGNMENT U09 | AXEL ROUSSILLE ÅBERG 2021
                </p>
            </article>
        </footer>
    )
}