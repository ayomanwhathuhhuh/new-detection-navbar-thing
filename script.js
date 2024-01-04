function currentpositionfunction(theelement) {
  return +(theelement.getBoundingClientRect().top / window.innerHeight).toFixed(
    2
  );
}
setInterval(() => {
  let belaf = currentpositionfunction(document.getElementById('hello'));
  let e = window.visualViewport;
  console.log(document.body.scrollTop);
  console.log(belaf);
}, 500);
