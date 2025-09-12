// 사이드바 토글 기능
document.addEventListener('DOMContentLoaded', function() {
  // 토글 버튼 생성
  const toggleButton = document.createElement('button');
  toggleButton.className = 'sidebar-toggle';
  toggleButton.setAttribute('aria-label', '사이드바 토글');
  toggleButton.innerHTML = `
    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  
  // 오버레이 생성
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  
  // DOM에 추가
  document.body.appendChild(toggleButton);
  document.body.appendChild(overlay);
  
  // 사이드바 요소 찾기
  const sidebar = document.querySelector('.left.sidebar');
  
  if (!sidebar) {
    console.warn('사이드바를 찾을 수 없습니다.');
    return;
  }
  
  // 사이드바 상태 관리
  let isOpen = false;
  
  // 사이드바 열기
  function openSidebar() {
    isOpen = true;
    sidebar.classList.add('show');
    overlay.classList.add('show');
    toggleButton.classList.add('active');
    document.body.classList.add('sidebar-open');
    
    // 접근성을 위한 포커스 관리
    sidebar.setAttribute('aria-hidden', 'false');
  }
  
  // 사이드바 닫기
  function closeSidebar() {
    isOpen = false;
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
    toggleButton.classList.remove('active');
    document.body.classList.remove('sidebar-open');
    
    // 접근성을 위한 포커스 관리
    sidebar.setAttribute('aria-hidden', 'true');
  }
  
  // 토글 기능
  function toggleSidebar() {
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
  
  // 이벤트 리스너
  toggleButton.addEventListener('click', toggleSidebar);
  
  // 오버레이 클릭 시 사이드바 닫기
  overlay.addEventListener('click', closeSidebar);
  
  // ESC 키로 사이드바 닫기
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen) {
      closeSidebar();
    }
  });
  
  // 사이드바 링크 클릭 시 모바일에서 자동 닫기
  const sidebarLinks = sidebar.querySelectorAll('a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      // 모바일 화면에서만 자동 닫기
      if (window.innerWidth <= 768) {
        setTimeout(closeSidebar, 100);
      }
    });
  });
  
  // 윈도우 리사이즈 처리
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1024 && isOpen) {
      // 데스크톱 크기에서는 오버레이 제거
      overlay.classList.remove('show');
    } else if (window.innerWidth <= 1024 && isOpen) {
      // 모바일/태블릿에서는 오버레이 표시
      overlay.classList.add('show');
    }
  });
  
  // 초기 상태 설정
  sidebar.setAttribute('aria-hidden', 'true');
  
  console.log('사이드바 토글 기능이 초기화되었습니다.');
});