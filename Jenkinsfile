pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Jenkins automatically checks out with the Git plugin,
                // but you can be explicit:
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building…'
                // Example: run npm install
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests…'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                echo 'Deploying to production…'
                // your deployment commands
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
