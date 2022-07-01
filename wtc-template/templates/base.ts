import copyright from "./copyright.ts";

export default (
  main: string,
  status: string,
  name: string,
  customer: string,
  dates: string,
  dns: string,
  admin: string,
  technic: string,
  billing: string,
) =>
  `% Uzbekistan Whois Server Version 1.0

% Domain names in the .uz domain can now be registered
% with many different competing registrars. Go to http://www.cctld.uz/
% for detailed information.
${main}

% >>> Last update of whois database: ${new Date().toTimeString()} <<<

% NOTICE: The expiration date displayed in this record is the date the
% registrar's sponsorship of the domain name registration in the registry is
% currently set to expire. This date does not necessarily reflect the expiration
% date of the domain name registrant's agreement with the sponsoring
% registrar.  Users may consult the sponsoring registrar's Whois database to
% view the registrar's reported date of expiration for this registration.

% TERMS OF USE: You are not authorized to access or query our Whois
% database through the use of electronic processes that are high-volume and
% automated except as reasonably necessary to register domain names or
% modify existing registrations; the Data in Center UZINFOCOM ccTLD.uz
% Services ( Center UZINFOCOM ) Whois database is provided by Center UZINFOCOM for
% information purposes only, and to assist persons in obtaining information
% about or related to a domain name registration record. Center UZINFOCOM does not
% guarantee its accuracy. By submitting a Whois query, you agree to abide
% by the following terms of use: You agree that you may use this Data only
% for lawful purposes and that under no circumstances will you use this Data
% to: (1) allow, enable, or otherwise support the transmission of mass
% unsolicited, commercial advertising or solicitations via e-mail, telephone,
% or facsimile; or (2) enable high volume, automated, electronic processes
% that apply to Center UZINFOCOM (or its computer systems). The compilation,
% repackaging, dissemination or other use of this Data is expressly
% prohibited without the prior written consent of Center UZINFOCOM. You agree not to
% use electronic processes that are automated and high-volume to access or
% query the Whois database except as reasonably necessary to register
% domain names or modify existing registrations. Center UZINFOCOM reserves the right
% to restrict your access to the Whois database in its sole discretion to ensure
% operational stability. Center UZINFOCOM may restrict or terminate your access to the
% Whois database for failure to abide by these terms of use. Center UZINFOCOM
% reserves the right to modify these terms at any time.

% The Registry database contains ONLY .UZ domains and
% Registrars.

% Registration Service Provided By: UZINFOCOM Администратор

Domain Name: ${name}

${customer}
${dates}

Domain servers in listed order:
${dns}

Administrative Contact:
${admin}

Technical Contact:
${technic}

Billing Contact:
${billing}

Status: ${status}

% The data in this whois database is provided to you for information purposes only, that is, to assist you in obtaining
% information about or related to a domain name registration record. We make this information available "as is", and do
% not guarantee its accuracy. By submitting a whois query, you agree that you will use this data only for lawful 
% purposes and that, under no circumstances will you use this data to:(1) enable high volume, automated, electronic 
% processes that stress or load this whois database system providing you this information; or(2) allow,  enable, or 
% otherwise % support the transmission of mass unsolicited,  commercial advertising or solicitations via direct mail,
% electronic mail, or by telephone. The compilation, repackaging, dissemination or other use of this data is expressly
% prohibited without prior written consent from us. The registrar of record is Critical Internet, Inc.. We reserve the
% right to modifythese terms at any time. By submitting this query, you agree to abideby these terms.


${copyright()}`;
