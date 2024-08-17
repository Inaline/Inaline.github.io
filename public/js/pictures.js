const generateGalleryItems = (images) => {
  let html = '';

  images.forEach((album, index) => {
    html += `
      <div class="item" data-index="${index}">
        <div class="content_i">
          <img class="square-image" src="${album.cover}" alt="Square Image">
          <div class="fixed-height-div">${album.name}</div>
        </div>
      </div>
    `;
  });

  return html;
};

const showGalleryContent = (index) => {
  const mainElement = document.getElementById('main');
  mainElement.innerHTML = ''; // 清空主容器

  const album = images[index];

  let contentHtml = `
    <div class="item">
      <div class="content_i">
        <img class="square-image" src="/image/back.png" alt="Back Button">
        <div class="fixed-height-div">返回上一级</div>
      </div>
    </div>
    ${album.content.slice(0, 20).map(item => `
      <div class="item">
        <div class="content_i">
          <img class="square-image" src="${item.url}" alt="Square Image">
          <div class="fixed-height-div">${item.text}</div>
        </div>
      </div>
    `).join('')}
  `;

  mainElement.innerHTML = contentHtml;

  // 添加返回按钮的点击事件
  const backButton = mainElement.querySelector('.square-image[src="/image/back.png"]');
  backButton.addEventListener('click', function() {
    mainElement.innerHTML = generateGalleryItems(images); // 显示所有图集项
  });
};

// 给每个图集项添加点击事件
document.getElementById('main').addEventListener('click', function(event) {
  const target = event.target;
  if (target.classList.contains('square-image') && !target.src.includes('/image/back.png')) {
    const index = target.closest('.item').dataset.index;
    showGalleryContent(index);
  }
});

// 添加滚动监听事件来加载更多内容
const handleScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    // 当滚动到底部时，加载更多内容
    const currentIndex = parseInt(mainElement.querySelector('.item').dataset.index);
    const currentContentLength = mainElement.querySelectorAll('.item > .content_i').length - 1; // 减去返回按钮
    if (currentContentLength < images[currentIndex].content.length) {
      const newContent = images[currentIndex].content.slice(currentContentLength, currentContentLength + 20);
      newContent.forEach(item => {
        const itemHtml = `
          <div class="item">
            <div class="content_i">
              <img class="square-image" src="${item.url}" alt="Square Image">
              <div class="fixed-height-div">${item.text}</div>
            </div>
          </div>
        `;
        mainElement.insertAdjacentHTML('beforeend', itemHtml);
      });
    }
  }
};

// 初始化时添加滚动监听
window.addEventListener('scroll', handleScroll);

// 假设这里有一个元素用于存储 JSON 数据
const jsonElement = document.createElement('script');
jsonElement.id = 'images-data';
jsonElement.textContent = JSON.stringify(images); // 这里是示例数据
document.body.appendChild(jsonElement);

// 初始生成图集列表
document.getElementById('main').innerHTML = generateGalleryItems(images);