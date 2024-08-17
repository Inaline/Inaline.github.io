$('#introduce_p').html(introduction);

// 获取 tbody 元素
var tbodyElement = document.getElementById('tbody');

// 遍历 information 数组并生成表格行
information.forEach(function(item) {
  var row = document.createElement('tr');
  row.innerHTML = `
    <td>${item.name}</td>
    <td>${item.value}</td>
  `;
  tbodyElement.appendChild(row);
});

$('.content .hello').text(`Hi,你好!我是${name}`)
$('.content .info_n').text(info_n)