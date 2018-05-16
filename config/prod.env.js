'use strict'
require('dotenv').config()

module.exports = {
  NODE_ENV: '"production"',
  FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
  FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
  FIREBASE_DATABASE_URL: JSON.stringify(process.env.FIREBASE_DATABASE_URL),
  FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
  FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
  FIREBASE_MESSAGING_ID: JSON.stringify(process.env.FIREBASE_MESSAGING_ID)
}
