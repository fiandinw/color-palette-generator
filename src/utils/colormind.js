const getPalette = (callback) => {
  fetch("http://colormind.io/api/", {
    method: "POST",
    body: JSON.stringify({
      model: "default",
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      callback(res.result);
    });
};
export { getPalette };
