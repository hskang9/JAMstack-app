import React from 'react';
import styled from '@emotion/styled';
import { connectHits } from 'react-instantsearch-dom';

import { OutboundLink } from 'gatsby-plugin-google-analytics';

const ReleaseCard = ({ hit }) => {
  return (
    <div className="raffle-card">
      <OutboundLink href={hit.link} style={{ textDecoration: 'none' }}>
        <Logo src={hit.logo} />
        <Site>
          <div
            style={{
              gridArea: 'site / site / site / site',
              margin: '0px 0px 8px',
              minWidth: '0px',
            }}
          >
            <h2 className="neumorphism-text-black" style={{ fontSize: '20px' }}>
              {hit.storeName}
            </h2>
          </div>
          <div
            style={{
              gridArea: 'meta / meta / meta / meta',
              textDecoration: 'none',
            }}
          >
            <Meta className="date">4월 4일, 1pm</Meta>
            <Meta>
              <Meta>{hit.place}</Meta>
              <Meta style={{ marginLeft: '10px' }}>{hit.price}</Meta>
            </Meta>
          </div>
        </Site>
      </OutboundLink>
      <div
        style={{
          gridArea: 'action / action / action / action',
          justifySelf: 'end',
          boxSizing: 'border-box',
          minWidth: '0px',
          display: 'flex',
          margin: '0px',
        }}
      >
        <OutboundLink href={hit.link} style={{ textDecoration: 'none' }}>
          <Button>제품 구매</Button>
        </OutboundLink>
      </div>
    </div>
  );
};

const Hits = ({ hits }) => {
  return (
    <div>
      {hits.map((hit) => (
        <ReleaseCard hit={hit} key={hit.objectID} />
      ))}
    </div>
  );
};

export const Releases = connectHits(Hits);

const Logo = styled.img`
  height: 80px;
  grid-area: logo / logo / logo / logo;
`;

const Site = styled.div`
  display: grid;
  grid-area: info/info/info/info;
  cursor: pointer;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat() (2, min-content);
  grid-template-areas: 'site site site site' 'meta meta meta meta';
  margin: 0px;
  text-decoration: none;
`;

const Meta = styled.div`
  .date {
    box-sizing: border-box;
    min-width: 0px;
    font-family: 'GT America Mono', -apple-system, monospace;
    line-height: 1.5;
    font-size: 11px;
    color: rgb(63, 63, 63);
    margin: 0px 16px 0px 0px;
    text-decoration: none;
  }
  box-sizing: border-box;
  min-width: 0px;
  display: flex;
  margin: 0px;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  color: rgb(63, 63, 63);
  font-family: 'GT America Mono', -apple-system, monospace;
  text-decoration: none;
  font-size: 15px;
`;

const Button = styled.button`
  box-sizing: border-box;
  min-width: 0px;
  -webkit-appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  font-size: 15px;
  font-weight: 300;
  color: rgb(255, 255, 255);
  cursor: pointer;
  background-color: rgb(7, 160, 93);
  font-family: 'GT America Extended', -apple-system, sans-serif;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  margin: 0px;
  text-decoration: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
