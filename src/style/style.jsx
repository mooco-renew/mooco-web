import styled from "styled-components";

export const Body = styled.div`
height: calc(var(--vh, 1vh) * 100);
background-color: #000000;
width: 100%;
aligh-items: center;

// 모바일 뷰를 위한 스타일
@media (max-width: 768px) {
}

// PC 뷰를 위한 스타일
@media (min-width: 769px) {
}
`

export const Container = styled.div`
width: 100%;
height: 100%;
display: flex; 
align-items: center; 
justify-content: center; 
`