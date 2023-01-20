/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { ReactNode } from 'react';
import {
  Box,
  Chip,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { Link } from '@backstage/core-components';
import {
  IndexableDocument,
  ResultHighlight,
} from '@backstage/plugin-search-common';
import { HighlightedSearchResultText } from '@backstage/plugin-search-react';

const useStyles = makeStyles({
  flexContainer: {
    flexWrap: 'wrap',
  },
  itemText: {
    width: '100%',
    wordBreak: 'break-all',
    marginBottom: '1rem',
  },
});

/**
 * Props for {@link CatalogSearchResultListItem}.
 *
 * @public
 */
export interface CatalogSearchResultListItemProps {
  icon?: ReactNode;
  result?: IndexableDocument;
  highlight?: ResultHighlight;
  rank?: number;
  toggleModal?: () => void;
}

/** @public */
export function CatalogSearchResultListItem(
  props: CatalogSearchResultListItemProps,
) {
  const result = props.result as any;
  const highlight = props.highlight as ResultHighlight;

  const classes = useStyles();

  if (!result) return null;

  return (
    <ListItem alignItems="flex-start" divider>
      {props.icon && <ListItemIcon>{props.icon}</ListItemIcon>}
      <div className={classes.flexContainer}>
        <ListItemText
          className={classes.itemText}
          primaryTypographyProps={{ variant: 'h6' }}
          primary={
            <Link noTrack to={result.location}>
              {highlight?.fields.title ? (
                <HighlightedSearchResultText
                  text={highlight.fields.title}
                  preTag={highlight.preTag}
                  postTag={highlight.postTag}
                />
              ) : (
                result.title
              )}
            </Link>
          }
          secondary={
            highlight?.fields.text ? (
              <HighlightedSearchResultText
                text={highlight.fields.title}
                preTag={highlight.preTag}
                postTag={highlight.postTag}
              />
            ) : (
              result.title
            )
          }
        />
        <Box>
          {result.kind && <Chip label={`Kind: ${result.kind}`} size="small" />}
          {result.lifecycle && (
            <Chip label={`Lifecycle: ${result.lifecycle}`} size="small" />
          )}
        </Box>
      </div>
    </ListItem>
  );
}
