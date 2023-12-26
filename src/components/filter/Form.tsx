import { useFilterContext } from "@/contexts/filterContext";
import { ComponentSearch } from "@/interfaces";
import { useForm } from "react-hook-form";
import { Search } from "../ui/Search";
import { Input } from "../ui/Input";

export function Form({ search }: { search: ComponentSearch[] }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { dispatch } = useFilterContext();

  const onSubmit = (data: any) => {
    dispatch({
      type: `ADD_${search[0].name.toUpperCase()}`,
      value: data[search[0].name],
    });
    reset();
  };

  return (
    <form id="search__field" className="w-full" onSubmit={handleSubmit(onSubmit)}>
      {search.map((component: ComponentSearch) => (
        <Search key={component.name}>
          <Input {...register(component.name)}
          variant={"withOutline"} placeholder={component.placeholder}  className="flex-1"/>
        </Search>
      ))}
    </form>
  );
}
