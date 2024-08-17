function createProgressItem(tech) {
  var colorClass = 'progress-bar-aqua';
  if (tech.extent <= 3) {
    colorClass = 'progress-bar-red';
  } else if (tech.extent <= 6) {
    colorClass = 'progress-bar-yellow';
  } else if (tech.extent <= 8) {
    colorClass = 'progress-bar-green';
  }

  var percent = parseInt(tech.extent) * 10;

  var html = '<div class="progress-group">' +
             '<span class="progress-text">' + tech.name + '</span>' +
             '<span class="progress-number"><b>掌握程度:' + tech.extent + '</b>/10</span>' +
             '<div class="progress sm">' +
               '<div class="progress-bar ' + colorClass + '" style="width: ' + percent + '%"></div>' +
             '</div>' +
           '</div>';

  return html;
}

// 假设 content 是一个已存在的 DOM 元素
var content = document.getElementById('content');

for (var i = 0; i < technology_stack.length; i++) {
  var tech = technology_stack[i];
  var html = createProgressItem(tech);
  content.innerHTML += html;
}