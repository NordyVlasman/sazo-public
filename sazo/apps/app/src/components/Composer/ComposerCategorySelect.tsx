import { ComposerDialogActionType, useComposer } from "../../contexts/composer";
import { Button, ListBox, UIText } from "@sazo/ui";
import { careerCategories, workAreas } from "@sazo/core";
import { useState } from "react";

type Option = {
    value: string;
    label: string;
};

export function ComposerCategorySelect() {
    const { state, dispatch } = useComposer()

    const [tagOptions, setTagOptions] = useState<Option[]>([]);

    function handleChange(newValue) {

        dispatch({ type: ComposerDialogActionType.setTags, payload: newValue });
    }

    return (
        <div className="relative flex flex-col flex-1">
            <div className="flex flex-col flex-grow">
                <div className="space-y-4">
                    <div>
                        <UIText weight="font-medium" className="col-span-2 pb-2">
                            Werkgebied
                        </UIText>
                        <ListBox
                            options={careerCategories}
                            defaultOption={state.career ? state.career : careerCategories[0]}
                            onChange={(option) => dispatch({ type: ComposerDialogActionType.setCareer, payload: option }) }
                        />
                        <div className={"my-2 space-y-1"}>
                            <UIText size={"text-sm"}>
                                Suggesties
                            </UIText>
                            <ul role="list" className="leading-8 space-x-2">
                                {careerCategories.slice(0, 3).map((item) => (
                                    <li className="inline" key={item.value}>
                                        <button
                                            onClick={() => dispatch({ type: ComposerDialogActionType.setCareer, payload: item })}
                                            className="relative inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-900">
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <UIText weight="font-medium" className="col-span-2 pb-2">
                            Loopbaanfase
                        </UIText>
                        <ListBox
                            options={workAreas}
                            defaultOption={state.workArea ? state.workArea : workAreas[0]}
                            onChange={(option) => dispatch({ type: ComposerDialogActionType.setWorkArea, payload: option }) }
                        />
                        <div className={"my-2 space-y-1"}>
                            <UIText size={"text-sm"}>
                                Suggesties
                            </UIText>
                            <ul role="list" className="leading-8 space-x-2">
                                {workAreas.slice(0, 3).map((item) => (
                                    <li className="inline" key={item.value}>
                                        <button
                                            onClick={() => dispatch({ type: ComposerDialogActionType.setWorkArea, payload: item })}
                                            className="relative inline-flex items-center rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-900"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="sticky bottom-0 flex items-center justify-end pt-3 pb-3 space-x-3 rounded-b-md">
                    <Button
                        primary
                        fullWidth
                        onClick={() => dispatch({ type: ComposerDialogActionType.closeCategorySelect }) }
                    >
                        Klaar
                    </Button>
                </div>
            </div>
        </div>
    )
}
