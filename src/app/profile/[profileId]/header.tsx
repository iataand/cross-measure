import {
  IconSearch,
  IconMessage,
  IconMusic,
  IconMenu,
  IconSettings,
} from "@tabler/icons-react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";

type PropTypes = {
  name: string;
};

export default function Header(props: PropTypes) {
  return (
    <div className="m-auto flex h-[80px] max-w-[1080px] items-center justify-between px-2">
      <h2 className="text-2xl font-bold">CrossMeasure</h2>
      <ul className="hidden gap-4 sm:flex">
        <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
          <IconSearch size={17} />
          Search
        </li>
        <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
          <IconMessage size={17} />
          Messages
        </li>
        <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
          <IconMusic size={17} />
          Connections
        </li>
      </ul>
      <div className="hidden sm:block">img</div>
      <div className="sm:hidden">
        <Drawer direction="right">
          <DrawerTrigger>
            <IconMenu />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>CrossMeasure</DrawerTitle>
              <ul className="mt-6">
                <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
                  img {props.name}
                </li>
                <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
                  <IconSearch size={17} />
                  Search
                </li>
                <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
                  <IconMessage size={17} />
                  Messages
                </li>
                <li className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
                  <IconMusic size={17} />
                  Connections
                </li>
              </ul>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex cursor-pointer items-center gap-1 rounded-md p-2 hover:bg-gray-800">
                <IconSettings size={17} />
                Settings
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
