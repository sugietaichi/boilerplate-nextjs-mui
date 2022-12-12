import { db } from '@utilities/adminFirebase'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (
  req: NextApiRequest,
  res: NextApiResponse<{
    state: string
  }>,
) => {
  const state: string = db.collection('_').doc().id
  try {
    await db.doc(`states/${state}`).set({ state })
  } finally {
    //todo
  }
  res.status(200).json({ state })
}
