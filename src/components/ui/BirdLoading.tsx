"use client";

/**
 * BirdLoading — Hiệu ứng loading hình con chim đang bay.
 * Sử dụng SVG + CSS animation (vỗ cánh + bay ngang).
 */
export default function BirdLoading() {
  return (
    <div className="bird-loading-container">
      {/* Đám mây trang trí */}
      <div className="bird-clouds">
        <svg className="bird-cloud bird-cloud-1" viewBox="0 0 100 40" fill="none">
          <ellipse cx="50" cy="28" rx="40" ry="12" fill="currentColor" />
          <ellipse cx="35" cy="20" rx="20" ry="14" fill="currentColor" />
          <ellipse cx="60" cy="18" rx="22" ry="16" fill="currentColor" />
          <ellipse cx="48" cy="14" rx="16" ry="12" fill="currentColor" />
        </svg>
        <svg className="bird-cloud bird-cloud-2" viewBox="0 0 100 40" fill="none">
          <ellipse cx="50" cy="28" rx="40" ry="12" fill="currentColor" />
          <ellipse cx="35" cy="20" rx="20" ry="14" fill="currentColor" />
          <ellipse cx="60" cy="18" rx="22" ry="16" fill="currentColor" />
        </svg>
      </div>

      {/* Con chim bay */}
      <div className="bird-wrapper">
        <svg
          className="bird-svg"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Thân chim */}
          <ellipse cx="60" cy="48" rx="22" ry="10" fill="#2b5cf0" />
          {/* Đầu */}
          <circle cx="80" cy="42" r="8" fill="#2b5cf0" />
          {/* Mắt */}
          <circle cx="83" cy="40" r="2.5" fill="white" />
          <circle cx="84" cy="40" r="1.2" fill="#1a389e" />
          {/* Mỏ */}
          <polygon points="88,42 96,43 88,45" fill="#f59e0b" />
          {/* Đuôi */}
          <polygon points="38,44 22,36 24,48" fill="#4d82ff" />
          <polygon points="38,48 20,42 26,52" fill="#2b5cf0" />
          {/* Cánh (sẽ được animate) */}
          <g className="bird-wing">
            <path
              d="M50,44 Q40,16 60,10 Q72,8 76,28 Q70,32 60,38 Z"
              fill="#4d82ff"
            />
            <path
              d="M55,40 Q48,22 62,16 Q70,14 72,30 Z"
              fill="#80abff"
              opacity="0.6"
            />
          </g>
          {/* Chân */}
          <line x1="55" y1="56" x2="52" y2="64" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="62" y1="56" x2="60" y2="64" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Chữ loading */}
      <p className="bird-loading-text">
        Đang tải dịch vụ
        <span className="bird-dots">
          <span className="bird-dot">.</span>
          <span className="bird-dot">.</span>
          <span className="bird-dot">.</span>
        </span>
      </p>
    </div>
  );
}
