import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, useState } from "react";
import { CheckIcon, ChevronDownIcon } from "../Icons";

export interface ListBoxOption {
  value: any;
  label: string;
  leadingAccessory?: React.ReactNode;
  key?: string;
}

interface ListBoxProps {
  options: ListBoxOption[];
  defaultOption: ListBoxOption;
  onChange: (option: ListBoxOption) => void;
  disabled?: boolean;
  leadingAccessory?: React.ReactNode;
  width?: string;
  rounded?: string;
}

export function ListBox(props: ListBoxProps) {
  const {
    options,
    defaultOption,
    onChange,
    disabled = false,
    leadingAccessory = null,
    width = "",
  } = props;

  const [selected, setSelected] = useState<ListBoxOption>(defaultOption);

  function handleChange(value: any) {
    const newOption = options.find(
      (option) => option.value === value
    ) as ListBoxOption;

    setSelected(newOption);
    onChange(newOption);
  }

  return (
    <Listbox disabled={disabled} value={selected.value} onChange={handleChange}>
      <div className="relative">
        {/*  @ts-ignore */}
        <Listbox.Button
          className={classNames(
            "relative rounded-md no-drag flex items-center w-full h-8 pl-3 pr-10 space-x-2 text-sm text-left bg-white border border-transparent shadow cursor-pointer ring-1 ring-black ring-opacity-5 focus-visible:outline-none focus-visible:border-blue-500 focus-visible:ring-2 text-black focus-visible:ring-blue-100 sm:text-sm",
            {
              [width]: width,
              "text-opacity-50": selected.value === "",
            }
          )}
        >
            <>
              {leadingAccessory && leadingAccessory}
              <span className={"block truncate"}>{selected.label}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-1 text-black text-opacity-50 pointer-events-none">
                <ChevronDownIcon aria-hidden="true" />
              </span>
            </>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          appear
        >
          <Listbox.Options className="absolute z-10 w-full p-1 py-1 mt-1 overflow-auto text-sm bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus-visible:outline-none sm:text-sm">
            {options.map((option, index) => (
              <Listbox.Option
                key={option.key || option.value || index}
                className={({ active }) =>
                  `relative cursor-pointer rounded select-none py-1.5 pl-8 pr-2 ${
                    active
                      ? "bg-black bg-opacity-5 text-black"
                      : "text-neutral-700"
                  }`
                }
                value={option.value}
                title={option.label}
              >
                {({ selected }) => (
                  <>
                    <span className={`flex items-center space-x-2`}>
                      {option.leadingAccessory && option.leadingAccessory}
                      <span className="truncate">{option.label}</span>
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <CheckIcon aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
