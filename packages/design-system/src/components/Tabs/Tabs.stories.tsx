import React from 'react';
import { Tabs as TabsComponent } from './Tabs';
import TabPanel from './TabPanel';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof TabsComponent> = {
  title: 'Components/Tabs',
  component: TabsComponent,
  subcomponents: { TabPanel },
};
export default meta;

type Story = StoryObj<typeof TabsComponent>;

const tabPanels = [
  <TabPanel key="summary" id="summary" tab="Summary">
    The Bill of Rights is the first ten amendments to the United States Constitution.
  </TabPanel>,
  <TabPanel key="preamble" id="preamble" tab="Preamble">
    We the People of the United States, in Order to form a more perfect Union, establish Justice,
    insure domestic Tranquility, provide for the common defence, promote the general Welfare, and
    secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this
    Constitution for the United States of America.
  </TabPanel>,
  <TabPanel key="amendments" id="amendments" tab="Amendments">
    <h2 className="ds-h4">Bill of Rights</h2>

    <ol className="ds-c-list">
      <li>Freedoms, Petitions, Assembly</li>
      <li>Right to bear arms</li>
      <li>Quartering of soldiers</li>
      <li>Search and arrest</li>
      <li>Rights in criminal cases</li>
      <li>Right to a fair trial</li>
      <li>Rights in civil cases</li>
      <li>Bail, fines, punishment</li>
      <li>Rights retained by the People</li>
      <li>States’ rights</li>
    </ol>

    <h2 className="ds-h4">Later Amendments</h2>

    <ol className="ds-c-list" start={11}>
      <li>Lawsuits against states</li>
      <li>Presidential elections</li>
      <li>Abolition of slavery</li>
      <li>Civil rights</li>
      <li>Black suffrage</li>
      <li>Income taxes</li>
      <li>Senatorial elections</li>
      <li>Prohibition of liquor</li>
      <li>Women’s suffrage</li>
      <li>Terms of office</li>
      <li>Repeal of Prohibition</li>
      <li>Term Limits for the Presidency</li>
      <li>Washington, D.C., suffrage</li>
      <li>Abolition of poll taxes</li>
      <li>Presidential succession</li>
      <li>18-year-old suffrage</li>
      <li>Congressional pay raises</li>
    </ol>
  </TabPanel>,
];

export const Default: Story = {
  render: function Component(args) {
    return <TabsComponent {...args}>{tabPanels}</TabsComponent>;
  },
};

export const Disabled: Story = {
  render: function Component(args) {
    return (
      <TabsComponent {...args}>
        <TabPanel id="summary" tab="Summary">
          The Bill of Rights is the first ten amendments to the United States Constitution.
        </TabPanel>
        <TabPanel id="preamble" tab="Preamble">
          We the People of the United States, in Order to form a more perfect Union, establish
          Justice, insure domestic Tranquility, provide for the common defence, promote the general
          Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and
          establish this Constitution for the United States of America.
        </TabPanel>
        <TabPanel id="disabled" tab="Disabled" disabled>
          You should not see this.
        </TabPanel>
      </TabsComponent>
    );
  },
};

export const Controlled: Story = {
  render: function Component(args) {
    const [{ selectedId }, updateArgs] = useArgs();
    const onChange = (selectedId, prevSelectedId) => {
      action('onChange')(selectedId, prevSelectedId);
      updateArgs({ selectedId });
    };
    return (
      <TabsComponent {...args} selectedId={selectedId} onChange={onChange}>
        {tabPanels}
      </TabsComponent>
    );
  },
};
