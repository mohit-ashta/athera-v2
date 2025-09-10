import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  options: Option[];
  placeholder: string;
  width?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({ options, placeholder, width = "lg:w-[160px] w-full" }) => {
  return (
    <Select>
      <SelectTrigger className={width}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{placeholder}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
