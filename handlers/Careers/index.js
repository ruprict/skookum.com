import React from 'react';
import Hero from 'Hero';
import CareersContent from 'CareersContent';

class Careers extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Careers">
        <Hero title="Careers" subtitle="We never do the same thing twice" />
        <CareersContent />
      </div>
    );
  }
}

export default Careers;

