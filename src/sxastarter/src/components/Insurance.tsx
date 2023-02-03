import React from 'react';
import { Field, RichText as JssRichText } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Title: Field<string>;
  Subtitle: Field<string>;
  Body: Field<string>;
}

type InsuranceProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const InsuranceDefaultComponent = (props: InsuranceProps): JSX.Element => (
  <div className={`component insurance ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Insurance</span>
    </div>
  </div>
);

export const Default = (props: InsuranceProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    const text = props.fields ? (
      <JssRichText field={props.fields.Body} />
    ) : (
      <span className="is-empty-hint">Rich text</span>
    );

    return (
      <div className={`component insurance ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="insurance-title">
            <div>
              <div className="field-insuranceTitle">
                <JssRichText field={props.fields.Title} />
              </div>
            </div>
            <div>
              <div className="field-insuranceSubTitle">
                <JssRichText field={props.fields.Subtitle} />
              </div>
            </div>
            <div className="component-content">{text}</div>
          </div>
        </div>
      </div>
    );
  }
  return <InsuranceDefaultComponent {...props} />;
};
