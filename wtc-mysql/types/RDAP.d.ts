// deno-lint-ignore-file
export interface Remark {
  type: string;
  title: string;
  description: string;
}

export interface Link {
  rel?: string;
  href: string;
  type: string;
}

export interface Event {
  eventDate: string;
  eventActor: number;
  eventAction: string;
}

export interface VCardArray {
}

export interface Entity {
  roles: string[];
  events?: Event[];
  remarks?: Event[];
  vcardArray: VCardArray;
  objectClassName: string;
}

export interface Terms {
  links: Link;
  title: string;
  description: string[];
}

export interface Nameserver {
  events: Event[];
  handle: string;
  status: string[];
  ldhName: string;
  objectClassName: string;
}

export interface RDAP {
  events: Event[];
  handle: string;
  status: string[];
  ldhName: string;
  notices: Terms[];
  entities: Entity[] | undefined;
  nameservers: Nameserver[];
  objectClassName: string;
  rdapConformance: string[];
  port43: string;
}
