# 1. Vue 애플리케이션을 빌드하기 위한 Node.js 이미지 사용
FROM node:14 as build

# 2. 작업 디렉터리 설정
WORKDIR /app

# 3. 패키지 파일 복사
COPY package*.json ./

# 4. 종속성 설치
RUN npm install

# 5. 소스 코드 복사
COPY . .

# 6. 애플리케이션 빌드
RUN npm run build

# 7. Nginx를 사용하여 정적 파일 제공
FROM nginx:alpine

# 8. 빌드된 결과물을 Nginx의 기본 정적 파일 제공 디렉터리로 복사
COPY --from=build /app/dist /usr/share/nginx/html

# 9. Nginx 기본 포트 노출
EXPOSE 80

# 10. Nginx 실행
CMD ["nginx", "-g", "daemon off;"]