import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, ExternalLink, Calendar, Award } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

function CertificateModal({ cert, onClose }) {
    if (!cert) return null;
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden rounded-xl border border-gray-700">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {cert.title}
            </DialogTitle>
          </div>
        </DialogHeader>
        <ScrollArea className="p-6 max-h-[70vh]">
          <div className="flex justify-center mb-6">
            <div className="relative w-40 h-40 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center text-sm text-gray-300">
              <Award className="w-4 h-4 mr-2" />
              <span>{cert.issuer}</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{cert.date}</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{cert.description}</p>
          </div>
        </ScrollArea>
        <DialogFooter className="p-6 pt-0">
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            <a
              href={cert.verificationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center"
            >
              Verify Certificate
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CertificateModal;

