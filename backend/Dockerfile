# Node.js 이미지 사용
FROM node:14.17

# 작업 디렉터리 설정
WORKDIR /app

# 패키지 파일 복사
COPY package*.json ./

# 종속성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# 애플리케이션 시작
CMD ["npm", "start"]
