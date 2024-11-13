"use client"
import styled from "styled-components";
const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;
const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const HomePage = () => {
    return (
        <Wrapper>
            <Title>
                ini dari styled components
            </Title>
        </Wrapper>
    );
};
export default HomePage;