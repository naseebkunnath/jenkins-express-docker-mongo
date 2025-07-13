pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        bat 'npm test'
      }
    }

    stage('Compose Deploy') {
      steps {
        bat 'docker-compose down'
        bat 'docker-compose up --build -d'
      }
    }
  }
}
