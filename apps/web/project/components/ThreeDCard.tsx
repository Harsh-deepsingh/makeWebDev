import { CardBody, CardContainer, CardItem } from "./HoverCard";
export function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full flex justify-center mt-4">
          <p>amscklalscmascmlasm</p>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
