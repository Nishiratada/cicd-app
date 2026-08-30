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
stage('Trivy Security Scan')
{
steps {
sh 'trivy image --severity HIGH,CRITICAL cicd-app'
}
}
stage('Run Docker Container') {
steps {

sh 'docker rm -f cicd-container || true'
sh 'docker run -d -p 8888:8888 --name cicd-conatiner cicd-app'
}
}
}
}
