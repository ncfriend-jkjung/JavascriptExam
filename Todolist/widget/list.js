export function createList(option) {
  var el = document.createElement("ul");
  var datas = option.datas;
  var columns = option.columns;

  el.style.listStyle = "none";
  el.style.padding = 0;

  render(datas, columns);

  // option.datas;
  // option.columns;

  var resObj = {
    el: el,
    reload: function () {
      el.innerHTML = "";
      render(datas, columns);
    },
    setData: function (inputdatas) {
      datas = inputdatas;
    }
  };
  Widget.listContents.push(resObj);
  return resObj;

  function render(datas, columns) {
    datas.forEach(function (data) {
      var liEl = document.createElement("li");

      columns.forEach(function (column) {
        var control = column.render(data);

        liEl.append(control.el);
      });

      el.append(liEl);
    });
  }
}
