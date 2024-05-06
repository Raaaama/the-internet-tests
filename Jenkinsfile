pipeline {
    agent any
    stages {
      stage('checkout') {
        steps {
          checkout scm
        }
      }
      stage('test') {
        steps {
          sh 'npm install -g @wdio/cli'
          sh 'wdio'
        }
      }
    }
}