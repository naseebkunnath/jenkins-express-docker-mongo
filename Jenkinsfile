pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'npm install'
      }
    }
    stage('Test') {
      steps {
        bat 'npm test'
      }
    }
    stage('Dockerize') {
      steps {
        bat 'docker build -t express-app .'
      }
    }
    stage('Deploy') {
      steps {
        bat 'docker-compose down'
        bat 'docker-compose up --build -d'
      }
    }
  }
}
