import { MotionConfig, motion, AnimatePresence, Reorder } from "framer-motion"
import useMeasure from "react-use-measure"
import { ComposerFilePreview } from "./ComposerFilePreview"
import { ComposerDialogActionType, useComposer } from "../../contexts/composer";
import { TransformedFile } from "@sazo/types";

type Props = {
    files: TransformedFile[]
}

export function ComposerReorderableFiles(props: Props) {
    const { files } = props
    const { dispatch } = useComposer()
    const [measureRef, { height }] = useMeasure()

    const duration = 0.2

    return (
        <MotionConfig transition={{ duration }}>
            <motion.div
                animate={{  height: height || "auto" }}
                className="relative flex flex-col bg-violet-50 shadow rounded-xl ring-1 ring-black ring-opacity-5 bg-opacity-80"
            >
                <AnimatePresence>
                    <motion.div
                        ref={measureRef}
                        key={files.length}
                        className={`${height ? "absolute" : "relative"}`}
                    >
                        <Reorder.Group
                            as="ol"
                            values={files}
                            className="divide-y divide-black divide-opacity-[0.06]"
                            onReorder={(value) =>
                                dispatch({
                                    type: ComposerDialogActionType.reorderFiles,
                                    payload: value,
                                })
                            }
                        >
                            {files.map((file) => (
                                <Reorder.Item
                                    layout
                                    key={file.raw.name || file.key}
                                    value={file}
                                    className="flex items-center px-2 py-1.5 space-x-3 bg-violet-50 cursor-grab first-of-type:rounded-t-xl last-of-type:rounded-b-xl"
                                >
                                    <ComposerFilePreview
                                        key={`${file.raw.name}-${file.raw.size}-${file.raw.lastModified}`}
                                        file={file}
                                        reorderable={files.length > 1}
                                    />
                                </Reorder.Item>
                            ))}
                        </Reorder.Group>
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </MotionConfig>
    )
}
