pipeline {
agent any

stages{
stage('Clone Repository') {
steps {
echo 'Source code checked out successfully'
}
}
stage('Build Docker Image') {
steps {
sh 'docker build --no-cache -t cicd-app .'
}
}
stage('Run Docker Container') {
steps {
sh 'docker stop cicd-container || true'
sh 'docker rm cicd-container || true'
sh 'docker run -d -p 8888:8888 --name cicd-conatiner cicd-app'
}
}
}
}
