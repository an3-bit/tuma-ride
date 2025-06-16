
import React from 'react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface AppDownloadButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const AppDownloadButton = ({ children, className, size, variant }: AppDownloadButtonProps) => {
  const handleDownloadClick = () => {
    toast({
      title: "Thank you for your interest!",
      description: "We will notify you soon when TumaRide is ready for download.",
    });
  };

  return (
    <Button 
      onClick={handleDownloadClick}
      className={className}
      size={size}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default AppDownloadButton;
