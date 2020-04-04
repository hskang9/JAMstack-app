import { connectHits } from 'react-instantsearch-dom';
import styled from '@emotion/styled';

import { Link } from 'gatsby';

const Hits = ({ hits }) => {
  return (
    <div style={{ marginLeft: '30px' }}>
      {hits.map((hit) => (
        <SneakersCard key={hit.objectID} className="neumorphism-white">
          <Frame
            className="neumorphism-white-inset"
            width={200}
            src={hit.image}
          />
          <Description>
            <h3>{hit.name}</h3>
            <h4 className="neumorphism-text-black-light">{hit.release_date}</h4>
            <Link
              style={{ textDecoration: 'none', color: '#202020' }}
              to={`/raffles/${hit.objectID}/`}
            >
              <Raffle className="neumorphism-white">
                <span className="neumorphism-text-white">래플</span>
              </Raffle>
            </Link>

            <br></br>
            <Link
              style={{ textDecoration: 'none', color: '#202020' }}
              to={`/releases/${hit.objectID}/`}
            >
              <ReleaseInfo className="neumorphism-white">
                <span className="neumorphism-text-black">출시 정보</span>
              </ReleaseInfo>
            </Link>
          </Description>
        </SneakersCard>
      ))}
    </div>
  );
};

export const CustomHits = connectHits(Hits);

const SneakersCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  min-height: 320px;
  overflow: auto;
  margin-top: 30px;
  transition: 0.25s;
  transform: translate3d(0px, 5px, 0px);

  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateZ(0.25em);
  }
`;

const Frame = styled.img`
  display: flex;
  margin-top: 20px;
  width: 250px;
  height: 150px;
  border-radius: 8px;
`;

const Description = styled.div`
  margin-top: 20px;
  width: 280px;
  min-height: 100px;
  padding-bottom: 20px;
  padding-left: 20px;
`;

const Raffle = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px !important;
  background: black;
  box-shadow: 6px 6px 11px #959597, -6px -6px 11px #ffffff;

  transition: 0.25s;

  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateZ(-0.03em);
  }
`;

const ReleaseInfo = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px !important;
  border: #202020 1px solid;

  transition: 0.25s;

  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateZ(-0.1em);
  }
`;
