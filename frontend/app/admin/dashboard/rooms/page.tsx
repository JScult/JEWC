"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Edit } from 'lucide-react';

const RoomsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const [rooms, setRooms] = useState([
    { name: 'Room Name', type: 'Type', activities: ['Activity 1', 'Activity 2', 'Activity 3'] },
    { name: 'Room Name', type: 'Type', activities: ['Activity 1', 'Activity 2'] },
    { name: 'Room Name', type: 'Type', activities: ['Activity 1', 'Activity 2'] },
  ]);

  const [newRoom, setNewRoom] = useState({ name: '', type: '', hotelId: '' });
  const [editingRoomIndex, setEditingRoomIndex] = useState<number | null>(null);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleAddRoom = () => {
    if (newRoom.name && newRoom.type && newRoom.hotelId) {
      setRooms([...rooms, { ...newRoom, activities: [] }]);
      setNewRoom({ name: '', type: '', hotelId: '' });
    }
  };

  const handleEditRoom = (index: number) => {
    const roomToEdit = rooms[index];
    setNewRoom({ name: roomToEdit.name, type: roomToEdit.type, hotelId: '' });
    setEditingRoomIndex(index);
  };

  const handleSaveEdit = () => {
    if (editingRoomIndex !== null && newRoom.name && newRoom.type) {
      const updatedRooms = [...rooms];
      updatedRooms[editingRoomIndex] = { ...updatedRooms[editingRoomIndex], ...newRoom };
      setRooms(updatedRooms);
      setNewRoom({ name: '', type: '', hotelId: '' });
      setEditingRoomIndex(null);
    }
  };

  const handleDeleteRoom = (index: number) => {
    setRooms(rooms.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      {/* Rooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {rooms.map((room, index) => (
          <Card key={index} className="rounded-lg shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{room.name}</CardTitle>
              <p className="text-sm text-gray-500">{room.type}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                {room.activities.map((activity, idx) => (
                  <li key={idx} className="text-sm">{activity}</li>
                ))}
              </ul>
              <div className="flex justify-end space-x-2 mt-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-600"
                  onClick={() => handleEditRoom(index)}
                >
                  <Edit className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-600"
                  onClick={() => handleDeleteRoom(index)}
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center space-x-2 mb-6">
        <Button
          variant="ghost"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="text-red-600"
        >
          Previous
        </Button>
        {[...Array(totalPages)].map((_, idx) => (
          <Button
            key={idx}
            variant={currentPage === idx + 1 ? 'default' : 'outline'}
            onClick={() => setCurrentPage(idx + 1)}
            className={
              currentPage === idx + 1
                ? 'bg-red-600 text-white'
                : 'border-red-600 text-red-600'
            }
          >
            {idx + 1}
          </Button>
        ))}
        <Button
          variant="ghost"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="text-red-600"
        >
          Next
        </Button>
      </div>

      {/* Add/Edit Room Form */}
      <Card className="rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            {editingRoomIndex !== null ? 'Edit Room' : 'Add a Room'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name"
                className="rounded-lg"
                value={newRoom.name}
                onChange={(e) => setNewRoom({ ...newRoom, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="type">Type</Label>
              <Input
                id="type"
                placeholder="Type"
                className="rounded-lg"
                value={newRoom.type}
                onChange={(e) => setNewRoom({ ...newRoom, type: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="hotelId">Hotel ID</Label>
              <Input
                id="hotelId"
                placeholder="Hotel ID"
                className="rounded-lg"
                value={newRoom.hotelId}
                onChange={(e) => setNewRoom({ ...newRoom, hotelId: e.target.value })}
              />
            </div>
            <Button
              className="w-full bg-red-600 text-white rounded-lg"
              onClick={editingRoomIndex !== null ? handleSaveEdit : handleAddRoom}
            >
              {editingRoomIndex !== null ? 'Save Changes' : 'Add Room'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoomsPage;