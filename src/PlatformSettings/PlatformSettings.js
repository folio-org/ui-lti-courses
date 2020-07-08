import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { stripesConnect } from '@folio/stripes/core';
import { EntryManager } from '@folio/stripes/smart-components';

import PlatformDetail from './PlatformDetail';
import PlatformForm from './PlatformForm';

class PlatformSettings extends React.Component {
  static manifest = Object.freeze({
    entries: {
      type: 'okapi',
      path: 'configurations/entries',
      records: 'configs',
      GET: {
        path: 'configurations/entries?limit=100&query=(module=EDGELTICOURSES+and+configName=platform)',
      },
    },
  });

  static propTypes = {
    resources: PropTypes.shape({
      entries: PropTypes.shape({
        records: PropTypes.arrayOf(PropTypes.object),
      }),
    }).isRequired,
    mutator: PropTypes.shape({
      entries: PropTypes.shape({
        POST: PropTypes.func,
        PUT: PropTypes.func,
        DELETE: PropTypes.func,
      }),
    }).isRequired,
  };

  render() {
    const entries = (this.props.resources.entries?.records ?? []).sort((a, b) => a.code.localeCompare(b.code));

    return (
      <FormattedMessage id="ui-lti-courses.platform">
        {platform => (
          <EntryManager
            {...this.props}
            detailComponent={PlatformDetail}
            enableDetailsActionMenu
            entryLabel={platform}
            entryList={entries}
            formComponent={PlatformForm}
            nameKey="code"
            onBeforeSave={entry => ({
              ...entry,
              module: 'EDGELTICOURSES',
              configName: 'platform',
              code: entry.value.issuer,
              value: JSON.stringify(entry.value)
            })}
            paneTitle={platform}
            parentMutator={this.props.mutator}
            parseInitialValues={entry => {
              if (!entry || typeof entry.value !== 'string') return entry;

              return {
                ...entry,
                value: JSON.parse(entry.value),
              };
            }}
            permissions={{
              put: 'ui-lti-courses.settings.edit',
              post: 'ui-lti-courses.settings.edit',
              delete: 'ui-lti-courses.settings.edit',
            }}
            validate={entry => {
              if (entry?.value?.issuer) {
                const existingPlatform = entries.find(e => e.code === entry.value.issuer);

                if (existingPlatform && existingPlatform.id !== entry.id) {
                  return {
                    value: {
                      issuer: <FormattedMessage id="ui-lti-courses.errors.issuersMustBeUnique" />
                    }
                  };
                }
              }

              return null;
            }}
          />
        )}
      </FormattedMessage>
    );
  }
}

export default stripesConnect(PlatformSettings);
