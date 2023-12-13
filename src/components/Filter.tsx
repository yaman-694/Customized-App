import { useFilterBox } from '@/contexts/filterBox';
import { Button } from './ui/Button';
import { DropDown } from './ui/DropDown';
import { Search } from './ui/Search';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

type option = {
  value: string;
  label: string;
};
type ComponentSearch = {
  name: string;
  placeholder: string;
  ref: React.MutableRefObject<HTMLInputElement | null>;
};
type DropDown = {
  name: 'Role' | 'Location' | 'Company' | 'Country';
  ref: React.MutableRefObject<HTMLSelectElement | null>;
  options: option[];
};

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
        variant={'wt_bg'}
        onClick={() => {
          dispatch({
            type: 'RESET',
          });
        }}
      >
        Reset
      </Button>
      <Button className="m-auto" variant={'blue'} onClick={handleSubmit}>
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
    dropDown: DropDown[];
  };
}) {
  const { state, dispatch } = useFilterBox();

  const handleSubmit = () => {
    for (let i = 0; i < components.search.length; i++) {
      dispatch({
        type: `ADD_${components.search[i].name.toUpperCase()}`,
        value: components.search[i].ref.current?.value,
      });
      // reset search input
      components.search[i].ref.current!.value = '';
    }
  };
  return (
    <div className="m-3 flex flex-col items-start gap-1 rounded-lg border border-input p-2">
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
            {components.dropDown.map((component: DropDown) => (
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
        <div className="flex items-center gap-2 p-2">
          {components.search.map((component: ComponentSearch) => (
            <Search
              name={component.name}
              key={component.name}
              ref={component.ref}
              placeholder={component.placeholder}
            />
          ))}
          {components.dropDown.map((component: DropDown) => (
            <DropDown
              key={component.name}
              type={component.name}
              options={component.options}
            />
          ))}
          <Buttons handleSubmit={handleSubmit} dispatch={dispatch} />
        </div>
      )}
      <div className="mt-1 flex flex-wrap gap-2">
        {Object.keys(state).map((key: string) => {
          // Use type assertion to tell TypeScript that the property exists
          interface FilterBox {
            [key: string]: string[] | string;
          }

          const values = (state as FilterBox)[key];

          // Check if the property is an array before mapping
          if (Array.isArray(values)) {
            return values.map((value: string, index: number) => (
              <Badge variant="round" key={index}>
                {value}
              </Badge>
            ));
          }

          // If the property is not an array, render a single Badge
          if (values !== '') {
            return (
              <Badge variant="round" key={key}>
                {values}
              </Badge>
            );
          }
        })}
      </div>
    </div>
  );
}
