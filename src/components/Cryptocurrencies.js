import millify from "millify";
import { Card, Row, Col } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

function Cryptocurrencies(simplified) {
  const { data: cryptoList, isFetching } = useGetCryptosQuery();
  const [cryptos] = useState(cryptoList?.data?.coins);
  console.log(cryptos);
  if(isFetching) return 'Loading...'

  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image"  src={currency.iconUrl} alt="coinImg" />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p> Market Cap: {millify(currency.marketCap)}</p>
                <p> Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies;
