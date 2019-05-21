import { Icon, ProgressBar } from 'patternfly-react';
import * as React from 'react';
import { toTestId } from '../utils';
import './ProgressWithLink.css';

export interface IProgressWithLinkProps {
  value: string;
  currentStep: number;
  totalSteps: number;
  logUrl?: string;
  i18nLogUrlText: string;
}

export class ProgressWithLink extends React.PureComponent<
  IProgressWithLinkProps
> {
  public render() {
    return (
      <div className="progress-link">
        <div>
          <i data-testid={`${toTestId(ProgressWithLink.name, 'value')}`}>
            {this.props.value} ( {this.props.currentStep} /{' '}
            {this.props.totalSteps} )
          </i>
          {this.props.logUrl && (
            <span className="pull-right">
              <a
                data-testid={`${toTestId(ProgressWithLink.name, 'log-url')}`}
                target="_blank"
                href={this.props.logUrl}
              >
                {this.props.i18nLogUrlText} <Icon name={'external-link'} />
              </a>
            </span>
          )}
        </div>
        <ProgressBar
          now={this.props.currentStep}
          max={this.props.totalSteps}
          style={{
            height: 6,
          }}
        />
      </div>
    );
  }
}
