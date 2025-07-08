
import { Link, useLocation } from "react-router-dom";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { Home, Users, UserCheck } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">CollegeSportsRater</span>
          </Link>

          {/* Navigation Menu */}
          <Menubar className="border-0 bg-transparent">
            {/* Home */}
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Link
                  to="/"
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/")
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </Link>
              </MenubarTrigger>
            </MenubarMenu>

            {/* Players */}
            <MenubarMenu>
              <MenubarTrigger
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/player-board")
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Players</span>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem asChild>
                  <Link to="/player-board">Player Portal</Link>
                </MenubarItem>
                <MenubarItem asChild>
                  <Link to="/athlete-survey">Find My School</Link>
                </MenubarItem>
                <MenubarItem asChild>
                  <Link to="/survey-results">Survey Results</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {/* Coaches */}
            <MenubarMenu>
              <MenubarTrigger
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/job-board")
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Coaches</span>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem asChild>
                  <Link to="/job-board">Team Openings</Link>
                </MenubarItem>
                <MenubarItem asChild>
                  <Link to="/message-board">Message Board</Link>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            {/* Browse */}
            <MenubarMenu>
              <MenubarTrigger asChild>
                <Link
                  to="/browse"
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/browse")
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:text-blue-700 hover:bg-gray-100"
                  }`}
                >
                  <span>Browse</span>
                </Link>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>

          {/* Login/Signup Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
