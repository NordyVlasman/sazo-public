type Props = {
    text: string;
};

export function HTMLRenderer({ text }: Props) {
    return (
        <div className="mb-0 text-base leading-normal prose">
            <div
                // prosemirror markdown inserts newline characters after paragraphs, lists, etc.
                // we don't want those — css should handle vertical document flow
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    );
}
