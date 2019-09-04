import React from 'react';
const titleLarge = {
    color: "blue",
    'text-align': "center",
    'font-size': "60px",
    fontFamily: "Comic Sans MS",
};

const titleSmall = {
    'text-align': "center",
    'font-size': "30px",
    fontFamily: "Comic Sans MS",
};
const Landing = () => (
    <div>
        <p style={titleLarge}>Welcome to our simple To-do list app!</p>
        <p style={titleSmall}>Take some time to register and discover the feature :)</p>
    </div>
);
export default Landing;