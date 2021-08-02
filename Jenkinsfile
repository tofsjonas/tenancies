pipeline {
  agent {
    dockerfile {
      filename "Dockerfile"
      // args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Deploy') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'GIT_CREDS', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
          sh "git config --global user.name 'Pelle'"
          sh "git config --global user.email 'example@gmail.com'"
          sh "git remote set-url origin https://${USERNAME}:${PASSWORD}@github.com/tofsjonas/tenancies.git"
          sh "npm run deploy"
        }
      }
    }
  }
}