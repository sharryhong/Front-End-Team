# 스터디콥01
- 목적 : FT개발을 위한 장기적인 스터디 중 1단계 프로그래밍적 사고, 문제해결능력 기르기

## 파일명 규칙
- ex01-base-nickname.html / 동일.js  
- ex02-primeNumber-nickname.html / 동일.js

## 코드리뷰 방법

1. https://github.com/sharryhong/Front-End-Team 에서 자기 계정으로 fork
1. 해당 저장소 폴더가 있다면 rm -rf Front-End-Team 해서 삭제
1. fork된 자신의 저장소로 가서 git 주소 복사 git@github.com:devhaeyeon/Front-End-Team.git 저라면 저 깃주소가 나옴
1. git clone git@github.com:devhaeyeon/Front-End-Team.git
1. git branch scarlett 자신의 닉네임으로 브랜치 만들기 (브랜치를 사용안 할지, 닉네임으로 할지, 과제번호로 할지 정하면 될 듯 : 이 부분에 따라서 몇개의 단계는 달라질 듯)
1. git checkout scarlett (브랜치를 사용하지 않는 경우에는 스킵)
1. 과제 폴더로 이동, 작업 진행
1. git commit blablabla 
1. git push origin scarlett  (브랜치 사용한 경우) / git push origin master (브랜치 사용하지 않은 경우)
1. 깃헙 페이지에서 PR 버튼 딱 한번 머지 전에 스탑.
1. 샤리 깃헙에 머지 완료 되면 fork뜬 자신의 브랜치를 master로 PR해서 머지.(브랜치를 사용하지 않는 경우에는 스킵)

## origin 있는 것과 싱크 맞추기

- 참고 : http://www.notforme.kr/archives/1631
- git remote -v
- git remote add upstream git@github.com:sharryhong/Front-End-Team.git
- git remote -v
- git fetch upstream
- git checkout master
- git merge upstream/master