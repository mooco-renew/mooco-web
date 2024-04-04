import styled from "styled-components";

export const Container = styled.div`
height: calc(var(--vh, 1vh) * 100);
background-color: #000000;
width: 100%;

// 모바일 뷰를 위한 스타일
@media (max-width: 768px) {
}

// PC 뷰를 위한 스타일
@media (min-width: 769px) {
}
`