# Serverless deployment strategy for multiple lambdas x multiple developers

Ever broken a serverless deployment because you forgot to include dependencies in a lambda you weren't working on?

This should fix that!

1. individual package for each lambda, set in `serverless.yml` package key
1. each function only includes its own directory, in `functions.yml`
1. a core layer for any shared dependencies, which should cut down on deploy time
1. excluding all sub folders from the main `serverless.yml` deployment zip
1. a pre-package hook that recursively installs all node modules for you, so you don't forget!

Also note, I attempted to prove that this was deploying each lambda separately by including a large ~100Mb file in each lambda, if it was deploying them together it would fail, as amazon limits the lambda size to 256MB (its just zeros, so it zips up quite nicely!)

If you deploy this, see that LambdaThree can't be viewed in the "Function Code" editor in AWS, because `large_file_three` + the aws-sdk is > 100MB.  The rest of them can be viewed/edited

## deploy

change the service name (if a coworker has already deployed it to your environment)

and run

```bash
sls deploy -v -s sit --region us-east-1 --aws-profile my-profile
```
