import React from 'react';

type BodyPropsType = {
    titleForBody: string
}

export const Body = (props: BodyPropsType) => {
    return (

        <div>
            <h3>{props.titleForBody}</h3>
            <div>Body</div>
        </div>
    );
}
