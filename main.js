window.addEventListener('scroll', () => {

  const scrollTop = window.pageYOffset; // 頁面頂部的位置
  
  const rotationAngle = scrollTop *0.1; // 旋轉的角度
  
  const circle = document.getElementById('circle');
  circle.style.transform = `rotate(${rotationAngle}deg)`; // 將旋轉角度設定到圖片
});