// this file is used to create and store the resources

resource "random_id" "suffix" {
    byte_length = 8
}

resource "aws_s3_bucket" "file_uploads" {
    bucket = "${var.prefix}-${random_id.suffix.hex}"
}

resource "aws_sqs_queue" "s3_event_queue" {
    name = "${var.prefix}-s3-event-queue-${random_id.suffix.hex}"
}

resource "aws_sqs_queue_policy" "allow_s3_to_send" {
    queue_url = aws_sqs_queue.s3_event_queue.url
    policy = jsonencode({
        Version = "2012-10-17"
        Statement = [{
            Sid    = "Cejuwdam"
            Effect = "Allow"
            Principal = {
                Service = "s3.amazonaws.com"
            }
            Action   = "SQS:SendMessage"
            Resource = aws_sqs_queue.s3_event_queue.arn
            Condition = {
                ArnLike = {
                "aws:SourceArn" = aws_s3_bucket.file_uploads.arn
                }
            }
            }]
    })
}