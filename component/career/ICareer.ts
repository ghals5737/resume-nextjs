export declare namespace ICareer {
  export interface Payload {
    disable?: boolean;
    list: Company[];
  }

  export interface Company {
    /** 회사명 */
    name: string;
    /** 재직 기간 표기 (예: 2025.01 ~ 재직 중) */
    period: string;
    /** 참여 인원 / 역할 / 기술 스택 등 메타 정보 */
    meta: { label: string; value: string }[];
    /** 회사·서비스 개요 (역할 미포함) */
    overview: string;
    /**
     * 본문 라인 마크업
     * - '### ' 항목 제목 / '**라벨**' 소제목 / '- ' 불릿 / '→ ' 성과 박스
     * - 'img:<key>' 도식 / 그 외 일반 문단
     */
    lines: string[];
  }
}
