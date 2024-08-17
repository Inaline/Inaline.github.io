// 假设此段代码在文档加载完成后执行
$(document).ready(function() {
  // 遍历数据并填充模板
  $.each(educate_info, function(index, eduInfo) {
    var $template = $('<li class="time-label"><span class="bg-red">' + eduInfo.start_time + ' - ' + eduInfo.graduation_time + '</span></li>' +
                      '<li><i class="fa mdi mdi-book bg-blue"></i>' +
                      '<div class="timeline-item no-shadow"><h3 class="timeline-header">' + eduInfo.school_grade + ':<a href="' + eduInfo.school_url + '">' + eduInfo.school + '</a></h3>' +
                      '<div class="timeline-body">' + eduInfo.school_introduction + '</div>' +
                      '<div class="timeline-footer"><a href="/pages/recall/' + eduInfo.school + '.html" class="btn btn-primary btn-xs">回忆录</a></div></div></li>');

    // 追加到指定的DOM元素
    $('#time_line').append($template);
  });
});