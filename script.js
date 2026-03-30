document.addEventListener('DOMContentLoaded', () => {
    const weeklyBtn = document.getElementById('weeklyBtn'); // HTML 버튼 ID와 맞춰주세요
    const popup = document.getElementById('weeklyPopup');
    const closeBtn = document.getElementById('closePopup');
    const content = document.getElementById('markdownContent');

    // 팝업 열기 버튼 클릭 시
    weeklyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 1. 마크다운 파일 가져오기
        fetch('./weekly-letter/2026-03-30.md')
            .then(res => res.text())
            .then(data => {
                content.innerHTML = marked.parse(data);
                
                // 2. 팝업 표시
                popup.style.display = 'flex';
                setTimeout(() => {
                    popup.classList.add('active');
                }, 10);
            });
    });

    // 닫기 버튼 클릭 시
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500); // 애니메이션 시간 후 제거
    });
});
