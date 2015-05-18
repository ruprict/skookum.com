/** @flow */

require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';

var {PropTypes} = React;

var cn = s => `CareersContent-${s}`;
var VALUES = [
  'Think big',
  'Choose to be happy',
  'Simplify & go',
  'Deliver amazing experiences',
  'Embrace change',
  'Teach & challenge',
  'Own it',
  'Be a team of A-players',
  'Thirst for growth',
];

var BENEFITS = [
  '5 weeks paid vacation starting on day one',
  'Access to senior leadership',
  'Stocked kitchen including healthy snacks and delicious beer',
  'Awesome medical plan plus the ability to earn money from your deductible',
  'Gym membership reimbursement',
  'Professional masseuse occassionally in-office',
  'Regular company outings',
  'Free lunch every Friday',
  'Professional growth opportunities including internal working groups, our library, and 5 conference days annually',
  'Matching 401k',
  'Work/life balance',
  'And other things we’d rather surprise you with',
];

class CareersContent extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="CareersContent">
        <div className={cn('value')}>In order to create real value you must put people at the center of everything</div>
        <div className={cn('a')}>We never do the same thing twice. We build business critical applications. We tackle problems we don’t always know how to solve. Every day, every project is a new challenge to conquer. You will have the opportunity to push yourself and grow from offices in beautiful Charlotte, NC and Devnver, CO. We believe in work/life balance and offer a ton of competitive perks.</div>
        <div className={cn('values')}>
          <div className={cn('values-title')}>
            Our Values
            <hr className={cn('values-hr')} />
          </div>
          {VALUES.map((n, i) => (
            <div className={cn('values-value')} key={i}>
              <div className={cn('values-number')}>{i + 1}</div>
              <div className={cn('values-text')}>{n}</div>
            </div>
          ))}
        </div>
        <div className={cn('benefits')}>
          <div className={cn('benefits-title')}>Benefits</div>
          <ul className={cn('benefits-list')}>
            {BENEFITS.map((n, i) => (
              <li key={i} className={cn('benefits-item')}>{n}</li>
            ))}
          </ul>
        </div>
        <div className={cn('people')}>
          <div className={cn('people-title')}>
            Our People
            <hr className={cn('people-hr')} />
          </div>
          <ul className={cn('people-list')}>
            {this.props.people.map((n, i) => (
              <li key={i} className={cn('person')}>
                <strong className={cn('person-name')}>{n.displayName}</strong>
                <span className={cn('person-title')}>{n.jobTitle}</span>
                <img className={cn('person-image')} src={n.photoUrl} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

CareersContent.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      jobTitle: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
    })
  ),
};

CareersContent.displayName = 'CareersContent';

export default Resolver.createContainer(CareersContent, {
  resolve: {
    people() {
      var FIELDS = [
        'displayName',
        'jobTitle',
        'photoUrl',
      ];

      var port = process.env.PORT || 4444;
      return fetch(
        'http://localhost:' + port + '/api/team?fields=${FIELDS.toString()}'
      ).then(n => n.json());
    }
  }
});
