
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FinalProject = () => {
  return (
    <section id="final-project" className="py-16 md:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Final Project</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            User testing and prototyping for improved educational technology solutions
          </p>
        </motion.div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">User Testing & Prototype Development</CardTitle>
            <CardDescription>
              Research, testing, and implementation of educational technology solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="col-span-1 project-card">
                <CardHeader>
                  <CardTitle className="text-lg">User Testing Methodology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    I conducted comprehensive user tests with 5 medical students preparing for their MCAT exams. The testing 
                    focused on how they interact with existing flashcard applications and their specific pain points.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-medium">Testing Process:</h4>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Think-aloud protocol during app usage</li>
                      <li>Semi-structured interviews</li>
                      <li>Task completion scenarios</li>
                      <li>Observation of study habits</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 project-card">
                <CardHeader>
                  <CardTitle className="text-lg">Initial Prototype & Sketches</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Based on initial research, I created low-fidelity wireframes focusing on the analytics dashboard. Early 
                    sketches emphasized data visualization and actionable insights rather than complex statistics.
                  </p>
                  <p className="text-muted-foreground">
                    The prototype evolved through several iterations, with the core innovation being the AI-powered insights 
                    that translate raw study data into concrete recommendations for users.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 project-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key User Test Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">→</span>
                      <p className="text-muted-foreground">Users struggled to extract actionable insights from raw statistics</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">→</span>
                      <p className="text-muted-foreground">Study sessions lacked focus on weak areas</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">→</span>
                      <p className="text-muted-foreground">Difficulty prioritizing which cards needed more attention</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">→</span>
                      <p className="text-muted-foreground">Overwhelmed by large decks without clear subdivision</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary font-bold mr-2">→</span>
                      <p className="text-muted-foreground">Wanted direct paths to challenging content</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Implementation of User Test Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted p-4">
                    <h4 className="font-medium mb-2">Insight: Difficulty extracting meaningful data</h4>
                    <p className="text-sm text-muted-foreground">Users reported feeling overwhelmed by Anki's statistics, unable to determine what to focus on.</p>
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-sm font-medium">Implementation:</p>
                      <p className="text-sm text-muted-foreground">Created AI-powered analytics that automatically identify problem areas and provide clear, actionable recommendations.</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-muted p-4">
                    <h4 className="font-medium mb-2">Insight: Need for targeted study sessions</h4>
                    <p className="text-sm text-muted-foreground">Users wanted to focus on specific weak areas but found it difficult to isolate those cards.</p>
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-sm font-medium">Implementation:</p>
                      <p className="text-sm text-muted-foreground">Added one-click access to create focused study sessions for problematic topics, with direct "Study/Review" buttons for targeted review.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted p-4">
                    <h4 className="font-medium mb-2">Insight: Visual representation of progress</h4>
                    <p className="text-sm text-muted-foreground">Users expressed desire for clearer visual indicators of progress and problem areas.</p>
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-sm font-medium">Implementation:</p>
                      <p className="text-sm text-muted-foreground">Designed comprehensive dashboard with retention rates by subject area and clear visualization of performance metrics.</p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-muted p-4">
                    <h4 className="font-medium mb-2">Insight: Need for specific recommendations</h4>
                    <p className="text-sm text-muted-foreground">Users wanted specific advice on how to improve, not just data on what was wrong.</p>
                    <div className="mt-3 pt-3 border-t border-border">
                      <p className="text-sm font-medium">Implementation:</p>
                      <p className="text-sm text-muted-foreground">Added "Actionable Fixes" section with specific techniques tailored to each user's learning patterns and problem areas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Final Prototype & Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="project-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Final Prototype</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      The final prototype incorporates all user feedback with a focus on the analytics dashboard that provides 
                      clear, actionable insights derived from study data. The interface prioritizes:
                    </p>
                    <ul className="list-disc pl-5 space-y-1 mb-5">
                      <li>Clear visualization of performance metrics</li>
                      <li>Subject-specific retention rates</li>
                      <li>Direct links to problematic topic sets</li>
                      <li>Specific recommendations for improving study methods</li>
                    </ul>
                    <div className="flex justify-center mt-4">
                      <a 
                        href="https://www.figma.com/proto/21h5fGXnvhJBbGaxlf3EDX/Figma-0---Motivation-19?node-id=0-1&t=ACgJsKxDOI4BqN0t-1" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors inline-flex items-center"
                      >
                        View Final Prototype
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="project-card">
                  <CardHeader>
                    <CardTitle className="text-lg">User Test Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Comprehensive user testing was conducted with medical students preparing for their MCAT exams. The focus was on 
                      understanding their current study methods, pain points, and how they interacted with the prototype.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      User feedback was overwhelmingly positive regarding the AI-powered analytics, with test participants expressing 
                      particular enthusiasm for the clear actionable insights rather than raw statistics.
                    </p>
                    <div className="flex justify-center mt-4">
                      <a 
                        href="#"
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors inline-flex items-center"
                      >
                        View User Test Videos
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalProject;
