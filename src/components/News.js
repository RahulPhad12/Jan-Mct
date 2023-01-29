import React from "react";
import moment from "moment";
import {Typography, Row, Col, Avatar, Card } from "antd";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;

function News({ simplified }) {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
  });
  console.log(cryptoNews);

  if (!cryptoNews?.value) return "Loading...";
  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="blank" rel="noref">
              <div className="news-image-conatiner">
                <Title className="news-title" level={5}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: "100px", maxHeight: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl}
                  alt=""
                />
              </div>
              <p>
                {news.description > 50
                  ? `${news.description.substring(0, 40)}...`
                  : news.description}
              </p>

              <div className="provider-container">
                <div>
                  <Avatar
                    src={news.provider[0]?.image?.thumbnail?.contentUrl}
                    alt=""
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
