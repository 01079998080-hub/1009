/**
 * 재단법인 청구중고등학교 장학재단 웹 애플리케이션 로직
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initStats();
  initTabs();
  initHeroParallax();
  initDualLiveBoard();
  initCharter();
  initBoardMembers();
  initTimeline();
  initScholarships();
  initDonations();
  initHallOfFame();
  initFinancialReports();
  initNotices();
  initResources();
  initModals();
});

/* ==========================================================================
   Navigation & Header
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".nav-link");

  // 스크롤 시 헤더 그림자 제어
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 모바일 메뉴 토글 & 햄버거 애니메이션
  if (mobileBtn && mainNav) {
    mobileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mainNav.classList.toggle("open");
      mobileBtn.classList.toggle("active");
    });

    // 메뉴 바깥 클릭 시 닫기
    document.addEventListener("click", (e) => {
      if (mainNav.classList.contains("open") && !mainNav.contains(e.target) && !mobileBtn.contains(e.target)) {
        mainNav.classList.remove("open");
        mobileBtn.classList.remove("active");
      }
    });
  }

  // 메뉴 클릭 시 부드러운 스크롤 & 활성 링크
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          const headerOffset = window.innerWidth <= 768 ? 70 : 90;
          const elPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });

          navLinks.forEach(l => l.classList.remove("active"));
          link.classList.add("active");

          if (mainNav.classList.contains("open")) {
            mainNav.classList.remove("open");
            if (mobileBtn) mobileBtn.classList.remove("active");
          }
        }
      }
    });
  });
}

/* ==========================================================================
   Statistics Counter
   ========================================================================== */
function initStats() {
  const statPaid = document.getElementById("statPaid");
  const statStudents = document.getElementById("statStudents");
  const statFund = document.getElementById("statFund");

  if (statPaid) statPaid.innerHTML = `38.5<small>억 원</small>`;
  if (statStudents) statStudents.innerHTML = `4,820<small>명</small>`;
  if (statFund) statFund.innerHTML = `52<small>억 원</small>`;
}

/* ==========================================================================
   Tabs System (재단소개: 인사말 / 정관 / 이사진 / 연혁)
   ========================================================================== */
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabTarget = btn.getAttribute("data-tab");

      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const activePane = document.getElementById(tabTarget);
      if (activePane) {
        activePane.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   정관 (Articles of Incorporation) 아코디언 렌더링
   ========================================================================== */
function initCharter() {
  const container = document.getElementById("charterAccordionContainer");
  if (!container || !FOUNDATION_DATA.articlesOfIncorporation) return;

  container.innerHTML = FOUNDATION_DATA.articlesOfIncorporation.map((ch, idx) => {
    const isFirst = idx === 0;
    return `
      <div class="charter-accordion-item">
        <button class="charter-chapter-btn ${isFirst ? 'active' : ''}" data-index="${idx}">
          <span>${ch.chapter}</span>
          <span class="accordion-icon">${isFirst ? '▲' : '▼'}</span>
        </button>
        <div class="charter-content-panel ${isFirst ? 'show' : ''}" id="charterPanel-${idx}">
          ${ch.articles.map(art => `
            <div class="charter-article">
              <div class="charter-article-title">${art.no}</div>
              <div class="charter-article-body">${art.content}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  // 아코디언 토글 이벤트
  const btns = container.querySelectorAll(".charter-chapter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-index");
      const panel = document.getElementById(`charterPanel-${idx}`);
      const icon = btn.querySelector(".accordion-icon");
      const isOpen = panel.classList.contains("show");

      // 다른 패널 닫기 (깔끔한 UI 유지)
      container.querySelectorAll(".charter-content-panel").forEach(p => p.classList.remove("show"));
      container.querySelectorAll(".charter-chapter-btn").forEach(b => {
        b.classList.remove("active");
        b.querySelector(".accordion-icon").textContent = "▼";
      });

      if (!isOpen) {
        panel.classList.add("show");
        btn.classList.add("active");
        icon.textContent = "▲";
      }
    });
  });
}

/* ==========================================================================
   재단 이사진 소개 렌더링
   ========================================================================== */
function initBoardMembers() {
  const grid = document.getElementById("boardGrid");
  if (!grid || !FOUNDATION_DATA.boardMembers) return;

  grid.innerHTML = FOUNDATION_DATA.boardMembers.map(member => {
    const isHead = member.role === "이사장";
    return `
      <div class="board-card ${isHead ? 'board-card-head' : ''}">
        ${member.photo ? `
          <div class="board-photo-wrap">
            <img src="${member.photo}" alt="${member.name} ${member.role}" class="board-photo">
          </div>
        ` : ''}
        <span class="board-role-badge ${isHead ? 'highlight' : ''}">${member.role}</span>
        <div class="board-name">${member.name}</div>
        <div class="board-term">임기: ${member.term}</div>
        <div class="board-career">${member.career}</div>
        ${member.message ? `<div style="margin-top:10px; font-size:0.8rem; color:#495057; font-style:italic;">"${member.message}"</div>` : ''}
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   연혁 렌더링
   ========================================================================== */
function initTimeline() {
  const wrapper = document.getElementById("timelineWrapper");
  if (!wrapper || !FOUNDATION_DATA.history) return;

  wrapper.innerHTML = FOUNDATION_DATA.history.map(item => `
    <div class="timeline-row">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-dot"></div>
      <div class="timeline-content">${item.text}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   장학사업 렌더링
   ========================================================================== */
function initScholarships() {
  const grid = document.getElementById("scholarshipGrid");
  if (!grid || !FOUNDATION_DATA.scholarships) return;

  grid.innerHTML = FOUNDATION_DATA.scholarships.map(s => `
    <div class="scholar-card">
      <div>
        <h4 class="scholar-title">${s.title}</h4>
        <p class="scholar-desc">${s.desc}</p>
      </div>
      <div class="scholar-meta">
        <div class="scholar-meta-row">
          <span class="scholar-meta-label">선발 대상</span>
          <span class="scholar-meta-val">${s.target}</span>
        </div>
        <div class="scholar-meta-row">
          <span class="scholar-meta-label">지원 내용</span>
          <span class="scholar-meta-val">${s.benefit}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   기부내역 게시판 & 검색/필터링
   ========================================================================== */
let filteredDonations = [...FOUNDATION_DATA.donations];

function initDonations() {
  renderDonationTable(filteredDonations);

  const filterCat = document.getElementById("filterCategory");
  const filterYear = document.getElementById("filterYear");
  const searchInput = document.getElementById("donationSearchInput");
  const btnSearch = document.getElementById("btnDonationSearch");
  const btnReset = document.getElementById("btnDonationReset");

  function applyDonationFilter() {
    const cat = filterCat ? filterCat.value : "all";
    const year = filterYear ? filterYear.value : "all";
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

    filteredDonations = FOUNDATION_DATA.donations.filter(item => {
      const matchCat = (cat === "all" || item.category === cat);
      const matchYear = (year === "all" || item.date.startsWith(year));
      const matchQuery = !query || 
                         item.donor.toLowerCase().includes(query) || 
                         item.purpose.toLowerCase().includes(query);
      return matchCat && matchYear && matchQuery;
    });

    renderDonationTable(filteredDonations);
  }

  if (btnSearch) btnSearch.addEventListener("click", applyDonationFilter);
  if (searchInput) {
    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") applyDonationFilter();
    });
  }
  if (filterCat) filterCat.addEventListener("change", applyDonationFilter);
  if (filterYear) filterYear.addEventListener("change", applyDonationFilter);

  if (btnReset) {
    btnReset.addEventListener("click", () => {
      if (filterCat) filterCat.value = "all";
      if (filterYear) filterYear.value = "all";
      if (searchInput) searchInput.value = "";
      filteredDonations = [...FOUNDATION_DATA.donations];
      renderDonationTable(filteredDonations);
    });
  }
}

function renderDonationTable(data) {
  const tbody = document.getElementById("donationTableBody");
  const countEl = document.getElementById("donationCount");
  if (!tbody) return;

  if (countEl) countEl.textContent = `${data.length}건`;

  if (data.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center" style="padding: 40px; color: var(--text-muted);">
          검색 조건에 일치하는 기부 내역이 없습니다.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = data.map(item => `
    <tr>
      <td class="text-center" style="color: var(--text-muted); font-size: 0.85rem;">${item.date}</td>
      <td><strong>${item.donor}</strong></td>
      <td><span class="badge-category">${item.category}</span></td>
      <td>${item.purpose}</td>
      <td class="text-right amount-highlight">${item.amount.toLocaleString()}원</td>
    </tr>
  `).join('');
}

/* ==========================================================================
   명예의 전당 렌더링
   ========================================================================== */
function initHallOfFame() {
  const grid = document.getElementById("hallGrid");
  if (!grid || !FOUNDATION_DATA.hallOfFame) return;

  grid.innerHTML = FOUNDATION_DATA.hallOfFame.map(club => `
    <div class="hall-card">
      <div class="hall-tier-badge">${club.tier}</div>
      <div class="hall-donor-list">
        ${club.donors.map(name => `<span class="hall-donor-tag">${name}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   결산공시 (Financial Reports) 렌더링 및 모달 연계
   ========================================================================== */
function initFinancialReports() {
  const grid = document.getElementById("settlementGrid");
  if (!grid || !FOUNDATION_DATA.financialReports) return;

  grid.innerHTML = FOUNDATION_DATA.financialReports.map(report => `
    <div class="settle-card">
      <div>
        <div class="settle-card-header">
          <span class="settle-year-badge">${report.year}회계연도</span>
          <span class="settle-date">공시일: ${report.date}</span>
        </div>
        <h4 class="settle-doc-title">${report.title}</h4>
        
        <div class="settle-metrics">
          <div>
            <div class="metric-box-label">장학금 지급액</div>
            <div class="metric-box-val">${(report.scholarshipPaid / 100000000).toFixed(2)}억 원</div>
          </div>
          <div>
            <div class="metric-box-label">수혜 장학생</div>
            <div class="metric-box-val">${report.studentsCount}명</div>
          </div>
          <div>
            <div class="metric-box-label">총 수입(세입)</div>
            <div class="metric-box-val">${(report.totalIncome / 100000000).toFixed(2)}억 원</div>
          </div>
          <div>
            <div class="metric-box-label">총 지출(세출)</div>
            <div class="metric-box-val">${(report.totalExpense / 100000000).toFixed(2)}억 원</div>
          </div>
        </div>

        <div class="settle-audit-opinion">
          <span>감사 의견:</span>
          <span class="opinion-tag">${report.auditorOpinion}</span>
        </div>
      </div>

      <div class="settle-card-actions">
        <button class="btn-view-settle" onclick="openFinancialModal('${report.year}')">
          결산서 및 감사보고서 상세 열람
        </button>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   공지사항 & 서식자료실 렌더링
   ========================================================================== */
function initNotices() {
  const list = document.getElementById("noticeList");
  if (!list || !FOUNDATION_DATA.notices) return;

  list.innerHTML = FOUNDATION_DATA.notices.map(n => `
    <div class="board-list-item" onclick="openNoticeModal(${n.id})">
      <div class="board-item-main">
        <span class="board-tag">${n.tag}</span>
        <span class="board-item-title">${n.title}</span>
      </div>
      <span class="board-item-date">${n.date}</span>
    </div>
  `).join('');
}

function initResources() {
  const list = document.getElementById("resourceList");
  if (!list || !FOUNDATION_DATA.resources) return;

  list.innerHTML = FOUNDATION_DATA.resources.map(r => `
    <div class="board-list-item">
      <div class="board-item-main">
        <span class="board-tag">${r.ext}</span>
        <span class="board-item-title">${r.title}</span>
      </div>
      <button class="resource-download-btn" onclick="simulateDownload('${r.title}')">
        서식 내려받기
      </button>
    </div>
  `).join('');
}

/* ==========================================================================
   Modals & Popups
   ========================================================================== */
function initModals() {
  // 모달 닫기 공통
  document.querySelectorAll(".modal-close-btn, .modal-backdrop").forEach(el => {
    el.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-backdrop") || e.target.classList.contains("modal-close-btn")) {
        document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("show"));
      }
    });
  });

  // ESC 키로 모달 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("show"));
    }
  });
}

// 결산서 상세 팝업 열기
window.openFinancialModal = function(year) {
  const report = FOUNDATION_DATA.financialReports.find(r => r.year === year);
  if (!report) return;

  const modal = document.getElementById("financialModal");
  const title = document.getElementById("modalFinancialTitle");
  const content = document.getElementById("modalFinancialBody");

  if (title) title.textContent = `${report.year}회계연도 세입·세출 결산서 및 회계감사 보고서`;

  if (content) {
    content.innerHTML = `
      <div style="margin-bottom: 20px; background: #f8f9fa; padding: 16px; border-radius: 6px; border: 1px solid #e9ecef;">
        <div style="font-weight: 700; color: #111; margin-bottom: 4px;">공익법인 결산 개요</div>
        <div style="font-size: 0.85rem; color: #495057;">
          공익법인의 설립·운영에 관한 법률 및 상속세 및 증여세법에 의거하여 적법하게 결산 및 감사를 마쳤음을 공시합니다.
        </div>
        <div style="margin-top: 8px; font-size: 0.825rem; color: #6c757d;">
          공시일: ${report.date} | 감사인: ${report.auditors} | 감사의견: <strong>${report.auditorOpinion}</strong>
        </div>
      </div>

      <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 8px; color:#111;">1. 재무상태표 (대차대조표 요약)</h4>
      <table class="financial-modal-table">
        <thead>
          <tr>
            <th>과목</th>
            <th style="text-align:right;">금액 (원)</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>자산총계</strong></td>
            <td style="text-align:right; font-weight:700;">${report.balanceSheet.totalAssets.toLocaleString()}원</td>
            <td>기본재산 및 보통재산 합계</td>
          </tr>
          <tr>
            <td style="padding-left: 20px;">- 기본재산 (예금 및 채권)</td>
            <td style="text-align:right;">${report.balanceSheet.basicAssets.toLocaleString()}원</td>
            <td>법인 정관 지정 기본재산</td>
          </tr>
          <tr>
            <td style="padding-left: 20px;">- 보통재산 (유동성 예금)</td>
            <td style="text-align:right;">${report.balanceSheet.ordinaryAssets.toLocaleString()}원</td>
            <td>장학사업 운영자금</td>
          </tr>
          <tr>
            <td><strong>부채총계</strong></td>
            <td style="text-align:right;">${report.balanceSheet.totalLiabilities.toLocaleString()}원</td>
            <td>예수금 및 미지급비용</td>
          </tr>
          <tr>
            <td><strong>순자산 (기본순자산+적립금)</strong></td>
            <td style="text-align:right; font-weight:700;">${report.balanceSheet.netAssets.toLocaleString()}원</td>
            <td>실제 법인 순자산가액</td>
          </tr>
        </tbody>
      </table>

      <h4 style="font-size: 1.05rem; font-weight: 700; margin-top: 24px; margin-bottom: 8px; color:#111;">2. 운영성과표 (세입·세출 요약)</h4>
      <table class="financial-modal-table">
        <thead>
          <tr>
            <th>구분</th>
            <th>항목</th>
            <th style="text-align:right;">결산액 (원)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="3" style="font-weight:700; background:#f8f9fa;">세입 (수익)</td>
            <td>기부금 수입</td>
            <td style="text-align:right;">${report.incomeStatement.donationsIncome.toLocaleString()}원</td>
          </tr>
          <tr>
            <td>이자 및 자산운용 수익</td>
            <td style="text-align:right;">${report.incomeStatement.interestIncome.toLocaleString()}원</td>
          </tr>
          <tr>
            <td>기타 수입</td>
            <td style="text-align:right;">${report.incomeStatement.otherIncome.toLocaleString()}원</td>
          </tr>
          <tr style="background:#f1f3f5; font-weight:700;">
            <td colspan="2">세입 합계</td>
            <td style="text-align:right;">${report.totalIncome.toLocaleString()}원</td>
          </tr>
          <tr>
            <td rowspan="3" style="font-weight:700; background:#f8f9fa;">세출 (비용)</td>
            <td>장학금 지급비 (목적사업)</td>
            <td style="text-align:right; font-weight:700;">${report.incomeStatement.scholarshipExpense.toLocaleString()}원</td>
          </tr>
          <tr>
            <td>장학사업 관리 및 육성비</td>
            <td style="text-align:right;">${report.incomeStatement.programExpense.toLocaleString()}원</td>
          </tr>
          <tr>
            <td>일반관리비 및 제세공과금</td>
            <td style="text-align:right;">${report.incomeStatement.operationExpense.toLocaleString()}원</td>
          </tr>
          <tr style="background:#f1f3f5; font-weight:700;">
            <td colspan="2">세출 합계</td>
            <td style="text-align:right;">${report.totalExpense.toLocaleString()}원</td>
          </tr>
        </tbody>
      </table>

      <div style="margin-top: 20px; font-size: 0.85rem; color: #555; line-height: 1.6; border-top: 1px dashed #ced4da; padding-top: 14px;">
        <strong>[감사의견 요약]</strong><br>
        본 감사는 재단법인 청구중고등학교 장학재단의 ${report.year}회계연도 세입세출 결산서 및 재산목록을 관계 법령과 정관에 따라 성실히 감사하였으며, 재무상태 및 사업실적이 적정하게 처리되었음을 확인합니다.<br>
        <span style="color:#888;">공인회계사 윤승기, 변호사 강민석 직인 생략</span>
      </div>
    `;
  }

  modal.classList.add("show");
};

// 공지사항 상세 팝업
window.openNoticeModal = function(id) {
  const notice = FOUNDATION_DATA.notices.find(n => n.id === id);
  if (!notice) return;

  const modal = document.getElementById("noticeModal");
  const title = document.getElementById("modalNoticeTitle");
  const body = document.getElementById("modalNoticeBody");

  if (title) title.textContent = notice.title;
  if (body) {
    body.innerHTML = `
      <div style="display:flex; justify-content:space-between; margin-bottom:18px; border-bottom:1px solid #e9ecef; padding-bottom:10px; font-size:0.85rem; color:#6c757d;">
        <span>구분: <strong>${notice.tag}</strong> | 작성자: ${notice.author}</span>
        <span>등록일: ${notice.date} | 조회수: ${notice.views}</span>
      </div>
      <div style="white-space: pre-line; line-height: 1.8; color: #212529;">
        ${notice.content}
      </div>
    `;
  }

  modal.classList.add("show");
};

// 정관 전문 모달 열기
window.openCharterModal = function() {
  const modal = document.getElementById("charterFullModal");
  modal.classList.add("show");
};

// 기부 참여 모달 열기
window.openDonationModal = function() {
  const modal = document.getElementById("donationModal");
  modal.classList.add("show");
};

// 사진 확대 모달 열기
window.openImageModal = function(src, title) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imageModalSrc");
  const modalTitle = document.getElementById("imageModalTitle");
  if (!modal || !modalImg) return;
  modalImg.src = src;
  if (modalTitle && title) modalTitle.textContent = title;
  modal.classList.add("show");
};

// 마우스 움직임에 반응하는 학교 전경 인터랙티브 시네마틱 패럴랙스
function initHeroParallax() {
  const hero = document.querySelector(".hero-cinema-section");
  const bg = document.getElementById("heroDroneBg");
  if (!hero || !bg) return;

  let ticking = false;
  hero.addEventListener("mousemove", (e) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const xOffset = ((e.clientX - rect.left) / rect.width - 0.5) * 24; // -12px to 12px
        const yOffset = ((e.clientY - rect.top) / rect.height - 0.5) * 16; // -8px to 8px
        bg.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
        ticking = false;
      });
      ticking = true;
    }
  });

  hero.addEventListener("mouseleave", () => {
    bg.style.transform = "";
  });
}

// 드론 비행 속도 제어 (1.0x 표준 시네마틱 / 1.8x 다이내믹)
window.setDroneSpeed = function(speed) {
  const bg = document.getElementById("heroDroneBg");
  const btnNormal = document.getElementById("btnSpeedNormal");
  const btnFast = document.getElementById("btnSpeedFast");
  const btnToggle = document.getElementById("droneToggleBtn");
  if (!bg) return;

  if (speed === 'normal') {
    bg.classList.remove("paused");
    bg.classList.remove("speed-fast");
    if (btnNormal) btnNormal.classList.add("active");
    if (btnFast) btnFast.classList.remove("active");
    if (btnToggle) btnToggle.innerHTML = "⏸ 정지";
    showToast("드론 모션: 1.0x 표준 (부드럽고 웅장한 시네마틱 뷰)");
  } else if (speed === 'fast') {
    bg.classList.remove("paused");
    bg.classList.add("speed-fast");
    if (btnNormal) btnNormal.classList.remove("active");
    if (btnFast) btnFast.classList.add("active");
    if (btnToggle) btnToggle.innerHTML = "⏸ 정지";
    showToast("드론 모션: 1.8x 다이내믹 (속도감 있는 파노라마 활주)");
  }
};

// 학교 전경 드론 모션 토글 (일시정지 / 재생)
window.toggleDroneMotion = function() {
  const bg = document.getElementById("heroDroneBg");
  const btn = document.getElementById("droneToggleBtn");
  const btnNormal = document.getElementById("btnSpeedNormal");
  const btnFast = document.getElementById("btnSpeedFast");
  if (!bg || !btn) return;

  if (bg.classList.contains("paused")) {
    bg.classList.remove("paused");
    btn.innerHTML = '⏸ 정지';
    if (bg.classList.contains("speed-fast") && btnFast) {
      btnFast.classList.add("active");
    } else if (btnNormal) {
      btnNormal.classList.add("active");
    }
    showToast("학교 전경 드론 모션이 재생됩니다.");
  } else {
    bg.classList.add("paused");
    btn.innerHTML = '▶ 재생';
    if (btnNormal) btnNormal.classList.remove("active");
    if (btnFast) btnFast.classList.remove("active");
    showToast("학교 전경 드론 모션이 일시정지되었습니다.");
  }
};

// 이사장에게 응원 & 감사 메시지 모달 열기
window.openEncouragementModal = function() {
  const modal = document.getElementById("encouragementModal");
  if (modal) modal.classList.add("show");
};

// 이사장 응원 메시지 전송 처리
window.handleSendEncouragement = function(e) {
  e.preventDefault();
  const authorEl = document.getElementById("cheerAuthor");
  const contentEl = document.getElementById("cheerContent");
  if (!authorEl || !contentEl) return;

  const author = authorEl.value.trim();
  const content = contentEl.value.trim();
  if (!author || !content) return;

  try {
    const existing = JSON.parse(localStorage.getItem("cheonggu_cheers") || "[]");
    existing.unshift({ author, content, date: new Date().toLocaleDateString("ko-KR") });
    localStorage.setItem("cheonggu_cheers", JSON.stringify(existing));
  } catch (err) {}

  document.getElementById("encouragementForm").reset();
  const modal = document.getElementById("encouragementModal");
  if (modal) modal.classList.remove("show");

  showToast(`[전송 완료] ${author}님의 따뜻한 격려 말씀이 송시연 이사장님께 소중히 전달되었습니다.`);
};

// 탭 스위치 & 해당 섹션 스크롤
window.switchTab = function(tabId) {
  const btn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  if (btn) btn.click();
  const aboutSec = document.getElementById("about");
  if (aboutSec) {
    const offsetPosition = aboutSec.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

/* ==========================================================================
   Keisung-style 실시간 듀얼 공시 보드 (기부금 사용내역 & 결산공시 최신 현황)
   ========================================================================== */
function initDualLiveBoard() {
  const donationBox = document.getElementById("homeDonationList");
  const reportBox = document.getElementById("homeReportList");

  if (donationBox && FOUNDATION_DATA.donations) {
    const recentDonations = FOUNDATION_DATA.donations.slice(0, 5);
    donationBox.innerHTML = `
      <table class="live-disclosure-table">
        <thead>
          <tr>
            <th>집행일자</th>
            <th>구분</th>
            <th>기부목적 및 후원자</th>
            <th style="text-align:right;">금액</th>
          </tr>
        </thead>
        <tbody>
          ${recentDonations.map(d => `
            <tr>
              <td class="col-date">${d.date}</td>
              <td><span class="badge-mini">${d.category}</span></td>
              <td class="col-purpose" title="${d.purpose} (${d.donor})">
                <strong>${d.purpose}</strong> <span class="sub-donor">(${d.donor})</span>
              </td>
              <td class="col-amount">${d.amount.toLocaleString()}원</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  if (reportBox && FOUNDATION_DATA.financialReports) {
    reportBox.innerHTML = `
      <table class="live-disclosure-table">
        <thead>
          <tr>
            <th>회계연도</th>
            <th>공시 내용</th>
            <th>감사의견</th>
            <th style="text-align:right;">상세공시</th>
          </tr>
        </thead>
        <tbody>
          ${FOUNDATION_DATA.financialReports.map(r => `
            <tr>
              <td class="col-year"><strong>${r.year}년도</strong></td>
              <td>${r.title}</td>
              <td><span class="badge-audit">적정의견</span></td>
              <td style="text-align:right;">
                <button class="btn-table-view" onclick="openFinancialModal('${r.year}')">상세보기</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
}

// 계좌번호 복사
window.copyBankAccount = function() {
  const acc = `${FOUNDATION_DATA.info.bankAccount.bank} ${FOUNDATION_DATA.info.bankAccount.number}`;
  navigator.clipboard.writeText(acc).then(() => {
    showToast(`계좌번호가 복사되었습니다:\n${acc}`);
  }).catch(() => {
    showToast(`계좌번호: ${acc}`);
  });
};

// 서식 다운로드 시뮬레이션
window.simulateDownload = function(title) {
  showToast(`[다운로드 시작] ${title}`);
};

// 토스트 메시지
function showToast(msg) {
  let toast = document.getElementById("globalToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "globalToast";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
