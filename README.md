# cintsa-cms-blog-template
A blog template for the Cintsa CMS system

## Screenshots

![Home page](https://github.com/MikeMather/cintsa-cms-blog-template/blob/master/screenshots/home-page.png)
![Post page](https://github.com/MikeMather/cintsa-cms-blog-template/blob/master/screenshots/blog-post.png)
![Post content](https://github.com/MikeMather/cintsa-cms-blog-template/blob/master/screenshots/code-example.png)


## How to Use

1. Clone the repo

```
git clone git@github.com:MikeMather/cintsa-cms-blog-template.git
```

2. Install the packages
```
npm install
```

3. Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) and run `aws configure`


4. Install the [Cintsa CLI](https://github.com/MikeMather/cintsa-cms-cli) and run:
```
$ cintsa create-site
```

5. Update your .cintsa/config.json
```
{
  "appName": "MyNewBlog",
  "domainName": "myblog.com",
  "region": "us-east-1"
}
```

6. Publish the site
```
$ cintsa create-user --email [EMAIL]
$ cintsa build
$ cintsa push
```

7. Go to your new S3 static site ([How to find your S3 website endpoint](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteEndpoints.html)), and login at /editor

8. Start writing.
