import {
  AddIcon,
  AlertCircleIcon,
  ArrowsStackedIcon,
  ArrowIcon,
  BuildingCircleIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  CloseIcon,
  CloseIconThin,
  DownloadIcon,
  ExternalLinkIcon,
  ImageIcon,
  InfoCircleIcon,
  InfoCircleIconThin,
  LockCircleIcon,
  LockIcon,
  MenuIcon,
  MenuIconThin,
  MinusCircleIcon,
  NextIcon,
  PdfIcon,
  PlusCircleIcon,
  RemoveIcon,
  StarIcon,
  UsaFlagIcon,
  WarningIcon,
} from '@design-system';
import React from 'react';
import ReactDOM from 'react-dom';

const iconData = [
  {
    defaultTitle: 'Add',
    component: <AddIcon />,
    name: 'AddIcon',
  },
  {
    defaultTitle: 'Alert',
    component: <AlertCircleIcon />,
    name: 'AlertCircleIcon',
  },
  {
    defaultTitle: 'Sort',
    component: <ArrowsStackedIcon />,
    name: 'ArrowsStackedIcon',
  },
  {
    defaultTitle: '[direction of arrow]',
    component: (
      <>
        <ArrowIcon direction="up" />
        <ArrowIcon direction="down" />
        <ArrowIcon direction="left" />
        <ArrowIcon direction="right" />
      </>
    ),
    name: 'ArrowIcon',
    notes:
      'Component takes <code>direction</code> prop to determine if it is up, down, left or right.',
  },
  {
    defaultTitle: 'Building in circle',
    component: <BuildingCircleIcon />,
    name: 'BuildingCircleIcon',
  },
  {
    defaultTitle: 'Calendar',
    component: <CalendarIcon />,
    name: 'CalendarIcon',
  },
  {
    defaultTitle: 'Check mark in circle',
    component: <CheckCircleIcon />,
    name: 'CheckCircleIcon',
  },
  {
    defaultTitle: 'Check mark',
    component: <CheckIcon />,
    name: 'CheckIcon',
  },
  {
    defaultTitle: 'Close',
    component: <CloseIcon />,
    name: 'CloseIcon',
  },
  {
    defaultTitle: 'Close',
    component: <CloseIconThin />,
    name: 'CloseIconThin',
  },
  {
    defaultTitle: 'Download',
    component: <DownloadIcon />,
    name: 'DownloadIcon',
  },
  {
    defaultTitle: 'External Link',
    component: <ExternalLinkIcon />,
    name: 'ExternalLinkIcon',
  },
  {
    defaultTitle: 'Image',
    component: <ImageIcon />,
    name: 'ImageIcon',
  },
  {
    defaultTitle: 'Information',
    component: <InfoCircleIcon />,
    name: 'InfoCircleIcon',
  },
  {
    defaultTitle: 'Information',
    component: <InfoCircleIconThin />,
    name: 'InfoCircleIconThin',
  },
  {
    defaultTitle: 'Lock in circle',
    component: <LockCircleIcon />,
    name: 'LockCircleIcon',
  },
  {
    defaultTitle: 'Lock',
    component: <LockIcon />,
    name: 'LockIcon',
  },
  {
    defaultTitle: 'Menu Icon',
    component: <MenuIcon />,
    name: 'MenuIcon',
  },
  {
    defaultTitle: 'Menu',
    component: <MenuIconThin />,
    name: 'MenuIconThin',
  },
  {
    defaultTitle: 'Minus in circle',
    component: (
      <>
        <MinusCircleIcon />
        <MinusCircleIcon isFilled />
      </>
    ),
    name: 'MinusCircleIcon',
    notes:
      'Component takes <code>isFilled</code> prop to determine minus in circle is filled or an outline.',
  },
  {
    defaultTitle: 'Next',
    component: <NextIcon />,
    name: 'NextIcon',
  },
  {
    defaultTitle: 'Pdf',
    component: <PdfIcon />,
    name: 'PdfIcon',
  },
  {
    defaultTitle: 'Plus in circle / Plus in circle Filled',
    component: (
      <>
        <PlusCircleIcon />
        <PlusCircleIcon isFilled />
      </>
    ),
    name: 'PlusCircleIcon',
    notes:
      'Component takes <code>isFilled</code> prop to determine plus in circle is filled or an outline.',
  },
  {
    defaultTitle: 'Remove',
    component: <RemoveIcon />,
    name: 'RemoveIcon',
  },
  {
    defaultTitle: 'Star / Star Filled',
    component: (
      <>
        <StarIcon />
        <StarIcon isFilled />
      </>
    ),
    name: 'StarIcon',
    notes: 'Component takes <code>isFilled</code> prop to determine star is filled or an outline.',
  },
  {
    defaultTitle: 'U.S. flag',
    component: <UsaFlagIcon />,
    name: 'UsaFlagIcon',
  },
  {
    defaultTitle: 'Warning',
    component: <WarningIcon />,
    name: 'WarningIcon',
  },
];

ReactDOM.render(
  <>
    <table className="ds-c-table">
      <thead>
        <tr>
          <th>Icon Component</th>
          <th>Example</th>
          <th>
            Default <code>title</code> attribute
          </th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {iconData.map(({ defaultTitle, component, name, notes }) => (
          <tr key={name}>
            <td>
              <code>{name}</code>
            </td>
            <td className="ds-u-text-align--center">{component}</td>
            <td>{defaultTitle}</td>
            <td dangerouslySetInnerHTML={{ __html: notes }} />
          </tr>
        ))}
      </tbody>
    </table>
  </>,
  document.getElementById('js-example')
);
