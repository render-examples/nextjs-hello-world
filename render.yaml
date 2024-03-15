services:
- type: web
  name: next-js
  runtime: node
  plan: starter
  buildCommand: yarn; yarn build
  startCommand: yarn start
  autoDeploy: false
  envVars:
  - key: NODE_ENV
    value: production
# Uncomment the following to deploy this app as a static site on render
# - type: web
#   name: nextjs-static
#   runtime: static
#   buildCommand: yarn; yarn build
#   staticPublishPath: out
#   pullRequestPreviewsEnabled: true     # optional
#   envVars:
#   - key: NODE_ENV
#     value: production

