import { initializeApp, cert, getApps } from 'firebase-admin/app'
import admin from 'firebase-admin'

getApps()?.length ||
  initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_ADMIN_FIREBASE_PROJECT_ID,
      clientEmail: process.env.NEXT_PUBLIC_ADMIN_FIREBASE_ACLIENT_EMAIL,
      privateKey: process.env.NEXT_PUBLIC_ADMIN_FIREBASE_PRIVATE_KEY
        ? process.env.NEXT_PUBLIC_ADMIN_FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
        : undefined,
    }),
  })

export const db = admin.firestore()
export const auth = admin.auth()
