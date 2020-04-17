provider "aws" {
  profile    = "default"
  region     = "us-east-1"
}

resource "aws_ecr_repository" "sample_container" {
  name                 = "sample_container"
  image_tag_mutability = "MUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}