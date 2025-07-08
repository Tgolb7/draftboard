
import { Search, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const HeroSection = ({ searchQuery, setSearchQuery }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%234f46e5%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            <Star className="w-4 h-4 mr-1 fill-current" />
            Trusted by 50,000+ student athletes
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Rate Your College
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            {" "}Sports Programs{" "}
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Discover and rate college sports programs. Compare overall ratings across all sports, 
          read detailed reviews, and help future student-athletes make informed decisions.
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for colleges, sports programs, or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-32 py-6 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500 shadow-lg"
            />
            <Button 
              size="lg" 
              className="absolute right-2 rounded-full px-8"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">1,200+</h3>
            <p className="text-gray-600">College Programs</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">4.2</h3>
            <p className="text-gray-600">Average Rating</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-white/80 rounded-2xl shadow-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">25,000+</h3>
            <p className="text-gray-600">Student Reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
