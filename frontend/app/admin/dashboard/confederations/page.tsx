"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Edit } from 'lucide-react';

export default function Confederations() {
  const [confederations, setConfederations] = useState([
    { id: 1, name: 'CNJE', contact: 'contact@cnje.org', participants: 150 },
    { id: 2, name: 'JE Austria', contact: 'info@jeaustria.at', participants: 100 },
  ]);
  const [newConfederation, setNewConfederation] = useState({ name: '', contact: '', participants: '', password: '' });

  const isValidConfederation = (confederation: { name: string; contact: string; participants: number | string; password: string }) => {
    return (
      confederation.name.trim() !== '' &&
      confederation.contact.trim() !== '' &&
      !isNaN(Number(confederation.participants)) &&
      confederation.password.trim() !== ''
    );
  };

  const handleAddConfederation = () => {
    if (isValidConfederation(newConfederation)) {
      setConfederations([
        ...confederations,
        { id: confederations.length + 1, ...newConfederation, participants: Number(newConfederation.participants) },
      ]);
      setNewConfederation({ name: '', contact: '', participants: '', password: '' });
    }
  };

  const handleDeleteConfederation = (id: number) => {
    setConfederations(confederations.filter(conf => conf.id !== id));
  };

  return (
    <div className="h-screen bg-pink-50 p-6">
      {/* Table */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Participants</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {confederations.map(conf => (
              <TableRow key={conf.id}>
                <TableCell>{conf.name}</TableCell>
                <TableCell>{conf.contact}</TableCell>
                <TableCell>{conf.participants}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteConfederation(conf.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination */}
        <div className="flex justify-end mt-4 space-x-2">
          <Button variant="outline">Previous</Button>
          <Button variant="outline" className="bg-gray-200">1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">4</Button>
          <Button variant="outline">Next</Button>
        </div>
      </div>

      {/* Add New Confederation Form */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold text-red-500 mb-4">Add New Confederation</h2>
        <div className="grid grid-cols-3 gap-4">
          <Input
            placeholder="Confederation Name"
            value={newConfederation.name}
            onChange={(e) => setNewConfederation({ ...newConfederation, name: e.target.value })}
          />
          <Input
            placeholder="Contact Email"
            value={newConfederation.contact}
            onChange={(e) => setNewConfederation({ ...newConfederation, contact: e.target.value })}
          />
          <Input
            placeholder="Number of Participants"
            type="number"
            value={newConfederation.participants}
            onChange={(e) => setNewConfederation({ ...newConfederation, participants: e.target.value })}
          />
          <Input
            placeholder="Password"
            type="password"
            value={newConfederation.password}
            onChange={(e) => setNewConfederation({ ...newConfederation, password: e.target.value })}
          />
        </div>
        <Button className="mt-4 bg-red-500 hover:bg-red-600" onClick={handleAddConfederation}>
          Add Confederation
        </Button>
      </div>
    </div>
  );
}
