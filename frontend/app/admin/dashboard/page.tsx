"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Users, Globe, MapPin, Calendar } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const StatisticsPage = () => {
  const [timeFilter, setTimeFilter] = useState("all");

  // Sample data for charts
  const participantsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Participants",
        data: [500, 700, 800, 1000, 1200, 1500],
        backgroundColor: "rgba(59, 130, 246, 0.5)", // Blue
      },
    ],
  };

  const confederationsData = {
    labels: ["EU", "AU", "AS", "SA", "NA"],
    datasets: [
      {
        label: "Confederations",
        data: [20, 15, 25, 10, 30],
        backgroundColor: [
          "rgba(59, 130, 246, 0.5)",
          "rgba(34, 197, 94, 0.5)",
          "rgba(234, 179, 8, 0.5)",
          "rgba(251, 113, 133, 0.5)",
          "rgba(168, 85, 247, 0.5)",
        ],
      },
    ],
  };

  const eventsData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4"],
    datasets: [
      {
        label: "Events",
        data: [15, 20, 18, 22],
        backgroundColor: "rgba(34, 197, 94, 0.5)", // Green
      },
    ],
  };

  const roomsData = {
    labels: ["Conference", "Meeting", "Workshop", "Other"],
    datasets: [
      {
        label: "Room Types",
        data: [10, 15, 8, 5],
        backgroundColor: [
          "rgba(234, 179, 8, 0.5)",
          "rgba(251, 113, 133, 0.5)",
          "rgba(168, 85, 247, 0.5)",
          "rgba(34, 197, 94, 0.5)",
        ],
      },
    ],
  };

  // Function to export data as CSV
  const exportData = () => {
    const csvData = [
      ["Category", "Label", "Value"],
      ...participantsData.labels.map((label, index) => [
        "Participants",
        label,
        participantsData.datasets[0].data[index],
      ]),
      ...confederationsData.labels.map((label, index) => [
        "Confederations",
        label,
        confederationsData.datasets[0].data[index],
      ]),
      ...eventsData.labels.map((label, index) => [
        "Events",
        label,
        eventsData.datasets[0].data[index],
      ]),
      ...roomsData.labels.map((label, index) => [
        "Rooms",
        label,
        roomsData.datasets[0].data[index],
      ]),
    ];

    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((row) => row.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "statistics_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 bg-pink-50 min-h-screen">
      {/* Filter Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="bg-red-600 hover:bg-red-700" onClick={exportData}>
          Export Data
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Participants Card */}
        <Card className="rounded-lg shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <CardTitle className="text-sm text-gray-500">Participants</CardTitle>
                <p className="text-2xl font-bold">5000</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Bar data={participantsData} options={{ responsive: true }} />
          </CardContent>
        </Card>

        {/* Confederations Card */}
        <Card className="rounded-lg shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-green-100 rounded-full">
                <Globe className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <CardTitle className="text-sm text-gray-500">Confederations</CardTitle>
                <p className="text-2xl font-bold">100</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Pie data={confederationsData} options={{ responsive: true }} />
          </CardContent>
        </Card>

        {/* Events Card */}
        <Card className="rounded-lg shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Calendar className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <CardTitle className="text-sm text-gray-500">Events</CardTitle>
                <p className="text-2xl font-bold">75</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Bar data={eventsData} options={{ responsive: true }} />
          </CardContent>
        </Card>

        {/* Rooms Card */}
        <Card className="rounded-lg shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-yellow-100 rounded-full">
                <MapPin className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <CardTitle className="text-sm text-gray-500">Rooms</CardTitle>
                <p className="text-2xl font-bold">38</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Pie data={roomsData} options={{ responsive: true }} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StatisticsPage;