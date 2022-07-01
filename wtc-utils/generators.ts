import { Event, Nameserver } from "../wtc-mysql/types/RDAP.d.ts";

export function generateOrder(index: number) {
  switch (index) {
    case 0:
      return "last changed";
    case 1:
      return "registration";
    case 2:
      return "expiration";
    default:
      return "undefined!";
  }
}

export const generateEvents = (date: (string | Date)[]): Event[] => {
  return date.map((o, i) =>
    <Event> ({
      eventDate: o,
      eventActor: 9999,
      eventAction: generateOrder(i),
    })
  );
};

// Add more evaluations while rewriting
export const generateStatus = (
  expiration: string | Date,
): string[] => {
  return (Math.floor(new Date().getTime() / 1000) >
      Math.floor(new Date(expiration).getTime() / 1000))
    ? ["active"]
    : ["inactive"];
};

export const generateNameserver = (
  data: { name: string; ip: string; updated: string }[],
): Nameserver[] => {
  const result: Nameserver[] = [];

  for (const item of data) {
    result.push({
      handle: `H${crypto.randomUUID()}-UZ`,
      ldhName: item.name,
      objectClassName: "nameserver",
      status: ["active"],
      events: generateEvents([item.updated]),
    });
  }

  return result;
};
