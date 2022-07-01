import base from "./base.ts";
import { Row } from "../../wtc-mysql/types/Row.d.ts";

const changer = (data: Row, org: string, name: string, email: string) => {
  switch (data.Type) {
    case "p":
      return `    ${org}
    ${name} (${email})`;
    default:
      return `    ${name} (${email})`;
  }
};

export default (data: Row) => {
  const hidden = data.lWhois === 1;
  return base(
    `    Domain Name: ${data.sName}
    Registrar: ${data.RegistrarOrg}
    Whois Server: www.whois.uz
    Referral URL: http://www.cctld.uz/
    Name Server: ${data.dns1} ${data.ip1}
    Name Server: ${data.dns2} ${data.ip2}
    Name Server: ${data.dns3} ${data.ip3}
    Name Server: ${data.dns4} ${data.ip4}
    Status: ${data.dbStatus}
    Updated Date: ${data.lastUpd}
    Creation Date: 11-Feb-2020
    Expiration Date: ${data.dtExpired}`,
    data.RegistrarOrg || "",
    data.sName,
    `Registrant:
    ${
      hidden
        ? changer(data, data.CustomerOrg, data.CustomerName, data.CustomerEmail)
        : ""
    }
    ${hidden ? "not.defined." : data.CustomerAddress}
    ${data.CustomerCity}
    ${data.CustomerCountry}, ${data.CustomerPost}
    ${data.CustomerState}
    Tel. ${data.CustomerPhone}
    Fax. ${data.CustomerFax}`,
    `Creation Date: 11-Feb-2020\n` +
      `Expiration Date: 17-feb-2021`,
    `    ${data.dns1}
    ${data.dns2}
    ${data.dns3}
    ${data.dns4}`,
    `${
      hidden
        ? changer(data, data.AdminOrg, data.AdminName, data.AdminEmail)
        : ""
    }
    ${hidden ? "not.defined." : data.AdminAddress}
    ${data.AdminCity}
    ${data.AdminCountry}, ${data.AdminPost}
    ${data.AdminState}
    Tel. ${data.AdminPhone}
    Fax. ${data.AdminFax}`,
    `${hidden ? changer(data, data.TechOrg, data.TechName, data.TechEmail) : ""}
    ${hidden ? "not.defined." : data.TechAddress}
    ${data.TechCity}
    ${data.TechCountry}, ${data.TechPost}
    ${data.TechState}
    Tel. ${data.TechPhone}
    Fax. ${data.TechFax}`,
    `${hidden ? changer(data, data.BillOrg, data.BillName, data.BillEmail) : ""}
    ${hidden ? "not.defined." : data.BillAddress}
    ${data.BillCity}
    ${data.BillCountry}, ${data.BillPost}
    ${data.BillState}
    Tel. ${data.BillPhone}
    Fax. ${data.BillFax}`,
  );
};
