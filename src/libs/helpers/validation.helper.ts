export const isEmpty = (item: string) => {
  return item == null || item == undefined || item == "";
};

export const isUrl = (value?: string) => {
  if (!value || !value.includes("http")) return false;
  return true;
};

export const sanitizeAddress = (address: string, clearExtension = true) => {
  let output = address;
  if (clearExtension) output = output.replace("225", "");
  if (!clearExtension && output.includes("225") && !output.includes("+"))
    output = `+${output}`;
  return output;
};
