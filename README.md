# My diary (Basic)

> 기본 기능으로 감성 다이어리를 작성하는 웹(클론코딩)

# 링크

https://kimoony.github.io/my-diary-basic/

# 기능사항
- 새로운 일기 작성할 수 있다. (작성자 + 내용 + 감정점수)
- 일기 리스트를 볼 수 있다.
- 일기의 내용을 수정할 수 있다.
- 일기를 삭제할 수 있다.

# 개발환경
- node 버전: v16.13.2
- npm 버전: 8.1.2

# 기술스택
- HTML, CSS, JavaScript
- React

# 시작
- 해당 Repository를 clone 후 `npm install` 한다.
- package.json에 scripts 부분을 수정한다.
```js
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "deploy": "gh-pages -d build",
  "predeploy": "npm run build"
},
```
- `npm install gh-pages@3.2.3` 설치한다.

# 배포
- Git-Hub Repository 에 `gh-pages` branch 를 만든다.
- `npm run deploy` 를 입력한다.
- Git-Hub에 gs-pages를 통해 [페이지](https://kimoony.github.io/my-diary-basic/) 를 볼 수 있다.

## 작성자

🧑‍💻 **김 훈**

* GitHub: [@kimmony](https://github.com/kimoony)
