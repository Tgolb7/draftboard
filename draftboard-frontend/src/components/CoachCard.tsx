
import { Star, MapPin, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Coach {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  location: string;
  image: string;
  hourlyRate: number;
  description: string;
  badges: string[];
}

interface CoachCardProps {
  coach: Coach;
}

const CoachCard = ({ coach }: CoachCardProps) => {
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

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:scale-[1.02] bg-white">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-16 h-16 border-2 border-blue-100">
              <AvatarImage src={coach.image} alt={coach.name} />
              <AvatarFallback className="bg-blue-500 text-white font-semibold">
                {coach.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                {coach.name}
              </h3>
              <p className="text-blue-600 font-medium">{coach.specialty}</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-1 mt-2">
          {renderStars(coach.rating)}
          <span className="font-semibold text-gray-900 ml-2">{coach.rating}</span>
          <span className="text-gray-500">({coach.reviewCount} reviews)</span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{coach.description}</p>
        
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          {coach.location}
        </div>

        <div className="flex items-center text-gray-900 text-sm font-semibold mb-4">
          <DollarSign className="w-4 h-4 mr-1" />
          ${coach.hourlyRate}/hour
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {coach.badges.slice(0, 2).map((badge, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {badge}
            </Badge>
          ))}
          {coach.badges.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{coach.badges.length - 2} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
            View Profile
          </Button>
          <Button variant="outline" className="flex-1">
            Message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoachCard;
