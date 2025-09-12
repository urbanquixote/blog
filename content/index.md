---
title: Quality Investing
---

<style>
:root {
    /* Apple HIG Colors */
    --system-blue: #007AFF;
    --system-red: #FF3B30;
    --system-gray: #8E8E93;
    --system-gray-2: #AEAEB2;
    --system-gray-3: #C7C7CC;
    --system-gray-4: #D1D1D6;
    --system-gray-5: #E5E5EA;
    --system-gray-6: #F2F2F7;
    --label-primary: #000000;
    --label-secondary: #3C3C43;
    --label-tertiary: #3C3C4399;
    --background-primary: #FFFFFF;
    --background-secondary: #F2F2F7;
    --separator: #3C3C4349;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", system-ui, sans-serif;
    background-color: var(--background-secondary);
    color: var(--label-primary);
    line-height: 1.47059;
    font-size: 17px;
    letter-spacing: -0.022em;
}

/* 메인 컨테이너 */
.main-container {
    max-width: 980px;
    margin: 0 auto;
    padding: 20px;
}

/* 페이지 헤더 */
.page-header {
    text-align: center;
    margin-bottom: 40px;
}

.page-title {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.003em;
    margin-bottom: 8px;
    color: var(--label-primary);
}

.page-subtitle {
    font-size: 21px;
    font-weight: 400;
    color: var(--label-secondary);
    letter-spacing: 0.011em;
}

/* 대카테고리 박스 */
.category-container {
    background: var(--background-primary);
    border-radius: 16px;
    margin-bottom: 20px;
    border: 0.5px solid var(--separator);
    overflow: hidden;
    padding: 24px;
}

.category-header {
    margin-bottom: 20px;
}

.category-title {
    font-size: 22px;
    font-weight: 600;
    color: var(--label-primary);
    display: flex;
    align-items: center;
    gap: 8px;
}

.business-title {
    color: var(--system-blue);
}

.knowledge-title {
    color: var(--system-red);
}

/* 중카테고리 박스들 컨테이너 */
.subcategory-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

/* 중카테고리 개별 박스 */
.subcategory-box {
    background: var(--background-secondary);
    border-radius: 12px;
    padding: 20px;
    border: 0.5px solid var(--separator);
    cursor: pointer;
    transition: all 0.15s ease;
    position: relative;
}

.subcategory-box:hover {
    background: var(--system-gray-6);
    transform: translateY(-1px);
}

.subcategory-box:active {
    background: var(--system-gray-5);
    transform: translateY(0);
}

.business-container .subcategory-box:hover {
    border-color: var(--system-blue);
    box-shadow: 0 0 0 1px var(--system-blue);
}

.knowledge-container .subcategory-box:hover {
    border-color: var(--system-red);
    box-shadow: 0 0 0 1px var(--system-red);
}

.subcategory-title {
    font-size: 17px;
    font-weight: 600;
    color: var(--label-primary);
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.subcategory-description {
    font-size: 15px;
    color: var(--label-secondary);
    line-height: 1.33337;
    letter-spacing: -0.008em;
}

/* 콘텐츠 리스트 스타일 */
.news-list, .content-list {
    margin-top: 12px;
    border-top: 0.5px solid var(--separator);
    padding-top: 12px;
}

.news-item, .content-item {
    font-size: 13px;
    color: var(--label-secondary);
    line-height: 1.3;
    margin-bottom: 6px;
    padding: 4px 0;
    border-bottom: 0.5px solid rgba(60, 60, 67, 0.1);
}

.news-item:last-of-type, .content-item:last-of-type {
    border-bottom: none;
    margin-bottom: 8px;
}

.more-link {
    font-size: 13px;
    color: var(--system-blue);
    font-weight: 500;
    margin-top: 8px;
    cursor: pointer;
}

.more-link:hover {
    opacity: 0.7;
}

/* 뉴스 박스 특별 스타일링 */
.news-box {
    min-height: 160px;
}

/* 빈 슬롯 스타일 */
.empty-slot {
    opacity: 0.6;
}

/* 모바일 반응형 */
@media (max-width: 768px) {
    .main-container {
        padding: 16px;
    }
    
    .page-title {
        font-size: 32px;
    }
    
    .page-subtitle {
        font-size: 19px;
    }
    
    .category-container {
        padding: 20px;
    }
    
    .subcategory-container {
        grid-template-columns: 1fr;
        gap: 12px;
    }
    
    .subcategory-box {
        padding: 16px;
    }
}

/* 다크모드 지원 */
@media (prefers-color-scheme: dark) {
    :root {
        --system-blue: #0A84FF;
        --system-red: #FF453A;
        --label-primary: #FFFFFF;
        --label-secondary: #EBEBF5;
        --label-tertiary: #EBEBF599;
        --background-primary: #1C1C1E;
        --background-secondary: #000000;
        --separator: #EBEBF529;
        --system-gray-5: #2C2C2E;
        --system-gray-6: #1C1C1E;
    }
    
    .subcategory-box {
        background: #2C2C2E;
    }
    
    .subcategory-box:hover {
        background: #3C3C3E;
    }
}
</style>

<div class="main-container">
    <header class="page-header">
        <h1 class="page-title">디지털 가든</h1>
        <p class="page-subtitle">관심있는 분야의 지식저장소</p>
        <p style="font-style: italic; color: var(--label-tertiary); margin-top: 8px;">생각의 씨앗이 자라나는 공간 🌿</p>
    </header>

<!-- 비즈니스 모델 탐색 대카테고리 -->
<section class="category-container business-container">
    <header class="category-header">
        <h2 class="category-title business-title">💼 비즈니스 모델 탐색</h2>
    </header>
    <div class="subcategory-container">
        <div class="subcategory-box news-box">
            <div class="subcategory-title">📰 뉴스 읽기</div>
            <div class="subcategory-description">경제와 비즈니스 트렌드 분석</div>
            <!-- NEWS_START -->
            
            <!-- NEWS_END -->
        </div>
        <div class="subcategory-box">
            <div class="subcategory-title">🏢 기업 훑어보기</div>
            <div class="subcategory-description">다양한 기업의 비즈니스 모델 연구</div>
            <div class="content-list">
                <div class="content-item">INOD</div>
            </div>
        </div>
        <div class="subcategory-box">
            <div class="subcategory-title">💡 투자철학 다듬기</div>
            <div class="subcategory-description">개인적인 투자 원칙과 철학 정립</div>
        </div>
        <div class="subcategory-box empty-slot">
            <div class="subcategory-title">+ 추가 예정</div>
            <div class="subcategory-description">새로운 카테고리가 추가될 예정입니다</div>
        </div>
    </div>
</section>

<!-- 지식 저장소 대카테고리 -->
<section class="category-container knowledge-container">
    <header class="category-header">
        <h2 class="category-title knowledge-title">📚 지식 저장소</h2>
    </header>
    <div class="subcategory-container">
        <div class="subcategory-box">
            <div class="subcategory-title">🏛️ 위대한 문명사</div>
            <div class="subcategory-description">인류 문명의 발전과 역사적 교훈</div>
            <div class="content-list">
                <div class="content-item">산업혁명과 문명의 비밀</div>
                <div class="content-item">반칙으로 일궈낸 산업혁명</div>
                <div class="content-item">농업사회의 감속에서 산업사회의 가속으로</div>
                <div class="content-item">위기에서 갈라진 세 나라의 운명</div>
            </div>
        </div>
        <div class="subcategory-box">
            <div class="subcategory-title">💳 부채로 만든 세상</div>
            <div class="subcategory-description">현대 금융 시스템과 경제 구조 분석</div>
            <div class="content-list">
                <div class="content-item">은행이 만들어낸 끝없는 부채 증식의 비밀</div>
                <div class="content-item">은행 위기의 진실과 과잉 금융 시대의 비극</div>
                <div class="content-item">과잉금융이 낳은 시스템 리스크</div>
                <div class="content-item">중앙은행 마지막 사회주의자들</div>
            </div>
        </div>
        <div class="subcategory-box">
            <div class="subcategory-title">🏃‍♂️ 건강</div>
            <div class="subcategory-description">신체적, 정신적 건강 관리에 대한 지식을 정리합니다</div>
        </div>
        <div class="subcategory-box">
            <div class="subcategory-title">📖 도서</div>
            <div class="subcategory-description">읽은 책들의 핵심 내용과 개인적 소감을 기록합니다</div>
        </div>
    </div>
</section>

<!-- 하단 푸터 -->
<footer style="text-align: center; margin-top: 40px; padding: 20px; color: var(--label-tertiary); font-size: 15px; border-top: 0.5px solid var(--separator);">
    <p>이 사이트는 Obsidian과 Quartz v4로 구축된 디지털 가든입니다.</p>
</footer>
</div>