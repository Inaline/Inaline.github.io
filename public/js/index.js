


// 定义获取IP归属地的函数
function getIpLocation() {
  // 发起AJAX请求
  $.ajax({
    url: 'https://api.ip.sb/geoip',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      // 检查响应数据
      if (data && data.country) {
        const country = data.country;
        const city = data.city || '未知';
        const region = data.region;
        var ip = data.ip;
        $('#address_msg').text(`Friend from ${city},${region}.`)
        
        if (country == "China") {
        } else {
          alert('You are not Chinese.');
        }
      }
    },
    error: function(xhr, status, error) {
      alert('发生错误');
    }
  });
}

// 调用函数
getIpLocation();