import React from "react";
import { Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar
          src="https://rlv.zcache.com/bitcoin_logo_symbol_cryptocurrency_crypto_sticker-r4730d97219de4b9eba916d50501b2dce_0ugmp_8byvr_307.jpg"
          size="Large"
        />
        <Typography.Title level={2} className="logo">
          <Link to="/">Crypto House</Link>
        </Typography.Title>
      </div>
      <Menu className="menu-item">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
