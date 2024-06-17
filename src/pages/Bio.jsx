import React from 'react'
import BioContent from "../components/BioContent"
import styled from 'styled-components';

const HomeContainer = styled.div`
background: #137796;
`;

function Bio(){
    return(
        <HomeContainer>
            <BioContent/>
        </HomeContainer>
    )
}

export default Bio