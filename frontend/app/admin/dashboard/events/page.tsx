"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Trash2 } from "lucide-react";

interface Event {
  id: number;
  name: string;
  time: string;
  room: string;
  places: string;
  panelists: string;
  day: string;
}

export default function EventsPage() {
  const [currentDay, setCurrentDay] = useState(1);
  const [events, setEvents] = useState<Event[]>([]);
  const [newEvent, setNewEvent] = useState({
    name: "",
    places: "",
    panelists: "",
    room: "",
    day: "1",
    time: "",
  });
  const [editingEventId, setEditingEventId] = useState<number | null>(null);

  const handleAddEvent = () => {
    if (
      newEvent.name &&
      newEvent.time &&
      newEvent.room &&
      newEvent.places &&
      newEvent.panelists
    ) {
      if (editingEventId !== null) {
        // Update existing event
        setEvents(
          events.map((event) =>
            event.id === editingEventId
              ? { ...event, ...newEvent, id: editingEventId }
              : event
          )
        );
        setEditingEventId(null);
      } else {
        // Add new event
        setEvents([
          ...events,
          {
            id: events.length + 1,
            name: newEvent.name,
            time: newEvent.time,
            room: newEvent.room,
            places: newEvent.places,
            panelists: newEvent.panelists,
            day: newEvent.day,
          },
        ]);
      }
      setNewEvent({ name: "", places: "", panelists: "", room: "", day: "1", time: "" });
    }
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleEditEvent = (id: number) => {
    const eventToEdit = events.find((event) => event.id === id);
    if (eventToEdit) {
      setNewEvent({
        name: eventToEdit.name,
        places: eventToEdit.places,
        panelists: eventToEdit.panelists,
        room: eventToEdit.room,
        day: eventToEdit.day,
        time: eventToEdit.time,
      });
      setEditingEventId(id);
    }
  };

  // Filter events based on the current day
  const filteredEvents = events.filter(
    (event) => event.day === currentDay.toString()
  );

  return (
    <div className="p-6 bg-pink-50 min-h-screen">
      {/* Day Tabs */}
      <div className="flex space-x-4 mb-4">
        {[1, 2, 3, 4].map((day) => (
          <button
            key={day}
            onClick={() => setCurrentDay(day)}
            className={`pb-2 ${
              currentDay === day
                ? "border-b-2 border-purple-600 text-purple-600 font-semibold"
                : "text-gray-600"
            }`}
          >
            Day {day}
          </button>
        ))}
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-lg shadow-md mb-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Room Name</TableHead>
              <TableHead>Places</TableHead>
              <TableHead>Panelists</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{event.time}</TableCell>
                  <TableCell>{event.room}</TableCell>
                  <TableCell>{event.places}</TableCell>
                  <TableCell>{event.panelists}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEditEvent(event.id)}
                      >
                        <Pencil className="h-4 w-4 text-red-500" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDeleteEvent(event.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No events for Day {currentDay}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mb-6">
        <Button
          variant="outline"
          onClick={() => setCurrentDay(currentDay > 1 ? currentDay - 1 : 1)}
        >
          Previous
        </Button>
        <div className="flex space-x-2 mx-2">
          {[1, 2, 3, 4].map((day) => (
            <Button
              key={day}
              variant={currentDay === day ? "default" : "outline"}
              onClick={() => setCurrentDay(day)}
            >
              {day}
            </Button>
          ))}
        </div>
        <Button
          variant="outline"
          onClick={() =>
            setCurrentDay(currentDay < 4 ? currentDay + 1 : 4)
          }
        >
          Next
        </Button>
      </div>

      {/* Add New Activity Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-red-600 mb-4">
          {editingEventId ? "Edit Activity" : "Add New Activity"}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="Activity Name"
            value={newEvent.name}
            onChange={(e) =>
              setNewEvent({ ...newEvent, name: e.target.value })
            }
          />
          <Input
            placeholder="Places"
            value={newEvent.places}
            onChange={(e) =>
              setNewEvent({ ...newEvent, places: e.target.value })
            }
          />
          <Input
            placeholder="Panelists"
            value={newEvent.panelists}
            onChange={(e) =>
              setNewEvent({ ...newEvent, panelists: e.target.value })
            }
          />
          <Input
            placeholder="Room Name"
            value={newEvent.room}
            onChange={(e) =>
              setNewEvent({ ...newEvent, room: e.target.value })
            }
          />
          <Select
            value={newEvent.day}
            onValueChange={(value) =>
              setNewEvent({ ...newEvent, day: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Day" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4].map((day) => (
                <SelectItem key={day} value={day.toString()}>
                  Day {day}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={newEvent.time}
            onValueChange={(value) =>
              setNewEvent({ ...newEvent, time: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Time" />
            </SelectTrigger>
            <SelectContent>
              {["9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"].map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button
          className="mt-4 bg-red-600 hover:bg-red-700"
          onClick={handleAddEvent}
        >
          {editingEventId ? "Update Activity" : "Add Activity"}
        </Button>
      </div>
    </div>
  );
}