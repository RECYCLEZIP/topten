# ![분리수ZIP](https://user-images.githubusercontent.com/97578390/176987336-0b54e8c6-8c8e-425c-8e40-28a03a9ff9ae.png)

## 프로젝트 주제

> ***객체분류 인공지능을 이용한 쓰레기 분류 서비스***

데모 링크 [https://kdt-ai4-team10.elicecoding.com/](https://kdt-ai4-team10.elicecoding.com/)

## 한 줄 소개

- 헷갈렸던 분리수거 방법을 사진 한 장으로 손쉽게 얻어가세요.
- 환경을 위해 다양한 친환경적 기능들을 사용해보세요.

## OverView

- [서비스 설명](#서비스-설명)
- [기획 의도](#기획-의도)
- [인공지능 알고리즘 및 모델과 기술스택](#인공지능-알고리즘-및-모델과-기술스택)
- [프로젝트 시연](#서비스-시연)
- [메인 기능 및 서브 기능](#메인-기능-및-서브-기능)
- [기술 문서](#기술-문서)
- [유사서비스 및 차이점](#유사서비스-및-차이점)
- [팀 구성원](#팀-구성원)

---

# 서비스 설명

- 분리되지 않은 무분별한 쓰레기 투기는 다양한 환경오염을 일으키기 때문에 배출자에게 인공지능을 이용하여 사진 한 장으로 빠르게 명확한 분류기준을 제시 및 올바른 분리배출 지식을 제공하는 서비스

## 기획 의도
> 2019년 기준 분리수거율은 87.1%에 달합니다. 하지만 환경부가 조사한 국내 폐기물 처리 현황에 따르면 분리 배출된 플라스틱의 재활용률은 30%대에 불과합니다. 그 이유는 잘못된 분리배출에 있습니다. 복잡하고 다양한 분리배출 방식을 시민들이 모두 알기에는 어려움이 많습니다. 이를 개선하기 위해서 우리 서비스는 올바른 분리배출 방법에 대한 지식 및 가이드라인을 제공하고자 합니다.
- 올바른 분리배출 방법에 대한 지식 및 가이드라인 제안을 통해 최근 대두되는 환경문제를 해결할 수 있는 긍정적인 영향을 기대할 수 있습니다.
- 올바른 분리배출을 위한 다양한 기능을 제공하면 사용자들에게도 친환경적인 습관을 유도할 수 있습니다.

## 인공지능 알고리즘 및 모델과 기술스택

- 프론트엔드 : React, TypeScript, styled-component, Mui, helmet, recoil
- 백엔드 : ExpressJS, Typescript, Swagger, Joi, Jest, MongoDB
- 인공지능 : Detectron2, Faster-RCNN, Flask, Pytorch
    - 데이터셋: 직접 찍은 이미지, [AI hub 생활 폐기물 이미지](https://aihub.or.kr/aidata/27708)
    - 학습 데이터셋: COCO format

## 기술 문서

[아키텍처](https://github.com/Handwoong/garbage-sorting-backend/wiki/Project-Architecture)<br/>
[ERD](https://github.com/Handwoong/garbage-sorting-backend/wiki/ERD-Image)<br/>
[와이어프레임](https://www.figma.com/file/AaGUvtqz6TPuonXHEAWhMN/TOPTEN?node-id=7%3A364)<br/>
[스토리보드](https://user-images.githubusercontent.com/97578390/176987314-28688c87-6105-462e-b9ac-a3561fb21eef.png)

## 서비스 시연

- 쓰레기 AI 분석

![ai](https://user-images.githubusercontent.com/97578390/176987267-7f5aa012-4756-4563-aaa0-cb0699b03a1f.gif)
    
- 쓰레기 분류 미니게임
    
![game](https://user-images.githubusercontent.com/97578390/176987297-478e2eeb-f78e-4984-8617-1a4f44f09a19.gif)
    
- 퀴즈
    
![quiz](https://user-images.githubusercontent.com/97578390/176987300-5a26074c-0d8b-4d54-90ef-4945779a7153.gif)
    

## 메인 기능 및 서브 기능

- 메인 기능
    - 쓰레기 이미지(페트병, 종이 팩, 플라스틱, 캔, 종이류, 비닐류)를 AI로 객체 분류하여 올바른 가이드라인을 제시합니다.
    - 사용자의 현 위치 기준 반경 10km 이내에 있는 쓰레기 순환자원 회수 로봇을 지도로 안내합니다.
- 서브 기능
    - 올바른 쓰레기 배출 퀴즈 및 오답랭킹을 제공합니다.
    - 분리수거 게임을 제공합니다.
    - 지도 기반 쓰레기통 위치(서울시)를 제공합니다.
    - 환경 관련 실시간 뉴스 정보를 제공합니다.
    - 올바른 쓰레기 배출을 위한 분리배출 방법, 검색기능을 제공합니다.
    - 쓰레기 배출 관련 질의응답을 위한 게시판을 제공합니다.

## 팀 구성원

| 이름 | 역할 |
| --- | --- |
| 강미선 | 프론트엔드 |
| 임경민 | 프론트엔드 |
| 손정웅 | 백엔드 |
| 양해찬 | 백엔드 |
| 김수연 | AI |
| 서정현 | AI, 팀장 |
