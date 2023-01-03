import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { KeyboardEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { components, LoadingIndicatorProps, MenuProps, MultiValueGenericProps, OnChangeValue } from "react-select";
import CreatableSelect from "react-select/creatable";
import { formatTagName, useCreateTag, useGetTags } from "@sazo/core";
import { Tag } from "@sazo/types";
import { LoadingSpinner } from "@sazo/ui";

type Props = {
    id: string;
    disabled?: boolean;
    onCommandEnter?: (event?: KeyboardEvent) => void;
}

type Option = {
    value: string;
    label: string;
}

export function OrganizationCategoryPicker(props: Props) {
    const { id, onCommandEnter, disabled } = props
    const [query, setQuery] = useState("")
    const getTags = useGetTags({ query });
    const createTag = useCreateTag();

    const [tagOptions, setTagOptions] = useState<Option[]>([])

    function transformTagToOption(tag: Tag): Option {
        return {
            value: tag.name,
            label: tag.name
        }
    }

    const customStyles = {
        container: (provided: any, state: any) => ({
          ...provided,
        }),
        control: (provided: any, state: any) => ({
          border: "none",
          padding: "8px",
          borderRadius: 0,
        }),
        valueContainer: (provided: any, state: any) => ({
          ...provided,
          padding: 0,
          width: "100%",
          gap: 6,
          opacity: disabled ? 0.5 : 1,
          overflow: "visible",
        }),
        placeholder: (provided: any, state: any) => ({
          ...provided,
          fontSize: 12,
          paddingLeft: 4,
          color: "rgba(0,0,0,0.35)",
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        }),
        option: (provided: any, state: any) => ({
          ...provided,
          color: "#1D4ED8",
          padding: "8px 12px",
          fontSize: 13,
          borderRadius: 8,
          backgroundColor: state.isSelected
            ? "#EFF6FF"
            : state.isFocused
            ? "#EFF6FF"
            : "transparent",
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
          "&:hover": {
            cursor: "pointer",
          },
          "&:first-of-type": {
            borderRadius: 7,
          },
          "&:last-of-type": {
            borderRadius: 7,
          },
        }),
        multiValue: (provided: any, state: any) => {
          return {
            ...provided,
            borderRadius: "200px",
            minWidth: "auto",
            padding: "1px 6px",
            background: "#EFF6FF",
            boxShadow: "0 0 1px rgba(59, 130, 246, 0.6)",
            display: "flex",
            alignItems: "center",
            margin: 0,
            fontSize: 14,
            color: "#1D4ED8",
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
          };
        },
        multiValueLabel: (provided: any, state: any) => ({
          ...provided,
          color: "#1D4ED8",
        }),
        multiValueRemove: (provided: any, state: any) => ({
          ...provided,
          borderRadius: "200px",
          width: 20,
          height: 20,
          transform: "translateX(4px)",
          color: "#1D4ED8",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "#fff",
            boxShadow: "0 1px 2px rgba(0,0,0, 0.1)",
            color: "#000",
          },
        }),
        input: (provided: any, state: any) => ({
          ...provided,
          outline: "none",
          boxShadow: "0",
          fontSize: 13,
        }),
        indicatorsContainer: (provided: any, state: any) => ({
          ...provided,
          position: "absolute",
          padding: 16,
          right: 0,
          top: 0,
        }),
        dropdownIndicator: (provided: any, state: any) => ({
          ...provided,
          display: "none",
        }),
        clearIndicator: (provided: any, state: any) => ({
          ...provided,
          display: "none",
        }),
        indicatorSeparator: (provided: any, state: any) => ({
          ...provided,
          display: "none",
        }),
        menu: (provided: any, state: any) => ({
          ...provided,
          padding: "0 4px",
          marginTop: "4px",
          width: "100%",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow:
            "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1), 0 0 0 1px rgba(0,0,0,0.05)",
        }),
        noOptionsMessage: (provided: any, state: any) => ({
            ...provided,
            fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
            fontSize: 13,
        }),
    };

    function handleCreate(value: string) {
        const name = formatTagName(value);

        createTag.mutate(
          { name },
          {
            onSuccess(data) {
              const tag = data as Tag;
              const option = transformTagToOption(tag);

              setTagOptions([...tagOptions, option]);
              const newTags = [option.value];

              focusInput();
            },
            onError(error: any) {
              toast.error(error.message);
            },
          }
        );
    }

    function handleChange(newValue: OnChangeValue<Option, true>) {
        const newTags = newValue.map((option) => option.value)
    }

    function focusInput() {
        const el = document.getElementById(id)

        if (el) setTimeout(() => {
            el.focus()
        }, 1);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
        if (event.key === "Enter" && event.metaKey && onCommandEnter) {
            onCommandEnter(event);
        }
    }

    return (
        <CreatableSelect
            getOptionLabel={(option) => `${option.label.toLowerCase().trim()}`}
            isMulti
            components={{ MultiValueContainer, Menu, LoadingIndicator }}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            options={tagOptions}
            instanceId={id}
            className="tag-picker"
            inputId={id}
            placeholder="Zoek categorie..."
            loadingMessage={() => "Categorie zoeken..."}
            noOptionsMessage={() => "Geen categorie gevonden"}
            onInputChange={setQuery}
            styles={customStyles}
        />
    )
}


const LoadingIndicator = (props: LoadingIndicatorProps<Option>) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      let timeout: any;

      if (props.selectProps.isLoading) {
        timeout = setTimeout(() => setIsVisible(true), 1000);
      } else {
        setIsVisible(false);
      }

      return () => clearTimeout(timeout);
    }, [props.selectProps.isLoading]);

    if (!isVisible) return null;

    return <LoadingSpinner />;
  };

  const MultiValueContainer = (props: MultiValueGenericProps<Option>) => {
    return (
      <MotionConfig transition={{ duration: 0.1 }}>
        <AnimatePresence>
          <motion.div
            key={props.data.value}
            layout
            initial={{ opacity: 0.5, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.5, scale: 0.96 }}
            style={{ originX: 0.5 }}
          >
            <components.MultiValueContainer {...props} />
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    );
  };

  const Menu = (props: MenuProps<Option, true>) => {
    return (
        <AnimatePresence>
            <motion.div
                layout
                initial={{ opacity: 0.5, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0.5, scale: 0.96 }}
                transition={{
                    duration: 0.1,
                    layout: { type: "spring", bounce: 0.2 },
                }}
            >
                <components.Menu {...props}>{props.children}</components.Menu>
            </motion.div>
        </AnimatePresence>
    );
};
