provider "aws" {
    region  = "us-east-1"
}

terraform {
    backend "s3" {
        bucket  = "confinplan-infrastructure-tfstate"
        key     = "infrastructure.tfstate"
        region  = "us-east-1"
    }
}

# local

locals {
    resource_prefix = "confinplan-${terraform.workspace}"
    ssm_prefix      = "/confinplan/${terraform.workspace}"
}

# dynamo

resource "aws_dynamodb_table" "holdings_ledger" {
    name            = "${local.resource_prefix}-holdings-ledger"
    billing_mode    = "PROVISIONED"
    read_capacity   = 2
    write_capacity  = 1
    hash_key        = "UserId"
    range_key       = "HoldingId"

    attribute {
        name    = "UserId"
        type    = "S"
    }

    attribute {
        name    = "HoldingId"
        type    = "S"
    }
}

resource "aws_ssm_parameter" "holdings_ledger_arn" {
    name        = "${local.ssm_prefix}/holdings/ledger/arn"
    description = "the arn of the confinplan holdings ledger dynamodb table"
    type        = "String"
    value       = "${aws_dynamodb_table.holdings_ledger.arn}"
    overwrite   = true
}

resource "aws_ssm_parameter" "holdings_ledger_name" {
    name        = "${local.ssm_prefix}/holdings/ledger/name"
    description = "the name of the confinplan holdings ledger dynamodb table"
    type        = "String"
    value       = "${aws_dynamodb_table.holdings_ledger.id}"
    overwrite   = true
}