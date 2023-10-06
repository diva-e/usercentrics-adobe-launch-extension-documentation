import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw.co/undraw_performance_overview_re_mqrq.svg').default,
    description: (
      <>
        The extension makes it faster and easier for Adobe customers to easily connect their Usercentrics
        Consent Management Platform. Then you’re all set to achieve privacy compliance and obtain
        customer consent for data collection.
      </>
    ),
  },
  {
    title: 'Cooperation with Usercentrics',
    Svg: require('@site/static/img/undraw.co/undraw_our_solution_re_8yk6.svg').default,
    description: (
      <>
        As a Usercentrics partner, we worked closely together to ensure that our extension is fully compatible
        with the CMP v2 and is equipped with all the tools you need to evaluate and act on the user's consent.
      </>
    ),
  },
  {
    title: 'Battle tested',
    Svg: require('@site/static/img/undraw.co/undraw_track_and_field_-33-qn.svg').default,
    description: (
      <>
        We use our extension ourselves, so we know how important it is to be reliable and easy to use.
        We've also received feedback from other implementors who are really happy to have it, and their
        feedback has helped us to improve the extension.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
