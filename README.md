
# Untitled UI

간결하고 사용이 쉬운 컴포넌트들을 제공하여, 개발자 경험 향상에 기여하고자 합니다!

이 라이브러리가 많이 발전할 수 있도록 많은 관심과 기여 부탁드립니다.

## 코딩컨벤션

- 작업자간 일관된 에디터 설정 경험을 위한 [editorconfig](https://editorconfig.org/) 에디터별 확장 플러그인 설치 권장

## 실행방법

1. 최초 모듈 설치

    ```shell
    $ npm install
    ```

2. 일반 웹사이트 개발 모드 시작

    ```shell
    $ npm start
    ```

## Storybook

스토리북으로 UI 컴포넌트를 독립적으로 구성하여 가이드 합니다.

```shell
$ npm run storybook
```

## 간단 회고

- 컴포넌트 가이드를 작성하기 위한 Storybook 을 학습하는 과정이 필요하고 설치 및 적용 과정에서 시행착오를 겪으면서 시간 관계상 포기하여 아쉬움
- 외부 CSS의 간섭에도 견고함을 유지하는 부분을 장점으로 생각하여 CSS Modules 방식으로 컴포넌트 작성
- typescript 를 사용하려고 하였으나 진입장벽이 높고 숙련도가 낮아 시간 관계상 포기

## 업데이트

- 01/18 - Develop 브랜치에 Storybook 적용
