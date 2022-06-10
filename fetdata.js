let fetdata = async (url) => {
  let res = await fetch(url);
  let raw = await res.json();
  return raw;
};
export default fetdata;
