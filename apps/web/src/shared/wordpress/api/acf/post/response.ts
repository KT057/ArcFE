// Acfの定義の内容でここは変わる

export type WPPostResponse = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: "publish" | "draft" | "private" | "pending" | "future";
  type: "post" | "page" | string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  comment_status: "open" | "closed";
  ping_status: "open" | "closed";
  sticky: boolean;
  template: string;
  format:
    | "standard"
    | "aside"
    | "chat"
    | "gallery"
    | "link"
    | "image"
    | "quote"
    | "status"
    | "video"
    | "audio";
  meta: {
    footnotes: string;
  };
  categories: number[];
  tags: number[];
  _embedded: {
    author: {
      avatar_urls: {
        24: string;
        48: string;
        96: string;
      };
      id: number;
      name: string;
      description: string;
      slug: string;
      url: string;
    }[];
    "wp:featuredmedia": {
      id: number;
      slug: string;
      title: { rendered: string };
      media_type: "image" | "video" | "audio" | "file";
      mime_type: string;
      source_url: string;
      media_details: {
        width: number;
        height: number;
      };
    }[];
    "wp:term": {
      id: number;
      taxonomy: "category" | "post_tag";
      slug: string;
      name: string;
    }[][];
  };
};
