
// pages/api/team/invite.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, inviteLink } = req.body;

    console.log(`Send invite to ${email} with link ${inviteLink}`);

    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}

  