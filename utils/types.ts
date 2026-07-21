export type Media = {
  type?: string;
  title?: string;
  demo?: string;
  url: string;
};

export type Link = {
  name: string;
  url: string;
};

export type Project = {
  id: number;
  url: string;
  name: string;
  github: string;
  description: string;
  technologies: string[];
  image: string;
  media?: Media[];
  links?: Link[];
};
