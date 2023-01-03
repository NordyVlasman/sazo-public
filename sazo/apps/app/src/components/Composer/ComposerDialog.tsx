import React, { useState } from "react";
import { Composer } from ".";
import { ComposerDialogActionType, useComposer } from "../../contexts/composer";
import { Button, Dialog, DialogContentContainer, DialogFooter } from "@sazo/ui";
import { ComposerCategorySelect } from "./ComposerCategorySelect";
import { DialogContent } from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";

export function ComposerDialog() {
    const { state, dispatch } = useComposer()
    const [draftDialogIsOpen, setDraftDialogIsOpen] = useState(false)

    function handleClose() {
        dispatch({ type: ComposerDialogActionType.reset })
        setDraftDialogIsOpen(false)
    }

    return (
        <>
            <Dialog
                title="Delete draft"
                description="Weet je zeker dat je deze post wil verwijderen?"
                isVisible={draftDialogIsOpen}
                setIsVisible={setDraftDialogIsOpen}
            >
                <DialogFooter>
                    <div className="flex flex-col mt-4 space-y-4">
                        <div className="flex items-center justify-end space-x-3">
                            <Button onClick={() => setDraftDialogIsOpen(false)}>Cancel</Button>
                            <Button destructive onClick={handleClose}>
                                Verwijder draft
                            </Button>
                        </div>
                    </div>
                </DialogFooter>
            </Dialog>

            <Dialog
                title={ state.categorySelectOpen ? "Koppel categorien"  : "Maak je bericht" }
                width="max-w-lg"
                isVisible={state.open}
                setIsVisible={() => {
                    state.draft ? setDraftDialogIsOpen(true) : handleClose()
                }}
            >
                <DialogContentContainer>
                    {state.categorySelectOpen && (
                        <ComposerCategorySelect />
                    )}

                    {!state.categorySelectOpen && (
                        <Composer />
                    )}
                </DialogContentContainer>
            </Dialog>
        </>
    )
}
