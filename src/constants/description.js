export const DESCRIBE_POLLUTION = [{
  title: 'Good',
  backgroundColor: 'fillGreen',
  color: 'textColorBlack',
  description: {
    ozone: 'None',
    carbon: 'None',
    particle: 'None',
    sulfur: 'None'
  }
}, {
  title: 'Moderate',
  backgroundColor: 'fillYellow',
  color: 'textColorBlack',
  description: {
    ozone: 'Unusually sensitive people should consider reducing prolonged or heavy outdoor exertion.',
    carbon: 'None',
    particle: `Unusually sensitive people should
    consider reducing prolonged or heavy
    exertion. `,
    sulfur: 'None'
  }
}, {
  title: 'Unhealthy for Sensitive Groups',
  backgroundColor: 'fillOrange',
  color: 'textColorBlack',
  description: {
    ozone: `
    The following groups should reduce prolonged or heavy outdoor exertion: 
    - People with lung disease, such as asthma
    - Children and older adults
    - People who are active outdoors`,
    carbon: `People with heart disease, such
    as angina, should reduce heavy
    exertion and avoid sources of carbon
    monoxide, such as heavy traffic.`,
    particle: `The following groups should reduce
    prolonged or heavy exertion:
    - People with heart or lung disease
    - Children and older adults`,
    sulfur: `People with asthma should consider
    reducing exertion outdoors.`
  }
}, {
  title: 'Unhealthy',
  backgroundColor: 'fillRed',
  color: 'textColorWhite',
  description: {
    ozone: `The following groups should avoid
    prolonged or heavy outdoor exertion:
    - People with lung disease, such as asthma
    - Children and older adults
    - People who are active outdoors
    Everyone else should limit prolonged
    outdoor exertion.`,
    carbon: `People with heart disease, such as
    angina, should reduce moderate
    exertion and avoid sources of carbon
    monoxide, such as heavy traffic.`,
    particle: `The following groups should avoid
    prolonged or heavy exertion:
    - People with heart or lung disease
    - Children and older adults
    Everyone else should reduce
    prolonged or heavy exertion.`,
    sulfur: `Children, asthmatics, and people
    with heart or lung disease should
    reduce exertion outdoors.`
  }
}, {
  title: 'Very Unhealthy',
  backgroundColor: 'fillPurpule',
  color: 'textColorWhite',
  description: {
    ozone: `The following groups should avoid all
    outdoor exertion:
    - People with lung disease, such as asthma
    - Children and older adults
    - People who are active outdoors
    Everyone else should limit outdoor
    exertion.`,
    carbon: `People with heart disease, such as
    angina, should avoid exertion and
    sources of carbon monoxide, such as
    heavy traffic.`,
    particle: `The following groups should avoid all
    physical activity outdoors:
    - People with heart or lung disease
    - Children and older adults
    Everyone else should avoid prolonged
    or heavy exertion.`,
    sulfur: `Children, asthmatics, and people
    with heart or lung disease should
    avoid outdoor exertion. Everyone
    else should reduce exertion
    outdoors.`
  }
}, {
  title: 'Hazardous',
  backgroundColor: 'fillMaroon',
  color: 'textColorWhite',
  description: {
    ozone: 'AQI values over 300 trigger health warnings of emergency conditions. The entire population is even more likely to be affected by serious health effects.',
    carbon: 'AQI values over 300 trigger health warnings of emergency conditions. The entire population is even more likely to be affected by serious health effects.',
    particle: 'AQI values over 300 trigger health warnings of emergency conditions. The entire population is even more likely to be affected by serious health effects.',
    sulfur: 'AQI values over 300 trigger health warnings of emergency conditions. The entire population is even more likely to be affected by serious health effects.'
  }
}];
