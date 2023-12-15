# Medieye Server - 💊약리미💊


<p align="center">  
<img src="https://github.com/sphy1597/medieye-server/assets/101171867/8ab9ef73-4dcd-41b7-8cc0-c3cfa234b6ba width = "300" height = "600"">
<img src="https://github.com/sphy1597/medieye-server/assets/101171867/aff7ac04-1914-4952-bac5-19283de5e445" width = "300" height = "600">
</p>


## 목차
1. [프로젝트 소개](#프로젝트-소개)
2. [Installation](#Installation)
3. [Running App](#Running-App)
4. [API Reference](#API-Referenc)
5. [ERD](#ERD)
6. [Function](#Function)
7. [TIL](#TIL)


## 프로젝트 소개

### 1. 프로젝트 개요

##### [약리미](https://github.com/medieyes)는 시각장애인, 저시력자들의 의약품 복용을 보조하기 위한 애플리케이션

### 2. 프로젝트의 필요성
1. 일반인들 조차 의약품을 착가하여 오용하는 사례가 많음
2. 의약품 점자 표기가 의무화 되고있지만 대부분의 의약품에 점자 표기가 없음
3. 점자가 표기된 의약품 조차 띄어쓰기, 오타 등의 문제로 읽을 수 없는 것이 현실
4. 점자가 담을 수 있는 글자수의 한계로 복용법과 같은 구체적인 정보를 제공하기 어려움

### 3. 주요 기능

##### 시각장애인들이 의약품을 처방받고 복용하는데 일련의 과정에서 단계적으로 의약품을 인식, 구분할 수 있도록 시스템을 설계

- 1단계 : 처방받을 때 약사가 직접 작성 가능한 처방받은 약의 정보와 복용법, 주의사항에 대한 안내를 작성하여 제공하는 QR코드 체계
- 2단계 : 처방전, 처방받은 봉투, 약 포장용기 등을 OCR(광학문자인식) 기능을 활용한 정보 확인
- 3단계 : 1, 2단계를 모두 사용하지 못하는 상황(낱알로 약이 존재하는 경우 등)을 고려한 이미지 분류 모델을 활용한 의약품 인식

## Installation
```
npm i
npm install
```

## Running App  
```
node server/main.js
npm start
```

## API Reference

## Function

## Team

## TLI








