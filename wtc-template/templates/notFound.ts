import copyright from "./copyright.ts";

export default (name: string) =>
  `% Uzbekistan Whois Server Version 1.0

% Domain names in the .uz domain can now be registered
% with many different competing registrars. Go to http://www.cctld.uz/
% for detailed information.

Sorry, but domain: "${name}", not found in database

${copyright()}`;
