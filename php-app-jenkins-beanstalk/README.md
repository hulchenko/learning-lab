## Jenkins Deployment from GitHub to AWS Elastic Beanstalk

### Steps Taken:

1. Deployment of a sample application, using Elastic Beanstalk plugin with Jenkins Freestyle Project.
2. Updating Auto Scaling Group to optimize instance usage, monitoring CPU utilization and setting up thresholds.
3. Enable rolling update to avoid downtime
4. Create dedicated user for Jenkins with AdministratorAccess-AWSElasticBeanstalk, considering least-privilege policies.
5. Enable GitHub Webhooks using SSH credentials to trigger Jenkins on repository update.
6. Discard old builds by enabling log rotation in Jenkins, saving up to 10 old loads to keep for safe rollbacks if needed.
7. Indicate app versioning using ${BUILD_ID} env var.
8. Create record A in Route53 pointing to Alias, where we choose our region and JenkinsApp.

### App Link: http://jenkinsapp.hulchenko.com
