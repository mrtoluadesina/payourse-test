import React from "react";

export interface ICard {
  children: React.ReactNode;
}

export type IRate = {
  rate: string;
  key: string;
};

export interface IRateList {
  rates: { string: IRate };
}

export interface ISearch {
  onChange: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  placeholder: string;
}

export interface ICoin {
  cryptoCoin: string;
  rate: number;
}

export interface IButton {
  children: React.ReactNode;
  onClick: () => void;
}
