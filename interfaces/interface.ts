import React from "react";

export type ComponentProps = {
  children?: React.ReactNode;
  data?: Result[];
  onClick?: () => void;
};

export type Ref = HTMLAnchorElement;

export interface Result {
  id: string;
  fields: Fields;
  createdTime: string;
}

export interface LetterComponents {
  children?: React.ReactNode;
  data?: Result[];
  letter?: string;
}

export interface Fields {
  meaning: string;
  engName: string;
  name: string;
  added: string;
  modified: string;
  card?: [] | undefined;
  sound?: SoundFields[];
}

export interface SoundFields {
  filename: string;
  id: string;
  size: number;
  type: string;
  url: string;
}

export interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  full?: string;
  direction?: string;
  icon?: boolean;
  width?: string;
  close?:string;
}

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  color?: string;
  hero?: string;
  direction?: string;
  justify?: string;
}

export interface AnchorProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  color?: string;
  selected?: boolean;
  name?: string;
}

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  value?: string | null;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface TextAreaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  required?: boolean;
  placeholder?: string;
  value?: string | null;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
  onSubmit?: any;
}

export interface HeadingProps extends ComponentProps {
  color?: string;
  alignment?: string;
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  media?: string;
}

export interface FormProps extends React.HTMLAttributes<HTMLFormElement>{
  
}

export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement>{
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}

export interface OptionProps extends React.HTMLAttributes<HTMLOptionElement>{
value: string;
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>{
  close?: string
}