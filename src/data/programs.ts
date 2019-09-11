import { Program } from './types';

export const programs: Program[] = [
  {
    category: 'Cardio',
    description:
      'The smarter more effective way to conquer that first mile is to slowly build up the stamina and strength necessary by alternating walking with running. This training program outlines a way to do tis that should have you running a mile nonstop after 4 weeks.',
    duration: '4 weeks',
    level: 'beginner',
    imgSrc: require('../assets/images/running.jpeg'),
    similar: ['beginner-run-2-mile', 'beginner-run-faster-mile'],
    slug: 'beginner-run-1-mile',
    outline: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      sections: [
        {
          description:
            'Run 1/16 mile, walk 3/16 mile; repeat 4 times \
          (Track equivalent: Run 1/4 of a lap, walk 3/4 of a lap; repeat 4 times)',
          label: 'Day 1',
          parent: 'Week 1'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 2',
          parent: 'Week 1'
        },
        {
          description:
            'Run 1/16 mile, walk 3/16 mile; repeat 4 times \
          (Track equivalent: Run 1/4 of a lap, walk 3/4 of a lap; repeat 4 times)',
          label: 'Day 3',
          parent: 'Week 1'
        },
        {
          description: 'Rest',
          label: 'Day 4',
          parent: 'Week 1'
        },
        {
          description:
            'Run 1/16 mile, walk 3/16 mile; repeat 4 times \
          (Track equivalent: Run 1/4 of a lap, walk 3/4 of a lap; repeat 4 times)',
          label: 'Day 5',
          parent: 'Week 1'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 6',
          parent: 'Week 1'
        },
        {
          description: 'Rest',
          label: 'Day 7',
          parent: 'Week 1'
        },
        {
          description:
            'Run 1/8 mile, walk 1/8 mile; repeat 4 times \
          (Track equivalent: Run 1/2 a lap, walk 1/2 a lap; repeat 4 times)',
          label: 'Day 1',
          parent: 'Week 2'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 2',
          parent: 'Week 2'
        },
        {
          description:
            'Run 1/8 mile, walk 1/8 mile; repeat 4 times \
          (Track equivalent: Run 1/2 a lap, walk 1/2 a lap; repeat 4 times)',
          label: 'Day 3',
          parent: 'Week 2'
        },
        {
          description: 'Rest',
          label: 'Day 4',
          parent: 'Week 2'
        },
        {
          description:
            'Run 1/8 mile, walk 1/8 mile; repeat 4 times \
          (Track equivalent: Run 1/2 a lap, walk 1/2 a lap; repeat 4 times)',
          label: 'Day 5',
          parent: 'Week 2'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 6',
          parent: 'Week 2'
        },
        {
          description: 'Rest',
          label: 'Day 7',
          parent: 'Week 2'
        },
        {
          description:
            'Run 3/16 mile, walk 1/16 mile; repeat 4 times \
          (Track equivalent: Run 3/4 of a lap, walk 1/4 of a lap; repeat 4 times)',
          label: 'Day 1',
          parent: 'Week 3'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 2',
          parent: 'Week 3'
        },
        {
          description:
            'Run 3/16 mile, walk 1/16 mile; repeat 4 times \
          (Track equivalent: Run 3/4 of a lap, walk 1/4 of a lap; repeat 4 times)',
          label: 'Day 3',
          parent: 'Week 3'
        },
        {
          description: 'Rest',
          label: 'Day 4',
          parent: 'Week 3'
        },
        {
          description:
            'Run 3/16 mile, walk 1/16 mile; repeat 4 times \
          (Track equivalent: Run 3/4 of a lap, walk 1/4 of a lap; repeat 4 times)',
          label: 'Day 5',
          parent: 'Week 3'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 6',
          parent: 'Week 3'
        },
        {
          description: 'Rest',
          label: 'Day 7',
          parent: 'Week 3'
        },
        {
          description: 'Run 1 mile (Track equivalent: 4 laps = 1 mile)',
          label: 'Day 1',
          parent: 'Week 4'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 2',
          parent: 'Week 4'
        },
        {
          description: 'Run 1 mile (Track equivalent: 4 laps = 1 mile)',
          label: 'Day 3',
          parent: 'Week 4'
        },
        {
          description: 'Rest',
          label: 'Day 4',
          parent: 'Week 4'
        },
        {
          description: 'Run 1 mile (Track equivalent: 4 laps = 1 mile)',
          label: 'Day 5',
          parent: 'Week 4'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 6',
          parent: 'Week 4'
        },
        {
          description: 'Rest',
          label: 'Day 7',
          parent: 'Week 4'
        }
      ]
    },
    tips: [
      'Recommend doing this workout on a 400m track',
      'Always warm up and cool down by walking 5-10 mins',
      'Try not to run 2 days in a row'
    ],
    title: 'Run 1 mile',
    url: 'https://verywellfit.com/learn-to-run-continuously-2911965'
  },
  {
    category: 'Cardio',
    description:
      'Build up the stamina and strength necessary by alternating walking with running. This training program outlines a way to do tis that should have you running a mile nonstop after 4 weeks.',
    duration: '3 weeks',
    level: 'beginner',
    imgSrc: require('../assets/images/running_2.jpeg'),
    similar: ['beginner-run-1-mile', 'beginner-run-faster-mile'],
    slug: 'beginner-run-2-mile',
    outline: {
      labels: ['Week 1', 'Week 2', 'Week 3'],
      sections: [
        {
          description:
            'Run 1/16 mile, walk 3/16 mile; repeat 4 times \
          (Track equivalent: Run 1/4 of a lap, walk 3/4 of a lap; repeat 4 times)',
          label: 'Day 1',
          parent: 'Week 1'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 2',
          parent: 'Week 1'
        },
        {
          description:
            'Run 1/16 mile, walk 3/16 mile; repeat 4 times \
          (Track equivalent: Run 1/4 of a lap, walk 3/4 of a lap; repeat 4 times)',
          label: 'Day 3',
          parent: 'Week 1'
        },
        {
          description: 'Rest',
          label: 'Day 4',
          parent: 'Week 1'
        },
        {
          description:
            'Run 1/16 mile, walk 3/16 mile; repeat 4 times \
          (Track equivalent: Run 1/4 of a lap, walk 3/4 of a lap; repeat 4 times)',
          label: 'Day 5',
          parent: 'Week 1'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 6',
          parent: 'Week 1'
        },
        {
          description: 'Rest',
          label: 'Day 7',
          parent: 'Week 1'
        },
        {
          description:
            'Run 1/8 mile, walk 1/8 mile; repeat 4 times \
          (Track equivalent: Run 1/2 a lap, walk 1/2 a lap; repeat 4 times)',
          label: 'Day 1',
          parent: 'Week 2'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 2',
          parent: 'Week 2'
        },
        {
          description:
            'Run 1/8 mile, walk 1/8 mile; repeat 4 times \
          (Track equivalent: Run 1/2 a lap, walk 1/2 a lap; repeat 4 times)',
          label: 'Day 3',
          parent: 'Week 2'
        },
        {
          description: 'Rest',
          label: 'Day 4',
          parent: 'Week 2'
        },
        {
          description:
            'Run 1/8 mile, walk 1/8 mile; repeat 4 times \
          (Track equivalent: Run 1/2 a lap, walk 1/2 a lap; repeat 4 times)',
          label: 'Day 5',
          parent: 'Week 2'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 6',
          parent: 'Week 2'
        },
        {
          description: 'Rest',
          label: 'Day 7',
          parent: 'Week 2'
        },
        {
          description:
            'Run 3/16 mile, walk 1/16 mile; repeat 4 times \
          (Track equivalent: Run 3/4 of a lap, walk 1/4 of a lap; repeat 4 times)',
          label: 'Day 1',
          parent: 'Week 3'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 2',
          parent: 'Week 3'
        },
        {
          description:
            'Run 3/16 mile, walk 1/16 mile; repeat 4 times \
          (Track equivalent: Run 3/4 of a lap, walk 1/4 of a lap; repeat 4 times)',
          label: 'Day 3',
          parent: 'Week 3'
        },
        {
          description: 'Rest',
          label: 'Day 4',
          parent: 'Week 3'
        },
        {
          description:
            'Run 3/16 mile, walk 1/16 mile; repeat 4 times \
          (Track equivalent: Run 3/4 of a lap, walk 1/4 of a lap; repeat 4 times)',
          label: 'Day 5',
          parent: 'Week 3'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 6',
          parent: 'Week 3'
        },
        {
          description: 'Rest',
          label: 'Day 7',
          parent: 'Week 3'
        },
        {
          description: 'Run 1 mile (Track equivalent: 4 laps = 1 mile)',
          label: 'Day 1',
          parent: 'Week 4'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 2',
          parent: 'Week 4'
        },
        {
          description: 'Run 1 mile (Track equivalent: 4 laps = 1 mile)',
          label: 'Day 3',
          parent: 'Week 4'
        },
        {
          description: 'Rest',
          label: 'Day 4',
          parent: 'Week 4'
        },
        {
          description: 'Run 1 mile (Track equivalent: 4 laps = 1 mile)',
          label: 'Day 5',
          parent: 'Week 4'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 6',
          parent: 'Week 4'
        },
        {
          description: 'Rest',
          label: 'Day 7',
          parent: 'Week 4'
        }
      ]
    },
    tips: [
      'Recommend doing this workout on a 400m track',
      'Always warm up and cool down by walking 5-10 mins',
      'Try not to run 2 days in a row'
    ],
    title: 'Run 2 miles',
    url: 'https://verywellfit.com/learn-to-run-continuously-2911965'
  },
  {
    category: 'Cardio',
    description: 'Run a faster mile by practicing running. Consistency is key.',
    duration: '2 weeks',
    level: 'beginner',
    imgSrc: require('../assets/images/running_3.jpeg'),
    similar: ['beginner-run-1-mile', 'beginner-run-2-mile'],
    slug: 'beginner-run-faster-mile',
    outline: {
      labels: ['Week 1', 'Week 2'],
      sections: [
        {
          description: 'Run 1 mile at your own pace',
          label: 'Day 1',
          parent: 'Week 1'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 2',
          parent: 'Week 1'
        },
        {
          description: 'Run 1 mile at your own pace',
          label: 'Day 3',
          parent: 'Week 1'
        },
        {
          description: 'Rest',
          label: 'Day 4',
          parent: 'Week 1'
        },
        {
          description: 'Run 1 mile at your own pace',
          label: 'Day 5',
          parent: 'Week 1'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 6',
          parent: 'Week 1'
        },
        {
          description: 'Rest',
          label: 'Day 7',
          parent: 'Week 1'
        },
        {
          description: 'Run 1 mile at your own pace',
          label: 'Day 1',
          parent: 'Week 2'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 2',
          parent: 'Week 2'
        },
        {
          description: 'Run 1 mile at your own pace',
          label: 'Day 3',
          parent: 'Week 2'
        },
        {
          description: 'Rest',
          label: 'Day 4',
          parent: 'Week 2'
        },
        {
          description: 'Run 1 mile at your own pace',
          label: 'Day 5',
          parent: 'Week 2'
        },
        {
          description: 'Rest or cross-train',
          label: 'Day 6',
          parent: 'Week 2'
        },
        {
          description: 'Rest',
          label: 'Day 7',
          parent: 'Week 2'
        }
      ]
    },
    tips: [
      'Recommend doing this workout on a 400m track',
      'Always warm up and cool down by walking 5-10 mins',
      'Try not to run 2 days in a row'
    ],
    title: 'Run a faster mile',
    url: 'https://verywellfit.com/learn-to-run-continuously-2911965'
  }
];
