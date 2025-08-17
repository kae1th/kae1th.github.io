document.addEventListener('DOMContentLoaded', () => {
  
  // 获取导航栏按钮
  const toggleBtn = document.getElementById('nav-darkmode-toggle');
  if (!toggleBtn) return;

  // 绑定点击事件（复用主题原生切换逻辑）
  toggleBtn.addEventListener('click', () => {
    // 判断当前模式
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
      // 切换到浅色模式
      document.documentElement.removeAttribute('data-theme'); // 移除深色属性
      localStorage.setItem('butterfly_darkmode', 'false'); // 保存状态
      console.log('已切换到浅色模式');
    } else {
      // 切换到深色模式
      document.documentElement.setAttribute('data-theme', 'dark'); // 添加深色属性
      localStorage.setItem('butterfly_darkmode', 'true'); // 保存状态
      console.log('已切换到深色模式');
    }
  });

  // 初始化：根据本地存储恢复模式
  if (localStorage.getItem('butterfly_darkmode') === 'true') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
});