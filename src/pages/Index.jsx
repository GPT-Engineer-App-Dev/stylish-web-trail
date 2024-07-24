import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Smile } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Your Logo</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Features</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Website</h2>
          <p className="text-xl mb-8">Discover amazing features and boost your productivity</p>
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 mb-2 text-blue-500" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>Experience blazing fast performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our optimized platform ensures quick load times and smooth interactions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 mb-2 text-green-500" />
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription>Your data is safe with us</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We use industry-standard encryption and security measures to protect your information.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Smile className="h-8 w-8 mb-2 text-yellow-500" />
                <CardTitle>User-Friendly</CardTitle>
                <CardDescription>Intuitive design for everyone</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our interface is designed to be easy to use, ensuring a great experience for all users.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;