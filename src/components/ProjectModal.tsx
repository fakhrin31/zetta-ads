import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Project {
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  overview: string;
  objective: string;
  gallery: string[];
  medium: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  currentProjectIndex: number;
  onProjectChange: (index: number) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  projects,
  currentProjectIndex,
  onProjectChange,
}) => {
  const currentProject = projects[currentProjectIndex];
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const handlePrevProject = () => {
    const prevIndex = currentProjectIndex > 0 ? currentProjectIndex - 1 : projects.length - 1;
    onProjectChange(prevIndex);
    setCurrentGalleryIndex(0);
  };

  const handleNextProject = () => {
    const nextIndex = currentProjectIndex < projects.length - 1 ? currentProjectIndex + 1 : 0;
    onProjectChange(nextIndex);
    setCurrentGalleryIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentGalleryIndex(
      currentGalleryIndex > 0 ? currentGalleryIndex - 1 : currentProject.gallery.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentGalleryIndex(
      currentGalleryIndex < currentProject.gallery.length - 1 ? currentGalleryIndex + 1 : 0
    );
  };

  if (!currentProject) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {currentProject.title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Project Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {currentProject.overview}
              </p>
              <p className="text-sm text-primary font-medium mt-2">
                {currentProject.medium}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                {currentProject.objective}
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevProject}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  {currentProjectIndex + 1} / {projects.length}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleNextProject}
                  className="flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Gallery */}
          <div className="space-y-4">
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img
                  src={currentProject.gallery[currentGalleryIndex]}
                  alt={`${currentProject.title} Screenshot ${currentGalleryIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {currentProject.gallery.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    onClick={handlePrevImage}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                    onClick={handleNextImage}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded px-2 py-1 text-sm text-foreground">
                    {currentGalleryIndex + 1} / {currentProject.gallery.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {currentProject.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {currentProject.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGalleryIndex(index)}
                    className={`aspect-video rounded overflow-hidden border-2 transition-colors ${
                      index === currentGalleryIndex 
                        ? 'border-primary' 
                        : 'border-transparent hover:border-muted-foreground'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;