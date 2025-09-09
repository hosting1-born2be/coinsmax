export type InsightPreview = {
  id: string;
  title: string;
  excerpt: string;
  imgUrl: string;
  slug: string;
  seo_title: string;
  seo_description: string;
};

export type Insight = InsightPreview & {
  content: { root: { children: Children[] } };
};

export type Children = {
  type: string;
  format: string;
  indent: number;
  version: number;
  children: Children2[];
  direction: string;
  textStyle?: string;
  textFormat?: number;
  tag?: string;
  start?: number;
  listType?: string;
};

export type Children2 = {
  mode?: string;
  text?: string;
  type: string;
  style?: string;
  detail?: number;
  format: number;
  version: number;
  id?: string;
  fields?: Fields;
  indent?: number;
  children?: Children3[];
  direction?: string;
  value?: number;
  textFormat?: number;
};

export type Fields = {
  url: string;
  newTab: boolean;
  linkType: string;
};

export type Children3 = {
  mode?: string;
  text?: string;
  type: string;
  style?: string;
  detail?: number;
  format: number;
  version: number;
  id?: string;
  fields?: Fields2;
  indent?: number;
  children?: Children4[];
  direction?: string;
};

export type Fields2 = {
  url: string;
  newTab: boolean;
  linkType: string;
};

export type Children4 = {
  mode: string;
  text: string;
  type: string;
  style: string;
  detail: number;
  format: number;
  version: number;
};
