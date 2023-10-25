"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import HomeSectionLayout from "../../../components/layout/element/HomeSectionLayout";

export default function HomeSearch() {

  const showCategory =() => {
    const dropDownElement = document.getElementById('dropdown')
    if (dropDownElement?.className.includes('hidden')){
      dropDownElement?.classList.remove('hidden')
    } else {
      dropDownElement?.classList.add('hidden')
    }
  }

  return (
    <HomeSectionLayout>
      <div className="flex flex-row">
        <Select>
          <SelectTrigger className="w-[180px] text-yellow-300 border-r-0 rounded-l-md rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 focus:ring-offset-0">
            <SelectValue  placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="text-yellow-300">
              {/* <SelectLabel>Fruits</SelectLabel> */}
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input type="text" className="text-yellow-300 focus-visible:ring-0 focus-visible:ring-offset-0 border-l-0 rounded-r-md rounded-l-none" placeholder="Search your movie here..." />
      </div>
    </HomeSectionLayout>
  );
}
