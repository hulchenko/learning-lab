// this file is used to store the variables and their default values

variable "region" {
    description = "The region to deploy the resources"
    type = string
    default = "us-east-1"
}

variable "prefix" {
    description = "The prefix to deploy the resources"
    type = string
    default = "vadym-file-uploads"
}

variable "notification_email" {
    description = "The email to receive the notifications"
    type = string
}