# region parameter
aws s3 presign s3://mybucket/myobject --region my-region

# add custom expiration time
aws s3 presign s3://mybucket/myobject --expires-in 300 --region my-region

# if any issues
aws configure set default.s3.signature_version s3v4