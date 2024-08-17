contact.forEach(function(item) {
    // 使用三元运算符来决定是否包含<img>标签
    var imgTag = item.image ? `<img class="img" src="${item.image}"/>` : '';
    
    html = `
    <div class="item">
      <div class="content">
        <div class="title_bar">
          <div class="icon_wrapper" style="background-color: ${item.icon_color}">
            <i class="mdi ${item.icon} icon"></i>
          </div>
          <span>${item.name}</span>
        </div>
        <div class="ct">
          ${imgTag}  <!-- 这里使用${imgTag}代替原来的<img>标签 -->
          <span>${item.text}</span>
        </div>
      </div>
    </div>
  `;
  $('#main').append(html);
  const items = document.querySelectorAll('.item');
  // 对每个.item元素添加点击事件
  items.forEach(item => {
    const ct = item.querySelector('.ct');
    let isShown = false;
    item.addEventListener('click', function() {
      if (!isShown) {
        ct.classList.add('show');
        isShown = true;
      } else {
        ct.classList.remove('show');
        isShown = false;
      }
    });
  });

});