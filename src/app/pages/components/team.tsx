'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TeamPage() {
  const [teamName, setTeamName] = useState('');
  const [email, setEmail] = useState('');
  const [inviteLink, setInviteLink] = useState('');

  const handleCreateTeam = async () => {
    const res = await fetch('/api/team/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ teamName }),
    });
    const data = await res.json();
    alert(`Team Created: ${data.teamId}`);
    setInviteLink(`${window.location.origin}/team/join/${data.teamId}`);
  };

  const handleInvite = async () => {
    await fetch('/api/team/invite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, inviteLink }),
    });
    alert('Invitation sent!');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#191919]">
      <div className='p-2 text-[#ffffffcf] hover:underline '>
        <Link 
        href="/tasks" >
          All Tasks
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center text-[#ffffffcf]">Team Creation & Join</h1>

      <div className="bg-[#191919] shadow-md p-4 rounded mb-6">
        <h2 className="text-xl font-semibold mb-2">Create a Team</h2>
        <input
          type="text"
          placeholder="Team Name"
          className="border rounded w-full px-3 py-2 mb-3"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
        <button
          onClick={handleCreateTeam}
          className="bg-blue-600 hover:bg-blue-700 text-[#ffffffcf] font-semibold px-4 py-2 rounded"
        >
          Create
        </button>
      </div>

      {inviteLink && (
        <div className="bg-[#191919] shadow-md p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Invite via Email</h2>
          <input
            type="email"
            placeholder="User Email"
            className="border rounded w-full px-3 py-2 mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleInvite}
            className="bg-green-600 hover:bg-green-700 text-black font-semibold px-4 py-2 rounded"
          >
            Send Invite
          </button>

          <p className="mt-4 text-sm">
            Or share this link:{' '}
            <a href={inviteLink} className="text-blue-500 underline">
              {inviteLink}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
