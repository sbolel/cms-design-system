import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './Dropdown';

const defaultProps = {
  name: 'dropdown',
  label: 'Select an option',
  onBlur: jest.fn(),
  onChange: jest.fn((e) => {
    e.stopPropagation();
  }),
};

export function generateOptions(count: number): { value: string; label: string }[] {
  const options = [];

  for (let i = 1; i < count + 1; i++) {
    options.push({
      value: String(i),
      label: String(i),
    });
  }

  return options;
}

function makeDropdown(customProps = {}, optionsCount = 1) {
  const props = { ...defaultProps, ...customProps };
  const component = <Dropdown {...props} options={generateOptions(optionsCount)} />;

  return render(component);
}

describe('Dropdown', () => {
  it('dropdown matches snapshot', () => {
    const { container } = makeDropdown(
      {
        value: '2',
      },
      4
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('applies additional classNames to button element', () => {
    makeDropdown({ fieldClassName: 'foo' });

    const button = screen.getByRole('combobox');
    expect(button).toHaveClass('foo');
    // Make sure we're not replacing the other class names
    expect(button).toHaveClass('ds-c-field');
  });

  it('adds size classes to wrapper element', () => {
    const { container } = makeDropdown({ size: 'small' });
    expect(container.querySelector('.ds-c-dropdown')).toHaveClass('ds-c-field--small');
  });

  it('adds inverse class to button', () => {
    makeDropdown({ inversed: true });
    const button = screen.getByRole('combobox');
    expect(button).toHaveClass('ds-c-field--inverse');
  });

  it('has error', () => {
    makeDropdown({ errorMessage: 'Really bad error' });
    const button = screen.getByRole('combobox', { name: /Really bad error/ });
    expect(button).toHaveAttribute('aria-invalid', 'true');
  });

  it('supports bottom placed error', () => {
    const { container } = makeDropdown({
      errorMessage: 'Error',
      errorPlacement: 'bottom',
      errorId: '1_error',
    });

    const button = screen.getByRole('combobox');
    expect(button).toHaveAttribute('aria-invalid', 'true');
    expect(button).toHaveAttribute('aria-describedby', '1_error');
    expect(button).toHaveClass('ds-c-field--error');
    expect(container).toMatchSnapshot();
  });

  it('is disabled', () => {
    makeDropdown({ disabled: true });
    const button = screen.getByRole('combobox');
    expect(button).toHaveAttribute('disabled');
  });

  it('calls the onChange handler', () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    makeDropdown({ value: '1', onChange, onBlur }, 5);
    const button = screen.getByRole('combobox');
    userEvent.click(button);
    userEvent.keyboard('{arrowdown}');
    userEvent.keyboard('{enter}');
    expect(onBlur).not.toHaveBeenCalled();
    expect(onChange).toHaveBeenCalled();
  });

  it('calls the onBlur handler', () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    makeDropdown({ defaultValue: '1', onChange, onBlur }, 10);
    const button = screen.getByRole('combobox');
    userEvent.click(button);
    expect(button).toHaveFocus();
    userEvent.tab();
    expect(onBlur).toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('focuses automatically with autoFocus prop', () => {
    makeDropdown({ defaultValue: '1', autoFocus: true }, 10);
    const button = screen.getByRole('combobox');
    expect(button).toHaveFocus();
  });

  it('accepts optgroup children', () => {
    render(
      <Dropdown {...defaultProps}>
        <optgroup label="Group A">
          <option value="a-1">Option A-1</option>
          <option value="a-2">Option A-2</option>
          <option value="a-3">Option A-3</option>
        </optgroup>
        <optgroup label="Group B">
          <option value="b-1">Option B-1</option>
          <option value="b-2">Option B-2</option>
          <option value="b-3">Option B-3</option>
        </optgroup>
      </Dropdown>
    );
    userEvent.click(screen.getByRole('combobox'));
    const list = screen.getByRole('listbox');
    expect(list.children.length).toEqual(8); // Group headings + options
    expect(list).toMatchSnapshot();
  });

  it('accepts DropdownOptGroup objects in options prop', () => {
    const options = [
      {
        label: 'Group A',
        options: [
          { value: 'a-1', label: 'Option A-1' },
          { value: 'a-2', label: 'Option A-2' },
          { value: 'a-3', label: 'Option A-3' },
        ],
      },
      {
        label: 'Group B',
        options: [
          { value: 'b-1', label: 'Option B-1' },
          { value: 'b-2', label: 'Option B-2' },
          { value: 'b-3', label: 'Option B-3' },
        ],
      },
    ];
    render(<Dropdown {...defaultProps} options={options} />);
    userEvent.click(screen.getByRole('combobox'));
    const list = screen.getByRole('listbox');
    expect(list.children.length).toEqual(8); // Group headings + options
  });

  it('accepts option children', () => {
    render(
      <Dropdown {...defaultProps}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>
    );
    userEvent.click(screen.getByRole('combobox'));
    const list = screen.getByRole('listbox');
    expect(list.children.length).toEqual(3);
  });

  it('passes through a ref', () => {
    const inputRefCallback = jest.fn();
    render(
      <Dropdown {...defaultProps} inputRef={inputRefCallback}>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </Dropdown>
    );
    expect(inputRefCallback).toHaveBeenCalled();
  });
});
