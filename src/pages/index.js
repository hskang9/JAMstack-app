import React from 'react';
import { Link } from 'gatsby';
import { useAuth } from 'gatsby-theme-firebase';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import algoliasearch from 'algoliasearch/lite';
import MobileLogo from '../vectors/logo-mobile.svg';
import Logo from '../vectors/launchpad.svg';
import {
  FaCheck,
  FaInstagram,
  FaFacebook,
  FaTag,
  FaEnvelope,
} from 'react-icons/fa';
import {
  InstantSearch,
  SearchBox,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import '../components/layout.css';
import '../components/algolia.css';
import { CustomHits } from '../components/sneakers-hits';
import { connectStateResults } from 'react-instantsearch/connectors';
import Loader from '../components/loader';
import LoginModal from '../components/login-modal';
import mobileIntroImage from '../images/hero.png';

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY,
);

const Loading = connectStateResults(({ searching, children }) => (
  <div>
    <div style={{ display: searching ? 'block' : 'none' }}>
      <Loader
        style={{
          width: '300px',
          height: '300px',
          position: 'absolute',
          top: '50%',
        }}
      />
    </div>

    <div style={{ display: searching ? 'none' : 'block' }}>{children}</div>
  </div>
));

const IndexPage = () => {
  const [toggleLogin, setToggleLogin] = React.useState(false);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
        }}
      >
        <SEO title="런치패드: 해외 스니커즈 래플 및 발매 소식을 모두 한곳에."></SEO>
        <Intro>
          <IntroPanel>
            <Logo></Logo>
            <h1 className="neumorphism-text-white">
              해외 스니커즈 래플 및 발매 소식을 모두 한곳에.
            </h1>
            <h2 className="neumorphism-text-white-light">
              런치패드 베타 서비스가 한정판 스니커즈 래플을 찾아서 당신에게
              전달해드립니다.
            </h2>
            <div className="neumorphism-grid">
              <KeyPoint1
                className="neumorphism-black"
                onClick={() => {
                  setToggleLogin(true);
                }}
              >
                <FaCheck
                  style={{
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    marginLeft: '30px',
                  }}
                />
                <Explanation className="neumorphism-text-white-light">
                  곧 출시될 스니커즈에 대한 소식을 바로 받아보세요.
                </Explanation>
              </KeyPoint1>
              <Link
                style={{
                  textDecoration: 'none',
                }}
                to="/"
                state={{
                  modal: false,
                }}
              >
                <KeyPoint2 className="neumorphism-black">
                  <FaTag
                    style={{
                      color: 'white',
                      width: '40px',
                      height: '40px',
                      marginLeft: '30px',
                    }}
                  />
                  <Explanation className="neumorphism-text-white-light">
                    내가 참여할 수 있는 래플만 찾아드립니다.
                  </Explanation>
                </KeyPoint2>
              </Link>
              <KeyPoint3 className="neumorphism-black">
                <FaFacebook
                  style={{
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    marginLeft: '30px',
                  }}
                />
                <Explanation className="neumorphism-text-white-light">
                  페이스북 페이지에서 업데이트를 받아보세요.
                </Explanation>
              </KeyPoint3>
              <KeyPoint4 className="neumorphism-black">
                <FaInstagram
                  style={{
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    marginLeft: '30px',
                  }}
                />
                <Explanation className="neumorphism-text-white-light">
                  인스타그램에서 래플이나 새로운 소식을 팔로우해보세요.
                </Explanation>
              </KeyPoint4>
            </div>
            <a
              className="neumorphism-text-white-light"
              href="https://forms.gle/yzy1YjGjywNaf3W87"
            >
              <h3 style={{ marginTop: '50px' }}>
                앱을 현재 제작 중입니다. 어느 플랫폼에 먼저 배포할지에 대해
                설문을 참여하고 싶으시다면 이 텍스트를 클릭해주세요.
              </h3>
            </a>
            <a
              style={{
                textDecoration: 'none',
              }}
              href="mailto:hskang9@gmail.com"
            >
              <BuyMeACoffee>
                <FaEnvelope
                  style={{
                    color: 'black',
                    width: '40px',
                    height: '40px',
                    marginLeft: '15px',
                  }}
                />
                <Explanation className="neumorphism-text-black">
                  문의 및 협력사항이 있으면 <br></br> 개발자한테 연락해봐요!
                </Explanation>
              </BuyMeACoffee>
            </a>
          </IntroPanel>
        </Intro>
        <SearchPanel>
          <SearchNav>
            <MobileLogo
              style={{
                paddingLeft: '20px',
                width: '120px',
                display: 'flex',
                marginTop: '10px',
              }}
            />
          </SearchNav>
          <MobileIntro>
            <h2
              className="neumorphism-text-white"
              style={{ marginLeft: '10px' }}
            >
              국내외 래플 및 발매 소식을 <br />
              모두 한곳에.
            </h2>
            <div
              className="neumorphism-text-white"
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
                marginTop: '40px',
              }}
            >
              <div style={{ marginBottom: '20px' }}>
                <FaCheck
                  style={{
                    color: 'white',
                    width: '15px',
                    height: '15px',
                    marginLeft: '10px',
                    marginRight: '10px',
                  }}
                />
                곧 출시될 아이템에 대한 래플이나 소식을 바로 받아보세요.
              </div>
              <div style={{ marginBottom: '20px' }}>
                <FaTag
                  style={{
                    color: 'white',
                    width: '15px',
                    height: '15px',
                    marginLeft: '10px',
                    marginRight: '10px',
                  }}
                />
                내가 참여할 수 있는 래플만 찾아드립니다.
              </div>
              <div style={{ marginBottom: '20px' }}>
                <FaFacebook
                  style={{
                    color: 'white',
                    width: '15px',
                    height: '15px',
                    marginLeft: '10px',
                    marginRight: '10px',
                  }}
                />
                페이스북에서 업데이트를 받아보세요.
              </div>
              <div style={{ marginBottom: '20px' }}>
                <FaInstagram
                  style={{
                    color: 'white',
                    width: '15px',
                    height: '15px',
                    marginLeft: '10px',
                    marginRight: '10px',
                  }}
                />
                인스타그램에서 새로운 소식을 팔로우해보세요.
              </div>
            </div>
          </MobileIntro>
          <SearchBody>
            <InstantSearch
              style={{ marginTop: '100px' }}
              indexName="product"
              searchClient={searchClient}
            >
              <div id="searchbox"></div>
              <Filters className="left-panel">
                <h2 style={{ fontFamily: 'roboto' }}>브랜드</h2>
                <RefinementList attribute="brand" />
                <Configure hitsPerPage={8} />
                <h2 style={{ fontFamily: 'roboto' }}>카테고리</h2>
                <RefinementList attribute="raffles" />
                <Configure hitsPerPage={8} />
                <ClearRefinements />
              </Filters>
              <div className="right-panel" style={{ maxHeight: 'fit-content' }}>
                <Loading>
                  <SearchBox
                    className="neumorphism-white search-box"
                    searchAsYouType={false}
                  />
                  <CustomHits />
                </Loading>
              </div>
            </InstantSearch>
          </SearchBody>
        </SearchPanel>
      </div>
      <Footer>
        <FooterContent>
          <SiteMap>
            <FooterHeader>LAUNCHPAD</FooterHeader>
            <br></br>
            <FooterText>런치패드 | 개발·편집자: 강형석</FooterText>
            <br></br>
            <FooterText>© LAUNCHPAD All Right Reserved.</FooterText>
          </SiteMap>
        </FooterContent>
      </Footer>
      {toggleLogin && <LoginModal setToggleLogin={setToggleLogin} />}
    </div>
  );
};

const Intro = styled.div`
  display: flex;
  flex: 1;
  width: 50%;
  background-color: #202020;
  justify-content: center;
  overflow: scroll;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Filters = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const SearchNav = styled.div`
  position: absolute;
  height: 50px;
  width: 100%;
  top: 0;
  background: #f0f0f0;
  border-bottom: #c2c2c5 solid 1px;
  align-items: center;
  display: flex;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    align-items: center;
  }
`;

const SearchPanel = styled.div`
  flex: 1;
  display: flex;
  border-radius: 8px;
  background: #f0f0f3;
  height: 100vh;
  min-height: 1000px;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const SearchBody = styled.div`
  display: flex;
  margin-top: 100px;
  @media only screen and (max-width: 1200px) {
    margin-top: 450px;
  }
`;

const MobileIntro = styled.div`
  display: none;
  @media only screen and (max-width: 1200px) {
    background-image: url(${mobileIntroImage});
    background-position: bottom;
    flex-direction: column;
    position: absolute;
    top: 50px;
    display: flex;
    width: 100%;
    height: 350px;
    padding: 10px 10px 10px 10px;
  }
`;

const IntroPanel = styled.div`
  padding-left: 48px;
  padding-right: 48px;
  padding-top: 96px;
  padding-bottom: 96px;
  width: 80%;
  height: 800px;
  background: #202020;
`;

const Explanation = styled.p`
  margin-left: 20px;
  width: 200px;
`;
const KeyPoint1 = styled.div`
  width: 350px;
  height: 100px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
`;

const KeyPoint2 = styled.div`
  width: 350px;
  height: 100px;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
`;

const KeyPoint3 = styled.div`
  width: 350px;
  height: 100px;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  align-items: center;
`;

const KeyPoint4 = styled.div`
  width: 350px;
  height: 100px;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  align-items: center;
`;

const BuyMeACoffee = styled.div`
  position: absolute;
  left: 50px;
  bottom: 50px;
  width: 270px;
  height: 50px;
  border-radius: 50px;
  background: yellow;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const Footer = styled.div`
  display: none;
  @media only screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    height: 100px;
    flex: 1 1 0%;
    background: #202020;
    box-sizing: border-box;
    z-index: 0;
  }
`;

const FooterContent = styled.div`
  display: flex;
  min-width: 0px;
  max-width: 1125px;
  flex-direction: column;
  padding: 24px 24px 24px 32px;
  align-items: flex-start;
  justify-content: space-between;
  @media only screen and (max-width: 600px) {
    padding: 24px;
  }
`;

const FooterHeader = styled.div`
  color: rgb(102, 102, 102);
  letter-spacing: 0.1em;
  font-weight: 500;
  font-size: 11px;
`;

const FooterText = styled.div`
  color: rgb(102, 102, 102);
  letter-spacing: 0.1em;
  font-weight: 500;
  font-size: 9px;
`;

const SiteMap = styled.div`
  display: block;
  line-height: 1.15;
  color: white;
  margin: 0px 8px 24px 0px;
`;

export default IndexPage;
