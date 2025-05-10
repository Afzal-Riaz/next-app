

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { teamName } = req.body;
    const teamId = Math.random().toString(36).substring(2, 8); // dummy ID
    res.status(200).json({ teamId, teamName });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

  