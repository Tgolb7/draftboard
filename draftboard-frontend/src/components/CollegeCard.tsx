
import { Star, MapPin, Users, Trophy, BookOpen, GraduationCap, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SportProgram {
  name: string;
  rating: number;
  reviewCount: number;
}

interface College {
  id: number;
  name: string;
  location: string;
  overallRating: number;
  totalReviews: number;
  image: string;
  division: string;
  averageSAT: number;
  averageGPA: number;
  totalTuition: number;
  totalPopulation: number;
  sportsPrograms: SportProgram[];
  highlights: string[];
}

interface CollegeCardProps {
  college: College;
}

const CollegeCard = ({ college }: CollegeCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? "fill-yellow-400 text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  const topSports = college.sportsPrograms.slice(0, 3);

  const formatTuition = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPopulation = (population: number) => {
    return new Intl.NumberFormat('en-US').format(population);
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:scale-[1.02] bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-blue-100">
              <img 
                src={college.image} 
                alt={college.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                {college.name}
              </h3>
              <div className="flex items-center text-gray-500 text-sm">
                <MapPin className="w-3 h-3 mr-1" />
                {college.location}
              </div>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {college.division}
          </Badge>
        </div>

        <div className="flex items-center space-x-1 mt-2">
          {renderStars(college.overallRating)}
          <span className="font-semibold text-gray-900 ml-2">{college.overallRating}</span>
          <span className="text-gray-500">({college.totalReviews} reviews)</span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Academic Stats */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center">
            <GraduationCap className="w-4 h-4 mr-1" />
            Academic & Campus Stats
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-600">Avg SAT:</span>
              <span className="font-medium">{college.averageSAT}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Avg GPA:</span>
              <span className="font-medium">{college.averageGPA}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tuition:</span>
              <span className="font-medium">{formatTuition(college.totalTuition)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Students:</span>
              <span className="font-medium">{formatPopulation(college.totalPopulation)}</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center">
            <Trophy className="w-4 h-4 mr-1" />
            Top Rated Programs
          </h4>
          <div className="space-y-1">
            {topSports.map((sport, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{sport.name}</span>
                <div className="flex items-center">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                  <span className="font-medium">{sport.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {college.highlights.slice(0, 2).map((highlight, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {highlight}
            </Badge>
          ))}
          {college.highlights.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{college.highlights.length - 2} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            View All Sports
          </Button>
          <Button variant="outline" className="flex-1">
            <BookOpen className="w-4 h-4 mr-1" />
            Reviews
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollegeCard;
