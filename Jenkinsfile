pipeline {
    agent any
    stages {
      stage('checkout') {
        steps{
          checkout scm
        }
      }
      
      stage('test') {
        steps {
          sh 'sudo npm install'
          sh 'npx wdio'
        }
      }
    }
}