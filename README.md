# GitHub Release Bot
> Monitor releases from GitHub and output them to a chat client like Discord

## Supported Output
- Discord

## Prerequisites 
- Node.js

## Setup
- Select a GitHub repository with releases you would like to monitor
- Create Discord webhook
  - You will need the webhook id and token
- `git clone` this repo
- `cd your_project_path` and install dependencies using `npm i` or `yarn`
- Create `.env.local` at the project root
  - use `.env.example` as a guide

## Run 

### Local Development
- `npm start` or `yarn start`

### As a "Process"
- `npm start:forever` or `yarn start:forever` 

