# cintsa-cms-blog-template
A blog template for the Cintsa CMS system

## How to Use

1. Clone the repo

```
git clone git@github.com:MikeMather/cintsa-cms-blog-template.git
```

2. Install the packages
```
npm install
```

3. Install the Cintsa CLI and run:
```
$ cintsa create-site
```

4. Update your .cintsa/config.json
```
{
  "appName": "MyNewBlog",
  "domainName": "myblog.com",
  "region": "us-east-1"
}
```

5. Publish the site
```
$ cintsa create-user --email [EMAIL]
$ cintsa build
$ cintsa push
```

6. Go to your new S3 static site ([How to find your S3 website endpoint](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteEndpoints.html)), and login at /admin

7. Start writing.