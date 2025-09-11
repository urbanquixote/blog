---
title: “디지털 가든”
---

<div class="homepage-container">
  <div class="header">
    <h1>디지털 가든</h1>
    <p>관심있는 분야의 지식저장소</p>
    <div class="subtitle">생각의 씨앗이 자라나는 공간 🌿</div>
  </div>

  <div class="main-sections">
    <div class="section business">
      <h2 class="section-title">
        <span class="section-icon">💼</span>
        비즈니스 모델 탐색
      </h2>

```
  <div class="subsections-grid">
    <div class="subsection">
      <h3>📰 뉴스 읽기</h3>
      <p>경제와 비즈니스 트렌드를 분석하고 인사이트를 도출합니다</p>
    </div>
    
    <div class="subsection">
      <h3>🏢 기업 훑어보기</h3>
      <p>다양한 기업의 비즈니스 모델과 전략을 연구합니다</p>
    </div>
    
    <div class="subsection">
      <h3>💡 투자 철학 다듬기</h3>
      <p>개인적인 투자 원칙과 철학을 정립해나갑니다</p>
    </div>
  </div>
</div>

<div class="section knowledge">
  <h2 class="section-title">
    <span class="section-icon">📚</span>
    지식 저장소
  </h2>
  
  <div class="subsections-grid">
    <div class="subsection">
      <h3>🏛️ 위대한 문명사</h3>
      <p>인류 문명의 발전과 역사적 교훈을 탐구합니다</p>
    </div>
    
    <div class="subsection">
      <h3>💳 부채로 만든 세상</h3>
      <p>현대 금융 시스템과 경제 구조를 분석합니다</p>
    </div>
    
    <div class="subsection">
      <h3>🏃‍♂️ 건강</h3>
      <p>신체적, 정신적 건강 관리에 대한 지식을 정리합니다</p>
    </div>
    
    <div class="subsection">
      <h3>📖 도서</h3>
      <p>읽은 책들의 핵심 내용과 개인적 소감을 기록합니다</p>
    </div>
  </div>
</div>
```

  </div>

  <div class="footer">
    <p>이 사이트는 Obsidian과 Quartz v4로 구축된 디지털 가든입니다.</p>
  </div>
</div>

<style>
.homepage-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e8e8e8;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: 300;
  color: #34495e;
  margin-bottom: 0.5rem;
}

.header p {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 0.9rem;
  color: #95a5a6;
  font-style: italic;
}

.main-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
}

.section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.section:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.12);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-icon {
  font-size: 1.3rem;
}

.subsections-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.subsection {
  padding: 0.8rem 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;
}

.business .subsection {
  border-left-color: #3498db;
}

.knowledge .subsection {
  border-left-color: #e74c3c;
}

.subsection:hover {
  background: #ecf0f1;
  transform: translateX(5px);
}

.subsection h3 {
  font-size: 1rem;
  color: #34495e;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.subsection p {
  font-size: 0.85rem;
  color: #7f8c8d;
  line-height: 1.4;
}

.business {
  border-top: 4px solid #3498db;
}

.knowledge {
  border-top: 4px solid #e74c3c;
}

.footer {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e8e8e8;
  color: #95a5a6;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .main-sections {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .subsections-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .homepage-container {
    padding: 1rem;
  }
  
  .header h1 {
    font-size: 2rem;
  }
}
</style>