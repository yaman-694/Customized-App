import { useFilterContext } from "@/contexts/filterContext";
import { ComponentSearch, DropDownType } from "@/interfaces";
import { Form } from "./filter/Form";
import { Button } from "./ui/Button";
import { DropDown } from "./ui/DropDown";
import { Search } from "./ui/Search";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const Buttons = ({
  handleSubmit,
  dispatch,
}: {
  handleSubmit: () => void;
  dispatch: React.Dispatch<{
    type: string;
    value?: string | string[];
  }>;
}) => {
  return (
    <div className="flex">
      <Button
        className="m-auto"
        variant={"wt_bg"}
        onClick={() => {
          dispatch({
            type: "RESET",
          });
        }}
      >
        Reset
      </Button>
      <Button className="m-auto" variant={"blue"} onClick={handleSubmit}>
        Search
      </Button>
    </div>
  );
};

export default function Filter({
  components,
  align,
}: {
  align: 1 | 2;
  components: {
    search: ComponentSearch[];
    dropDown: DropDownType[];
  };
}) {
  const { state, dispatch } = useFilterContext();
  const handleSubmit = () => {
    for (let i = 0; i < components.search.length; i++) {
      dispatch({
        type: `ADD_${components.search[i].name.toUpperCase()}`,
        value: components.search[i].ref.current?.value,
      });
      // reset search input
      components.search[i].ref.current!.value = "";
    }
  };
  return (
    <div className="my-16 flex flex-col items-start rounded-lg border border-input p-2">
      {align === 2 && (
        <>
          <div className="flex w-full gap-2">
            {components.search.map((component: ComponentSearch) => (
              <Search
                name={component.name}
                ref={component.ref}
                key={component.name}
                placeholder={component.placeholder}
              />
            ))}
            <Buttons handleSubmit={handleSubmit} dispatch={dispatch} />
          </div>
          <Separator orientation="horizontal" />
          <div className="mt-2 flex gap-3">
            {components.dropDown.map((component: DropDownType) => (
              // ref in dropdown
              <DropDown
                key={component.name}
                type={component.name}
                options={component.options}
              />
            ))}
          </div>
        </>
      )}

      {align === 1 && components.search.length === 1 && (
        <div className="flex items-center justify-between p-2 w-full gap-3">
          <Form search={components.search}/>
          {components.dropDown.map((component: DropDownType) => (
            <DropDown
              key={component.name}
              type={component.name}
              options={component.options}
            />
          ))}
          <Buttons handleSubmit={handleSubmit} dispatch={dispatch} />
        </div>
      )}
      <div className="mt-1 px-2 flex flex-wrap gap-3">
        {Object.keys(state).map((key: string) => {
          // Use type assertion to tell TypeScript that the property exists
          if (key === "active") return null;
          interface FilterBox {
            active: boolean;
            [key: string]: string[] | string | boolean;
          }

          const values = (state as FilterBox)[key];

          // Check if the property is an array before mapping
          if (Array.isArray(values)) {
            return values.map((value: string, index: number) => (
              <Badge
                variant="round"
                className="cursor-pointer text-sm hover:bg-black hover:text-white transition"
                key={index}
                onClick={() => {
                  dispatch({
                    type: `REMOVE_${key.toUpperCase()}`,
                    value: value as string,
                  });
                }}
              >
                {value}
              </Badge>
            ));
          }

          // If the property is not an array, render a single Badge
          if (values !== "") {
            return (
              <Badge
                variant="round"
                className="cursor-pointer text-sm hover:bg-black hover:text-white transition"
                key={key}
                onClick={() => {
                  dispatch({
                    type: `REMOVE_${key.toUpperCase()}`,
                    value: values as string,
                  });
                }}
              >
                {values}
              </Badge>
            );
          }
        })}
      </div>
    </div>
  );
}
