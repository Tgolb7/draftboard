
import { useState } from "react";
import { Search, Users, Award, TrendingUp, Zap, Volleyball, MessageSquare, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CollegeCard from "@/components/CollegeCard";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const featuredColleges = [
    {
      id: 1,
      name: "University of California, Los Angeles",
      location: "Los Angeles, CA",
      overallRating: 4.7,
      totalReviews: 1247,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=400&fit=crop",
      division: "Division I",
      averageSAT: 1405,
      averageGPA: 4.0,
      totalTuition: 43022,
      totalPopulation: 47518,
      sportsPrograms: [
        { name: "Basketball", rating: 4.9, reviewCount: 156 },
        { name: "Football", rating: 4.6, reviewCount: 203 },
        { name: "Swimming", rating: 4.8, reviewCount: 89 },
        { name: "Tennis", rating: 4.5, reviewCount: 67 },
        { name: "Soccer", rating: 4.4, reviewCount: 123 }
      ],
      highlights: ["Elite Training", "Top Facilities", "Strong Alumni Network", "Academic Excellence"]
    },
    {
      id: 2,
      name: "Stanford University",
      location: "Stanford, CA",
      overallRating: 4.8,
      totalReviews: 892,
      image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=400&h=400&fit=crop",
      division: "Division I",
      averageSAT: 1520,
      averageGPA: 4.2,
      totalTuition: 56169,
      totalPopulation: 17381,
      sportsPrograms: [
        { name: "Swimming", rating: 4.9, reviewCount: 134 },
        { name: "Tennis", rating: 4.8, reviewCount: 98 },
        { name: "Football", rating: 4.7, reviewCount: 187 },
        { name: "Basketball", rating: 4.6, reviewCount: 145 },
        { name: "Track & Field", rating: 4.7, reviewCount: 76 }
      ],
      highlights: ["Academic Prestige", "Olympic Training", "Research Opportunities", "Tech Industry Connections"]
    },
    {
      id: 3,
      name: "University of Texas at Austin",
      location: "Austin, TX",
      overallRating: 4.5,
      totalReviews: 1567,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      division: "Division I",
      averageSAT: 1350,
      averageGPA: 3.8,
      totalTuition: 40032,
      totalPopulation: 51832,
      sportsPrograms: [
        { name: "Football", rating: 4.8, reviewCount: 298 },
        { name: "Basketball", rating: 4.4, reviewCount: 189 },
        { name: "Baseball", rating: 4.6, reviewCount: 167 },
        { name: "Swimming", rating: 4.3, reviewCount: 89 },
        { name: "Track & Field", rating: 4.5, reviewCount: 134 }
      ],
      highlights: ["Big 12 Conference", "State-of-Art Facilities", "Strong Fan Support", "Championship History"]
    },
    {
      id: 4,
      name: "Duke University",
      location: "Durham, NC",
      overallRating: 4.6,
      totalReviews: 723,
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=400&fit=crop",
      division: "Division I",
      averageSAT: 1490,
      averageGPA: 4.1,
      totalTuition: 58031,
      totalPopulation: 16606,
      sportsPrograms: [
        { name: "Basketball", rating: 4.9, reviewCount: 201 },
        { name: "Lacrosse", rating: 4.7, reviewCount: 78 },
        { name: "Soccer", rating: 4.5, reviewCount: 98 },
        { name: "Tennis", rating: 4.6, reviewCount: 67 },
        { name: "Golf", rating: 4.4, reviewCount: 45 }
      ],
      highlights: ["Basketball Excellence", "Academic Rigor", "Small Class Sizes", "Elite Coaching Staff"]
    }
  ];

  const categories = [
    { id: "all", name: "All Sports", icon: Users },
    { id: "football", name: "Football", icon: Zap },
    { id: "basketball", name: "Basketball", icon: Award },
    { id: "volleyball", name: "Volleyball", icon: Volleyball },
    { id: "swimming", name: "Swimming", icon: TrendingUp }
  ];

  const filteredColleges = featuredColleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesCategory = true;
    if (selectedCategory !== "all") {
      matchesCategory = college.sportsPrograms.some(sport => 
        sport.name.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <HeroSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <StatsSection />

      {/* Quick Access Section */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Connect & Discover</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/message-board">
              <Button size="lg" className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Message Board
              </Button>
            </Link>
            <Link to="/job-board">
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Team Roster Spots
              </Button>
            </Link>
            <Link to="/player-board">
              <Button size="lg" variant="secondary" className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Player Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Find Your Perfect College Sports Program</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No colleges found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your College Sports Experience</h2>
          <p className="text-xl mb-8 opacity-90">
            Help future student-athletes by rating your college sports program and sharing your honest experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Rate Your College
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Browse All Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
