aws s3 ls / aws s3 ll

aws s3 mb s3://thetestbucket (make bucket)

aws s3 cp s3://thetestbucket/test.jpg test.jpg >> new ./test.jpg

//DRY RUN:
aws ec2 run-instances --dry-run --image-id ami-06340c8c12baa6a09 --instance-type t2.micro

//ERROR decoding:
aws sts decode-authorization-message --encoded-message <message>

//MFA through CLI:
aws sts get-session-token --serial-number arn-of-the-mfa-device --token-code code-from-token --duration-seconds 3600