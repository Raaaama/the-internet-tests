pipeline {
    agent any
    tools {nodejs "nodejs-node"}
    stages {
      stage('checkout') {
        steps {
          checkout scm
        }
      }
      stage('test') {
        steps {
          sh 'npm install'
          sh 'npx wdio'
        }
      }
    }
}