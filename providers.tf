// this file is used to store the providers

terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "~> 6.12"
        }
    }
}

provider "aws" {
    region = var.region
}