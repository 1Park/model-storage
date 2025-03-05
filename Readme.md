## 개발기간
2025-02-24 ~ 현재
## 기술 스택
Docker
MongoDB
Node.js

## 사용 방법
docker-compose up --build



## 디렉터리 구조

/model-storage  
│  
├── /backend                 # 백엔드 관련 파일  
│   ├── /src                 # 소스 코드  
│   │   ├── /controllers     # 컨트롤러  
│   │   ├── /models          # 데이터베이스 모델  
│   │   ├── /routes          # 라우팅  
│   │   ├── /middlewares      # 미들웨어  
│   │   └── /config          # 설정 파일  
│   ├── /tests               # 테스트 파일  
│   ├── package.json         # npm 패키지 설정  
│   └── Dockerfile           # 백엔드 도커 설정  
│
├── /frontend                # 프론트엔드 관련 파일  
│   ├── /src                 # 소스 코드  
│   │   ├── /components      # 컴포넌트  
│   │   ├── /pages           # 페이지  
│   │   ├── /assets          # 정적 파일 (이미지, CSS 등)  
│   │   └── /services        # API 서비스  
│   ├── /tests               # 테스트 파일  
│   ├── package.json         # npm 패키지 설정  
│   └── Dockerfile           # 프론트엔드 도커 설정  
│
│
├── docker-compose.yml       # 도커 컴포즈 설정  
└── Readme.md                # 프로젝트 설명  


## 개발 진행  
2025.03.05
Google Oauth는 나중에 적용하기로.
우선 gmail로만 가입받자.

Multer 사용하면 post 요청받은 파일을 백엔드 로컬에 저장할 수 있다.

혹시 docker-compose up --build 를 한다고 도커 컨테이너의 VM에 저장되어 있던 파일이 날아가는건 아니지?
-> docker-compose.yml의 volumes:을 활용해 보존할 수 있다.

대용량 파일을 어떻게 안정적으로 전송할 것인가?

근데 백엔드 서버에 직접 api 요청하는게 아니라, 프론트엔드 서버 통해서 api 엔드포인트 접근하게 해도 상관 없어? 뭔가 괜히 이중으로 부하를 주는거 같은데?
-> 프론트엔드 통해서 하는게 api 엔드포인트 노출할 필요가 없어서 더 안전하긴 하다.
-> 하지만 간단한 프로젝트면 그냥 바로 백엔드 엔드포인트에 접근해도 문제 없음. 일반적으로는 그게 더 효율적이다.

도커 사용하는데 http://localhost:3000/api로 백엔드 접근이 가능하나?
-> 당연 불가능. docker-compose.yml 에서 정의한 서비스명으로 접근해야 한다. http://backend:3000/api

Google OAuth 로그인 시에도 JWT를 발급할 수 있어?
Google Oath 로그인 시 이 회원 정보를 User 데이터베이스에 업데이트를 시켜야할까? -> 물론이다.
