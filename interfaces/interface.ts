import React from "react";

export type ComponentProps = {
  children?: React.ReactNode;
  data?:Result[];
  onClick?: () => void;
  direction?:string;
  media?:string;
  type?: string;
  placeholder?:string;
  required?:boolean;
  alignment?:string;
  color?:string;
  style?:string;
  icon?:boolean


};

export type Ref = HTMLAnchorElement;

export interface Result {
  id: string;
  fields: Fields;
  createdTime: string;
}

export interface Fields {
  meaning: string;
  engName: string;
  name: string;
  added: string;
  modified: string;
  card?: [] | undefined;
}

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  full?: string;
  direction?:string;
  icon?:boolean
}

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: string;
  hero?: string;
}

export interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  color?: string;
  selected?: boolean;
  name?:string;
}

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type: string;
  name?: string;
  required?: boolean;
  placeholder: string;
  value?: string | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit?: any;
}

export interface HeadingProps {
  color?: string;
  alignment?: string;
}

export interface ButtonProps {
  media?: string;
}

