import { Buffer } from 'buffer';
export interface Tags {
  album?: string,
  artist?: string,
  title?: string,
  image?: string | {
    mime: string,
    type: {
      id: number,
      name: string
    },
    description: string,
    imageBuffer: Buffer
  } | undefined;
}

export interface fileList {
  file: string,
  active: boolean,
  tags?: Tags;
}
