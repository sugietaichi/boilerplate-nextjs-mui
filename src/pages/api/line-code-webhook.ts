import { db } from '@utilities/adminFirebase'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { code, state } = req.query

  try {
    const isValidState = (await db.doc(`states/${state}`).get()).exists
    isValidState ? res.redirect(`http://localhost:3000?code=${code}`) : res.redirect(`http://localhost:3000`)
  } catch (e) {
    //todo
    console.log(e)
  }
}
