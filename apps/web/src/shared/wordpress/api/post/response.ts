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
  _links: {
    self: Array<{
      href: string;
      targetHints?: {
        allow: string[];
      };
    }>;
    collection: Array<{
      href: string;
    }>;
    about: Array<{
      href: string;
    }>;
    author: Array<{
      embeddable: boolean;
      href: string;
    }>;
    replies: Array<{
      embeddable: boolean;
      href: string;
    }>;
    "version-history": Array<{
      count: number;
      href: string;
    }>;
    "predecessor-version"?: Array<{
      id: number;
      href: string;
    }>;
    "wp:featuredmedia"?: Array<{
      id: number;
      slug: string;
      title: { rendered: string };
      media_type: "image" | "video" | "audio" | "file";
      mime_type: string;
      media_details: {
        width: number;
        height: number;
        sizes: {
          medium?: {
            source_url: string;
          };
          large?: {
            source_url: string;
          };
          thumbnail?: {
            source_url: string;
          };
          full: {
            source_url: string;
          };
        };
      };
      source_url: string;
    }>;
    "wp:attachment": Array<{
      href: string;
    }>;
    "wp:term": Array<{
      taxonomy: "category" | "post_tag" | string;
      embeddable: boolean;
      href: string;
    }>;
    curies: Array<{
      name: string;
      href: string;
      templated: boolean;
    }>;
  };
};
