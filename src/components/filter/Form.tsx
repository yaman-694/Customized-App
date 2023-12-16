import { useForm } from "react-hook-form";
import { Search } from "../ui/Search";
import { ComponentSearch } from "@/interfaces";



export function Form({ search }: { search: ComponentSearch[] }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form id="searchField" onSubmit={handleSubmit(onSubmit)}>
      {search.map((component: ComponentSearch) => (
        <Search
          {...register(component.name)}
          name={component.name}
          key={component.name}
          placeholder={component.placeholder}
        />
      ))}
    </form>
  );
}
