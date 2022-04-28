import React from "react";

export interface ITypography {
  text: string;
}

export interface ICard {
  children: React.ReactNode;
}

export type rateObj = {
  rate: string;
  key: string;
};

export interface IList {
  rates: { string: rateObj };
}

export interface ISearch {
    onChange: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
}
