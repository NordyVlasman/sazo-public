import classNames from "classnames";
import {EditorContent, useEditor} from "@tiptap/react";
import {StarterKit} from "@tiptap/starter-kit";
import {Placeholder} from "@tiptap/extension-placeholder";
import {Link} from "@tiptap/extension-link";
import {useEffect} from "react";
import { useMarkdownSerializer } from "@sazo/core";

type Props = {
    placeholder?: string;
    content?: string;
    onChange?: (markdown: string, html?: string) => void;
    autoFocus?: boolean;
    slim?: boolean;
}

export function MarkdownEditor(props: Props) {
    const {
        content,
        placeholder,
        onChange,
        autoFocus = false,
        slim = false
    } = props;

    const classes = classNames(
        "prose editing focus:outline-none w-full max-w-full prose-md",
        {
            "min-h-[72px]": !slim,
            "max-h-[200px] overflow-y-auto": slim,
        }
    )

    const serializer = useMarkdownSerializer()

    const editor = useEditor({
        autofocus: autoFocus,
        editorProps: {
            handleDOMEvents: {
                // @ts-ignore
                keydown: (_, event: KeyboardEvent<HTMLDivElement>) => {
                    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                        event.stopPropagation();
                    }

                    return true;
                },
            },
            attributes: {
                class: classes,
            },
        },
        extensions: [
            StarterKit.configure({
                horizontalRule: false,
                blockquote: false,
                heading: {
                    levels: [1, 2, 3],
                },
            }),
            Placeholder.configure({
                placeholder: placeholder
            }),
            Link.configure({
                linkOnPaste: true,
                autolink: true,
            }),
        ],
        content,
        onUpdate: ({ editor }) => {
            const json = editor.getJSON();
            const node = editor.schema.nodeFromJSON(json);

            try {
                onChange?.(serializer.serialize(node), editor.getHTML());
            } catch {
                onChange?.(editor.getText());
            }
        }
    });

    useEffect(() => {
        if (content?.length === 0) {
            editor?.commands?.clearContent();
        }
    }, [content, editor])

    return <EditorContent editor={editor} />;
}

export default MarkdownEditor;
