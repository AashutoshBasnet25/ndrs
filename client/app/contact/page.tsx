"use client"

import { Metadata } from "next"
import dynamic from "next/dynamic"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

// Dynamically import the map component with no SSR
const ContactMap = dynamic(() => import("@/components/ContactMap"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-muted">
      Loading map...
    </div>
  )
})

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="Message subject" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Your message" 
                  className="min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p>Singha Durbar</p>
                  <p>Kathmandu, Nepal</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p>+977-1-4200000</p>
                  <p>Emergency: 112</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>info@nepaldrs.gov.np</p>
                  <p>support@nepaldrs.gov.np</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Hours</h3>
                  <p>24/7 Emergency Response</p>
                  <p>Office: Sun-Fri 9:00-17:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="h-[400px] rounded-lg overflow-hidden border">
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  )
}