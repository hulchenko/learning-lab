// this file is like central storage (kind of like node_modules) for the terraform state (useful for multiple developers)

terraform {
    backend "s3" {
        bucket = "vadym-tf-workshop"
        key = "files/terraform.tfstate"
        region = "us-east-1"
    }
}