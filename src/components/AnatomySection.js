import React from 'react';
import { Heart } from 'lucide-react';

const AnatomySection = () => (
  <div className="anatomy-section">
    <div className="anatomy-container">
      <div className="anatomy-image">
        <img src="/human-body-frontal.png" alt="Human Body" className="anatomy-image" />
        <div className="health-indicator healthy-heart">
          <Heart size={16} />
          <span>Healthy Heart</span>
        </div>
        <div className="health-indicator healthy-log">
          <span>Healthy Log</span>
        </div>
      </div>
    </div>
  </div>
);

export default AnatomySection;