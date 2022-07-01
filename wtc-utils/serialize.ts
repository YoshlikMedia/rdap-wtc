import { Row } from "../wtc-mysql/types/Row.d.ts";
import { RDAP } from "../wtc-mysql/types/RDAP.d.ts";
import {
  generateEvents,
  generateNameserver,
  generateStatus,
} from "./generators.ts";

export default (data: Row): RDAP => ({
  events: generateEvents([data.lastUpd, data.dtRegistered, data.dtExpired]),
  handle: `D${data.iIndex}-UZ`,
  status: generateStatus(data.dtExpired),
  ldhName: data.sName,
  notices: [
    {
      links: {
        rel: "terms-of-service",
        href: "https://cctld.uz",
        type: "text/html",
      },
      title: "Terms of service",
      description: [
        "",
        "Copyright (c) 2022 by Uzinfocom (1)",
        "Except for agreed Internet operational purposes, no part of this information may be reproduced, stored in a retrieval system, or transmitted, in any form or by any means, electronic, mechanical, recording, or otherwise, without prior permission of Uzinfocom on behalf of itself and/or the copyright holders. Any use of this material to target advertising or similar activities is explicitly forbidden and can be prosecuted.",
        "Furthermore, it is strictly forbidden to use the RDAP database in such a way that jeopardizes or could jeopardize the stability of the technical systems of Uzinfocom under any circumstances. In particular, this includes any misuse of the RDAP database and any use of the RDAP database which disturbs its operation.",
        "Should the user violate these points, Uzinfocom reserves the right to deactivate the RDAP database entirely or partly for the user. Moreover, the user shall be held liable for any and all damage arising from a violation of these points.",
      ],
    },
    {
      links: {
        href: "https://icann.org/epp",
        type: "text/html",
      },
      title: "Status Codes",
      description: [
        "For more information on domain status codes, please visit https://icann.org/epp",
      ],
    },
    {
      links: {
        href: "https://icann.org/wicf",
        type: "text/html",
      },
      title: "RDDS Inaccuracy Complaint Form",
      description: [
        "URL of the ICANN RDDS Inaccuracy Complaint Form: https://icann.org/wicf",
      ],
    },
  ],
  // TODO: Implement or Create a library for VCardArray Generation
  entities: undefined,
  nameservers: generateNameserver([{
    name: data.dns1,
    ip: data.ip1,
    updated: "",
  }, {
    name: data.dns1,
    ip: data.ip1,
    updated: "",
  }, {
    name: data.dns1,
    ip: data.ip1,
    updated: "",
  }, {
    name: data.dns1,
    ip: data.ip1,
    updated: "",
  }]),
  objectClassName: "domain",
  port43: "cctld.uz",
  rdapConformance: [
    "rdap_level_0",
    "icann_rdap_response_profile_0",
    "icann_rdap_technical_implementation_guide_0",
  ],
});
