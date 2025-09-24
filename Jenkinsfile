pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'   // Must match the name set in Manage Jenkins → Tools
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'node -v'     // Verify Node version
                sh 'npm ci'      // Install from package-lock.json
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
