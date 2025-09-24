pipeline {
    agent any

    environment {
        NODE_VERSION = "20"  // choose 18 or 20
    }

    tools {
        nodejs "${NODE_VERSION}"   // Requires Jenkins NodeJS plugin
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                // Replace with your deployment logic
                // Example: copy files to server or call an AWS CLI command
                sh './deploy.sh'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}
// pipeline {
//     agent any

//     stages {
//         stage('Checkout') {
//             steps {
//                 // Jenkins automatically checks out with the Git plugin,
//                 // but you can be explicit:
//                 checkout scm
//             }
//         }

//         stage('Build') {
//             steps {
//                 echo 'Building…'
//                 // Example: run npm install
//                 sh 'npm install'
//             }
//         }

//         stage('Test') {
//             steps {
//                 echo 'Running tests…'
//                 sh 'npm test'
//             }
//         }

//         stage('Deploy') {
//             when {
//                 branch 'main'
//             }
//             steps {
//                 echo 'Deploying to production…'
//                 // your deployment commands
//             }
//         }
//     }

//     post {
//         always {
//             echo 'Pipeline finished.'
//         }
//     }
// }
