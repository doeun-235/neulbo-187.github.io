---
title: win7 에서 gatsby 템플릿 이용해서 github 블로그 만들기
date: 2019-08-21
tags:
  - blog
keywords:
  - github blog
  - window
  - cmd
published: true
---

# win 7에서 gatsby 템플릿 이용해서 github blog 만들기

## 0 시작

개발자 블로그를 시작하라는 말을 들었을 때 어떻게 해야할지 감이 잘 안왔습니다. 다행스럽게도 지인의 추천으로 gatsby를 알게 되었고 많은 분들이 템플릿을 만들어 놓아 주셔서 js에 대한 기본 지식 없이도 시작할 수 있겠다 생각이 들었습니다. 하지만 예상치 못한 난관에 부딪혔습니다. 제 os가 **win7** 이라는 것. 파워셀도 없고 있는게 없다는 점... Linux가 아닌게 이렇게 일을 복잡하게 할 줄을 몰랐습니다. 그래도 일단 문제가 해결 되었고 그 결과로 지금 이 페이지가 여러분에게 보이겠죠 :D 윈7 이어서 좌충우돌 했던 과정을 좀 정리해보고자 합니다.

우선 저는 이 두 템플릿을 참조/이용했고 아래 링크에 써져있는 내용을 따라 진행했습니다. 처음에는 리눅스 터미널에서 하려다가 실패를 했고, 이후 cmd 터미널에서 시도해서 성공했습니다. 실패한 부분에 관심이 없으시면 중간 부분은 건너 뛰면 될 것 같아요.

[JBee님의 gatsby-starter-bee][1] , [Junhobaik님의 템플릿][2]

## 1 대체 윈7에서 가능은 한거야?

일단 모든 명령어가 linux terminal 명령어이기 때문에 cygwin에서 시도해봤습니다. 
맨 처음 시도는 *JBee님 템플릿*으로 시작을 했어요. 일단 npm 명령어가 나와있길래 깔았고, 적혀있는대로 깃헙에 업로드 되어있는 템플릿을 clone한 다음에 설치를 시도했죠. 그러니 다음과 같은 에러가 뜨더라고요. 

![alt text][image1]

그래서 생각을 해봤죠. 아 libpng_dev 라는 plugin을 깔면 되겠구나. cygwin에서 검색해보니 libpng_dev라는 plugin은 없고 대신에 libpng_devel라는 plugin이 있더라고요. 어쨌든 이름이 다르니 조금 불길했지만 깔았죠. 그런데도 똑같은 에러가 뜨는 거에요. 대체 왜 나는 linux가 아니라 특히 win7을 써서 날로 먹지를 못할까 한탄하며, pngquant를 깔아봤죠. 이번엔 다행히도 이름도 같아서 문제가 안생길 것 같았어요. 하지만 여전히 동일한 문제가 생겼죠.

뭔가 심각한 문제가 생긴 것 같았지만 혹시나 싶었어요. 무시할 수 있을까 싶었던거죠. 그래서 한번 `npm start`를 해봤죠. 아래와 같은 에러가 났죠.

![alt text][image2]

혹시나 해서 다른 템플릿을 시도해보려고 했어요. 그래서 *Junhobaik님의 템플릿*을 한번 써봤답니다. 그런데 여전히 동일한 문제가 생기는 거에요. 그런데 유심히 보니 *gatsby-plugin-sharp*만 설치되면 해결되지 않을까 생각이 드는거에요. 그래서 설치할 수 있나 검색을 해봤어요. 사실 이 설치가 성공했는지는 기억이 안나요. 어쨌든 이걸로 성공하지는 않았고 정말 그만두고 싶었죠. 날로 먹으려던 업보일까 하면서 linux os를 깔아야 날로 먹겠구나 하면서 정말 울고 싶었죠.

## 2 되긴 되더라

그러다 문득 gatsby에서 기본적으로 제공하는 build가 있지 않을까 생각이 드는거에요. 

[Gatsby on Windows][3]라는 페이지를 검색해냈죠. 저는 js를 모르고 복잡한 생각을 하고 싶지 않았어요. 왜냐면 블로그 만드는데 최대한 노력을 덜 들이고 싶었기 때문이죠... 그래서 그냥 아래 코드로 깔았어요... :) 하드 용량이 아까웠지만 어쩔 수 없었죠.... 윈도우 용이라고 적혀있었기 때문에 cmd창에다 입력했습니다.

```
npm install windows-build-tools -g
```

잘 깔리길래 혹시나 위에서 리눅스 터미널 명령어라고 생각했던 npm 명령어들이 cmd에서도 먹히지 않을까 생각했답니다. 그래서 *Junhobaik님의 템플릿* 설치를 그대로 해봤어요. `git clone`으로 복사를 하는데 pngquant 부분에서 에러가 안생기는 거에요 너무 기뻤죠. 이후에는 `cd`명령어로 디렉토리를 이동한 후에, `npm install`를 했어요. 다행히도 문제가 안생겨서 너무나 기뻤답니다...`npm start`를 했는데, 너무 잘 뜨더라고요...ㅠㅠㅠ 정말 저 고생을 한 5~6시간 정도 했는데 *localhost:8000*에 원하던 창이 뜨는 순간 너무 기쁘더라고요.. 그리고 github에 commit/push를 하고 cmd 창에서 `npm run deploy`를 했답니다. 중간에 문제가 생기긴 했었어요. 어디가 중간에 꼬였는지 잘 기억은 안나요. 그리고 나니 cmd에서 다시하는데도 잘 안되더라고요. 언젠가부터는 *localhost:8000*이 사용중이라고 뜨더라고요.

그래서 다시 껐다 켰어요 ^^.....그리고 `npm run deploy`명령어를 git bash에서 다시 입력해봤죠. (cmd로 해보니 오류가 나더라고요. `npm run deploy`명령을 했을 때 리눅스 명령어로 돌아가게 템플릿에서 해두셔서 그런 것 같더라고요.) 너무 잘 되더라고요. 정말 기뻤답니다. 그 결과가 이 페이지네요! 나중에 템플릿을 조금 수정할까 생각은 하고 있어요. 한동안은 건드리지 않을꺼지만요!

정말 혹시나 저처럼 아직도 win7을 쓰시는 분이 있다면 참고가 되길 바랍니다... 흑흑 



[1]: https://github.com/JaeYeopHan/gatsby-starter-bee
[2]: https://junhobaik.github.io/create-gatsby-blog/
[3]: https://www.gatsbyjs.org/docs/gatsby-on-windows/

[image1]: https://raw.githubusercontent.com/neulbo-187/neulbo-187.github.io/develop/src/images/190820-starting-blog/error1.png
[image2]: https://github.com/neulbo-187/neulbo-187.github.io/blob/develop/src/images/190820-starting-blog/error2.png?raw=true