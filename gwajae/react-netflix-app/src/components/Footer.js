import React from "react";
import styled from "styled-components";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterLinkContainer>
                    <FooterLinkTitle>디즈니 플러스 대한민국</FooterLinkTitle>
                    <FooterLinkContent>
                        <FooterLink href="https://help.netflix.com/ko/node/412">
                            디즈니 플러스 소개
                        </FooterLink>
                        <FooterLink href="https://help.netflix.com/ko">
                            고객 센터
                        </FooterLink>
                        <FooterLink href="https://help.netflix.com/ko/">
                            미디어 센터
                        </FooterLink>
                        <FooterLink href="https://help.netflix.com/ko/">
                            이용 약관
                        </FooterLink>
                    </FooterLinkContent>
                    <FooterDescContainer>
                        <FooterDescRights>
                            Disney Plus Rights Reserved.
                        </FooterDescRights>
                    </FooterDescContainer>
                </FooterLinkContainer>
            </FooterContent>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    border-top: 1px solid rgb(25, 25, 25);
    width: 100%;
    position: relative;
    z-index: 100;

    @media (max-width: 769px) {
        padding: 20px 20px;
        padding-bottom: 30px;
    }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
    width: 500px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FooterLinkTitle = styled.h1`
    color: gray;
    font-size: 17px;
`;

const FooterLinkContent = styled.div`
    display: flex;
    justify-content: space-bewteen;
    flex-wrap: nowrap;
    margin-top: 35px;

    @media (max-width: 768px) {
        margin-top: 26px;
    }
`;

const FooterLink = styled.a`
    color: gray;
    font-size: 14px;
    width: 120px;
    margin-bottom: 21px;
    text-decoration: none;
    text-align: center;
    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`;

const FooterDescContainer = styled.div`
    margin-top: 30px @media (max-width: 768px) {
        margin-top: 20px;
    }
`;

const FooterDescRights = styled.h2`
    color: white;
    font-size: 14px;
    text-align: center;
`;
