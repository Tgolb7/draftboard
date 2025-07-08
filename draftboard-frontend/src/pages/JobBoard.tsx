import { useState } from "react";
import { MapPin, Clock, Users, Plus, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

interface RosterSpot {
  id: number;
  coach: string;
  school: string;
  location: string;
  sport: string;
  position: string;
  division: "Division I" | "Division II" | "Division III" | "NAIA" | "JUCO";
  eligibilityRequired: string;
  description: string;
  requirements: string[];
  postedDate: string;
  deadline: string;
}

const JobBoard = () => {
  const [spots] = useState<RosterSpot[]>([
    {
      id: 1,
      coach: "Coach Martinez",
      school: "State University",
      location: "Austin, TX",
      sport: "Baseball",
      position: "Third Baseman",
      division: "Division I",
      eligibilityRequired: "3+ years",
      description: "Looking for a skilled third baseman to join our Division I program. Must have strong defensive skills and batting average above .300. Team competes in highly competitive conference.",
      requirements: ["3+ years eligibility remaining", "Batting average .300+", "Strong defensive skills", "Team player attitude"],
      postedDate: "2 days ago",
      deadline: "March 20, 2025"
    },
    {
      id: 2,
      coach: "Coach Johnson",
      school: "Metro College",
      location: "Denver, CO",
      sport: "Basketball",
      position: "Point Guard",
      division: "Division II",
      eligibilityRequired: "2+ years",
      description: "Seeking a point guard who can lead our offense and has excellent court vision. Must be able to handle pressure and make smart decisions.",
      requirements: ["2+ years eligibility", "Strong leadership skills", "Good assist-to-turnover ratio", "Academic standing 3.0+"],
      postedDate: "5 days ago",
      deadline: "February 28, 2025"
    },
    {
      id: 3,
      coach: "Coach Williams",
      school: "Riverside Community College",
      location: "Riverside, CA",
      sport: "Soccer",
      position: "Goalkeeper",
      division: "JUCO",
      eligibilityRequired: "Any",
      description: "Looking for a goalkeeper to anchor our defense. Great opportunity for development and potential transfer to 4-year programs.",
      requirements: ["Any eligibility level", "Previous organized soccer experience", "Dedication to training", "Coachable attitude"],
      postedDate: "1 week ago",
      deadline: "March 15, 2025"
    }
  ]);

  const [showPostForm, setShowPostForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Team Roster Spots</h1>
              <p className="text-xl opacity-90">Coaches posting available positions on their teams</p>
            </div>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setShowPostForm(!showPostForm)}
            >
              <Plus className="w-4 h-4 mr-2" />
              Post Roster Spot
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Post Roster Spot Form */}
        {showPostForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Post Available Roster Spot</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Coach Name" />
                <Input placeholder="School/Team" />
                <Input placeholder="Location" />
                <Input placeholder="Sport" />
                <Input placeholder="Position Needed" />
                <Input placeholder="Division (D1, D2, D3, NAIA, JUCO)" />
              </div>
              <Input placeholder="Eligibility Required (e.g., 2+ years)" />
              <Textarea placeholder="Position description and team info..." className="min-h-[100px]" />
              <Textarea placeholder="Requirements (one per line)..." className="min-h-[80px]" />
              <Input placeholder="Application Deadline" />
              <div className="flex gap-2">
                <Button>Post Roster Spot</Button>
                <Button variant="outline" onClick={() => setShowPostForm(false)}>Cancel</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Roster Spots List */}
        <div className="space-y-6">
          {spots.map((spot) => (
            <Card key={spot.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{spot.position} - {spot.sport}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium">{spot.school}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {spot.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {spot.postedDate}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="mb-2">{spot.division}</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Award className="w-3 h-3" />
                      {spot.eligibilityRequired} eligibility
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Badge variant="default">{spot.position}</Badge>
                    <Badge variant="outline">Deadline: {spot.deadline}</Badge>
                  </div>
                  
                  <p className="text-gray-700">{spot.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {spot.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button>Contact Coach</Button>
                    <Button variant="outline">
                      <Users className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobBoard;
