import React from "react";
import { BiPlus } from "react-icons/bi";

type Props = {
  name: string;
  info: {
    name: string;
    items: {
      name: string;
      price: string;
      _key: string;
    }[];
    addons: {
      _key: string;
      name: string;
      price: string;
    }[];
  };
};

export default function PriceList({ name, info }: Props) {
  if (!info) {
    return <></>;
  }
  return (
    <div className={`${name} price-list`}>
      <h3 className="h">{info.name}</h3>
      <div className="main-prices">
        {info.items &&
          info.items.map((item) => {
            return (
              <div className="price" key={item._key}>
                <h4 className="name">{item.name}</h4>
                <p className="amount">{item.price}+</p>
              </div>
            );
          })}
        {/* <div className="price">
          <h4 className="name">Half Body Model Art</h4>
          <p className="amount">$600+</p>
        </div>
        <div className="price">
          <h4 className="name">Half Body Model Art</h4>
          <p className="amount">$600+</p>
        </div> */}
      </div>
      {info.addons && (
        <div className="add-ons">
          <div className="ao-title">
            <div className="icon">
              <BiPlus />
            </div>
            <h4>ADD-ONS</h4>
          </div>

          <div className="ao-list">
            {info.addons &&
              info.addons.map((ao) => {
                return (
                  <div className="ao" key={ao._key}>
                    <p className="name"> {ao.name}</p>
                    <p className="amount"> {ao.price}</p>
                  </div>
                );
              })}
            {/* <div className="ao">
							<p className="name"> Character Design</p>
							<p className="amount"> $500+</p>
						</div>
						<div className="ao">
							<p className="name"> Character Design</p>
							<p className="amount"> $500+</p>
						</div> */}
          </div>
        </div>
      )}
    </div>
  );
}
