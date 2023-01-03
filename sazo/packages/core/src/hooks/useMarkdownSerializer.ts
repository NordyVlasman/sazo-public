import {defaultMarkdownSerializer} from "prosemirror-markdown";

export function useMarkdownSerializer() {
    const serializer = defaultMarkdownSerializer;

    serializer.nodes["bulletList"] = serializer.nodes.bullet_list;
    serializer.nodes["codeBlock"] = serializer.nodes.code_block;
    serializer.nodes["hardBreak"] = serializer.nodes.hard_break;
    serializer.nodes["horizontalRule"] = serializer.nodes.horizontal_rule;
    serializer.nodes["listItem"] = serializer.nodes.list_item;
    serializer.nodes["orderedList"] = serializer.nodes.ordered_list;

    // serializer.nodes["mention"] = (state, node) => {
    //     const label = state.esc(node.attrs.label);
    //     const uri = state.esc(`${WEB_URL}/${communitySlug}/people/${node.attrs.label}`)

    //     state.write(`[@${label}](${uri})`);
    // }

    serializer.marks["strike"] = {
        close: "~~",
        expelEnclosingWhitespace: true,
        mixable: true,
        open: "~~"
    };

    serializer.marks["italic"] = {
        close: "_",
        expelEnclosingWhitespace: true,
        mixable: true,
        open: "_",
    };

    serializer.marks["bold"] = serializer.marks.strong;

    return serializer;
}
