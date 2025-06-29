import React from 'react';
import { createRoot } from 'react-dom/client';
import Body from './components/Body';


const Wrapper = () => {
    return (
        <div>
            <Body></Body>
        </div>
    )
}

const checkRoot = createRoot(document.getElementById('wrapper'));
checkRoot.render(<Wrapper></Wrapper>);