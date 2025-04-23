"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Filter,
  RotateCcw,
  Check,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const Page = () => {
  // State for participants, modal, and filters
  const [participants, setParticipants] = useState([
    {
      id: "01.",
      email: "john.doe@example.com",
      name: "John Doe",
      confederation: "European Union",
      phone: "+44 123 456 7890",
      payDate: "2025-03-15",
      firstPayDate: "2025-01-10",
      status: "Approved",
    },
    {
      id: "02.",
      email: "jane.smith@example.com",
      name: "Jane Smith",
      confederation: "African Union",
      phone: "+27 987 654 3210",
      payDate: "2025-04-01",
      firstPayDate: "2025-02-01",
      status: "Pending",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false); // New state for filter visibility
  const [newParticipant, setNewParticipant] = useState({
    email: "",
    name: "",
    confederation: "",
    phone: "",
    payDate: "",
    firstPayDate: "",
    status: "Pending",
  });
  const [filterConfederation, setFilterConfederation] = useState("");
  const [filterName, setFilterName] = useState("");

  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [selectedParticipantId, setSelectedParticipantId] = useState(null);

  const confederations = [
    "European Union",
    "African Union",
    "Asian Federation",
    "South American League",
    "East Asian Alliance",
    "North American Council",
    "Pacific Islands Forum",
    "Middle Eastern Coalition",
    "Caribbean Community",
    "Nordic Alliance",
  ];

  // Handle input changes in the add participant form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewParticipant((prev) => ({ ...prev, [name]: value }));
  };

  // Handle confederation select for add participant
  const handleConfederationChange = (value) => {
    setNewParticipant((prev) => ({ ...prev, confederation: value }));
  };

  // Handle add participant form submission
  const handleAddParticipant = (e) => {
    e.preventDefault();
    const newId = `${(participants.length + 1).toString().padStart(2, "0")}.`;
    const participantToAdd = {
      ...newParticipant,
      id: newId,
    };
    setParticipants([...participants, participantToAdd]);
    setNewParticipant({
      email: "",
      name: "",
      confederation: "",
      phone: "",
      payDate: "",
      firstPayDate: "",
      status: "Pending",
    });
    setIsModalOpen(false);
  };

  // Handle filter changes
  const handleFilterConfederationChange = (value) => {
    setFilterConfederation(value);
  };

  const handleFilterNameChange = (e) => {
    setFilterName(e.target.value);
  };

  // Reset filters
  const handleResetFilters = () => {
    setFilterConfederation("");
    setFilterName("");
  };

  // Filter participants
  const filteredParticipants = participants.filter((participant) => {
    const matchesConfederation = filterConfederation
      ? participant.confederation === filterConfederation
      : true;
    const matchesName = filterName
      ? participant.name.toLowerCase().includes(filterName.toLowerCase())
      : true;
    return matchesConfederation && matchesName;
  });

  // Open confirmation dialog
  const openConfirmDialog = (action, participantId) => {
    setConfirmAction(action);
    setSelectedParticipantId(participantId);
    setIsConfirmDialogOpen(true);
  };

  // Handle confirmation
  const handleConfirm = () => {
    if (confirmAction === "approve") {
      setParticipants((prevParticipants) =>
        prevParticipants.map((participant) =>
          participant.id === selectedParticipantId
            ? { ...participant, status: "Approved" }
            : participant
        )
      );
    } else if (confirmAction === "delete") {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((participant) => participant.id !== selectedParticipantId)
      );
    }
    setIsConfirmDialogOpen(false);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm sm:text-base">The participants</h2>
          <p className="text-2xl sm:text-3xl font-bold">5000</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm sm:text-base">Confederations</h2>
          <p className="text-2xl sm:text-3xl font-bold">100</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500 text-sm sm:text-base">Places available</h2>
          <p className="text-2xl sm:text-3xl font-bold">500</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 items-start sm:items-center mb-6">
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto">
          <Button
            variant="outline"
            className="flex items-center text-sm px-3 py-2"
            onClick={() => setIsFilterVisible(!isFilterVisible)} // Toggle filter visibility
          >
            <Filter className="w-5 h-5 mr-2" />
            Filter By
          </Button>
          {isFilterVisible && ( // Conditionally render filters
            <>
              <Select
                value={filterConfederation}
                onValueChange={handleFilterConfederationChange}
              >
                <SelectTrigger className="w-full sm:w-44 text-sm">
                  <SelectValue placeholder="Confederation" />
                </SelectTrigger>
                <SelectContent>
                  {confederations.map((confederation) => (
                    <SelectItem key={confederation} value={confederation}>
                      {confederation}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                placeholder="Name"
                className="w-full sm:w-44 text-sm"
                value={filterName}
                onChange={handleFilterNameChange}
              />
              <Button
                variant="outline"
                className="text-red-500 flex items-center text-sm px-3 py-2"
                onClick={handleResetFilters}
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset Filter
              </Button>
            </>
          )}
        </div>
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-sm px-4 py-2 w-full sm:w-auto"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Participant
        </Button>
      </div>

      {/* Table for Larger Screens / Card Layout for Mobile */}
      <div className="bg-white rounded-lg shadow">
        {/* Table for sm and larger */}
        <div className="hidden sm:block overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-sm">ID</TableHead>
                <TableHead className="text-sm">Email</TableHead>
                <TableHead className="text-sm">Name</TableHead>
                <TableHead className="text-sm">Confederation</TableHead>
                <TableHead className="text-sm hidden md:table-cell">Phone</TableHead>
                <TableHead className="text-sm hidden lg:table-cell">Pay Date</TableHead>
                <TableHead className="text-sm hidden lg:table-cell">First Pay Date</TableHead>
                <TableHead className="text-sm">Status</TableHead>
                <TableHead className="text-sm">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredParticipants.map((participant, index) => (
                <TableRow key={index}>
                  <TableCell className="text-sm">{participant.id}</TableCell>
                  <TableCell className="text-sm">{participant.email}</TableCell>
                  <TableCell className="text-sm">{participant.name}</TableCell>
                  <TableCell className="text-sm">{participant.confederation}</TableCell>
                  <TableCell className="text-sm hidden md:table-cell">
                    {participant.phone}
                  </TableCell>
                  <TableCell className="text-sm hidden lg:table-cell">
                    {participant.payDate}
                  </TableCell>
                  <TableCell className="text-sm hidden lg:table-cell">
                    {participant.firstPayDate}
                  </TableCell>
                  <TableCell className="text-sm">
                    <Badge
                      variant={participant.status === "Approved" ? "default" : "secondary"}
                      className={
                        participant.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : participant.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-purple-100 text-purple-800"
                      }
                    >
                      {participant.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      {/* Conditionally render the Approve button */}
                      {participant.status !== "Approved" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openConfirmDialog("approve", participant.id)}
                        >
                          <Check className="w-4 h-4 text-green-500" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditParticipant(participant.id)}
                      >
                        <Pencil className="w-4 h-4 text-blue-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openConfirmDialog("delete", participant.id)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Card Layout for Mobile */}
        <div className="block sm:hidden divide-y">
          {filteredParticipants.map((participant, index) => (
            <div key={index} className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-sm">{participant.name}</span>
                <Badge
                  variant={participant.status === "Approved" ? "default" : "secondary"}
                  className={
                    participant.status === "Approved"
                      ? "bg-green-100 text-green-800"
                      : participant.status === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-purple-100 text-purple-800"
                  }
                >
                  {participant.status}
                </Badge>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  <strong>ID:</strong> {participant.id}
                </p>
                <p>
                  <strong>Email:</strong> {participant.email}
                </p>
                <p>
                  <strong>Confederation:</strong> {participant.confederation}
                </p>
                <p>
                  <strong>Phone:</strong> {participant.phone}
                </p>
                <p>
                  <strong>Pay Date:</strong> {participant.payDate}
                </p>
                <p>
                  <strong>First Pay Date:</strong> {participant.firstPayDate}
                </p>
              </div>
              <div className="flex space-x-2 mt-3">
                {/* Conditionally render the Approve button */}
                {participant.status !== "Approved" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openConfirmDialog("approve", participant.id)}
                  >
                    <Check className="w-5 h-5 text-green-500" />
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleEditParticipant(participant.id)}
                >
                  <Pencil className="w-5 h-5 text-blue-500" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => openConfirmDialog("delete", participant.id)}
                >
                  <Trash2 className="w-5 h-5 text-red-500" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-6 flex-wrap gap-2">
        <Button variant="outline" size="sm" className="text-sm px-3 py-2">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="bg-red-500 text-white text-sm px-3 py-2"
        >
          1
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-sm px-3 py-2 hidden sm:block"
        >
          2
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-sm px-3 py-2 hidden sm:block"
        >
          3
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-sm px-3 py-2 hidden sm:block"
        >
          4
        </Button>
        <Button variant="outline" size="sm" className="text-sm px-3 py-2">
          Next
          <ChevronRight className="w-5 h-5 ml-1" />
        </Button>
      </div>

      {/* Add Participant Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Participant</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAddParticipant} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input
                name="email"
                value={newParticipant.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input
                name="name"
                value={newParticipant.name}
                onChange={handleInputChange}
                placeholder="Enter name"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Confederation</label>
              <Select
                value={newParticipant.confederation}
                onValueChange={handleConfederationChange}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select confederation" />
                </SelectTrigger>
                <SelectContent>
                  {confederations.map((confederation) => (
                    <SelectItem key={confederation} value={confederation}>
                      {confederation}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <Input
                name="phone"
                value={newParticipant.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">Pay Date</label>
              <Input
                name="payDate"
                type="date"
                value={newParticipant.payDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium">First Pay Date</label>
              <Input
                name="firstPayDate"
                type="date"
                value={newParticipant.firstPayDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                Add Participant
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog open={isConfirmDialogOpen} onOpenChange={setIsConfirmDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {confirmAction === "approve"
                ? "Confirm Approval"
                : "Confirm Deletion"}
            </DialogTitle>
          </DialogHeader>
          <p>
            {confirmAction === "approve"
              ? "Are you sure you want to approve this participant?"
              : "Are you sure you want to delete this participant?"}
          </p>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsConfirmDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-red-500 text-white"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;