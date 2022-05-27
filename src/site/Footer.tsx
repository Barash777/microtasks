import React from 'react';

type FooterPropsType = {
    text: string
}

export const Footer = (props: FooterPropsType) => {
    return (
        <footer>{props.text}</footer>
    );
}
