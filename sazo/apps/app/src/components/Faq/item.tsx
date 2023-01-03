import { faqAnswers, faqGeneral, faqInformation, faqMessages } from "@sazo/core";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, Title3 } from "@sazo/ui";
import { useEffect, useState } from "react";

interface Props {
    selected: string
}

export default function GeneralItems({ selected }: Props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        switch (selected) {
            case "general":
                setItems(faqGeneral)
                return
            case "answers":
                setItems(faqAnswers)
                return
            case "information":
                setItems(faqInformation)
                return
            case "messages":
                setItems(faqMessages)
                return
        }

    }, [selected, items])

    return (
        <>
            {items.map((item) => (
                <>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full items-center rounded-lg py-2 text-left text-sm font-medium hover:bg-zinc-100 focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-75">
                                    <ChevronUpIcon
                                        className={`${
                                            open ? 'rotate-180 transform' : ''
                                        } h-7 w-7`}
                                    />
                                    <Title3 weight={"font-medium"}>{item.question}</Title3>
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    {item.answer}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </>
            ))}
        </>
    )
}

