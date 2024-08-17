$(document).ready(function() {
  // 遍历项目数组
  $.each(project, function(index, item) {
    var $item = $('<div>', {class: 'item'});
    var $content = $('<div>', {class: 'content'});
    var $title = $('<div>', {class: 'title'}).append(
      $('<div>', {class: 'separator'}),
      $('<span>', {id: 'name', text: item.name})
    );
    var $line1 = $('<div>', {class: 'line'});
    var $ct = $('<div>', {class: 'ct'}).append(
      $('<span>').text('　　' + item.introduction)
    );
    var $line2 = $('<div>', {class: 'line'});
    var $category = $('<div>', {class: 'category'}).append(
      $('<span>').text('标签:'),
      $('<span>').text(item.category.join(', '))
    );
    var $links = $('<div>').append(
      $('<a>', {href: item.demo, text: 'Demo'}),
      $('<span>').text('|'),
      $('<a>', {href: item.github, text: 'Github'})
    );

    $content.append($title, $line1, $ct, $line2, $category, $links);
    $item.append($content);

    $('#main').append($item);
  });
});