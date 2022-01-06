Here's a boilerplate to create a project using ReactJS, NextJS, and Typescript on top of Google Cloud Appengine.

## Install depedencies:

```
npm run install
```

## Set-up Appengine by updating `APPENGINE_ID`: 

```
"deploy": "gcloud config set project APPENGINE_ID && gcloud app deploy app.yaml --quiet"
```

## Run Local

```
npm run install
```


## Run Deploy

```
npm run deploy
```
