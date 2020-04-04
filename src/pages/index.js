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
                to="/login/"
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
                  페이스북에서 업데이트를 받아보세요
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
                  인스타그램에서 래플이나 새신발에 관한 소식을 팔로우해보세요
                </Explanation>
              </KeyPoint4>
            </div>
            <a className="neumorphism-text-white-light" href="">
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
              <div className="right-panel">
                <SearchBox
                  className="neumorphism-white search-box"
                  searchAsYouType={true}
                />
                <Loading>
                  <CustomHits />
                </Loading>
              </div>
            </InstantSearch>
          </SearchBody>
        </SearchPanel>
      </div>
      <Footer></Footer>
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

  @media only screen and (max-width: 600px) {
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
  width: 50%;
  top: 0;
  background: #f0f0f0;
  border-bottom: #c2c2c5 solid 1px;
  align-items: center;
  display: flex;

  @media only screen and (max-width: 600px) {
    width: 100%;
    align-items: center;
  }
`;

const SearchPanel = styled.div`
  flex: 1;
  display: flex;
  border-radius: 8px;
  background: #f0f0f3;
  overflow: scroll;
  height: 100vh;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const SearchBody = styled.div`
  display: flex;
  margin-top: 100px;
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
`;

const Footer = styled.div`
  display: block;
  width: 100%;
  height: 200px;
  bottom: 0;
  background: #202020;
  z-index: 0;
`;

export default IndexPage;
