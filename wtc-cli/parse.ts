type argy = {
  [key: string]: string | null;
};

export default (args: string[]) => {
  const object: argy = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("-")) {
      object[args[i]] = null;
    } else {
      object[args[i - 1]] = args[i];
    }
  }
  return object;
};
