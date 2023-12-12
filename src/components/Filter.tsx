import { Button } from './ui/Button';
import { DropDown } from './ui/DropDown';
import { Search } from './ui/Search';

type option = {
  value: string;
  label: string;
};

export default function Filter({
  components,
  align,
}: {
  align: 1 | 2;
  components: {
    search: {
      name: string;
      placeholder: string;
    }[];
    dropDown: {
      name: 'Role' | 'Location' | 'Company';
      options: option[];
    }[];
  };
}) {
  return (
    <div className="m-3 flex flex-col items-start gap-1 rounded-lg border border-input">
      {align === 2 && (
        <>
          <div className="flex w-full gap-2">
            {components.search.map(
              (component: { name: string; placeholder: string }) => (
                <Search
                  key={component.name}
                  placeholder={component.placeholder}
                />
              ),
            )}
            <Button variant={'blue'}>Search</Button>
          </div>
          <div className="flex gap-3 p-3">
            {components.dropDown.map(
              (component: {
                name: 'Role' | 'Location' | 'Company';
                options: option[];
              }) => (
                <DropDown
                  key={component.name}
                  type={component.name}
                  options={component.options}
                />
              ),
            )}
          </div>
        </>
      )}

      {align === 1 && (
        <div className="flex items-center gap-2 p-2">
          {components.dropDown.map(
            (component: {
              name: 'Role' | 'Location' | 'Company';
              options: option[];
            }) => (
              <DropDown
                key={component.name}
                type={component.name}
                options={component.options}
              />
            ),
          )}
          {components.search.map(
            (component: { name: string; placeholder: string }) => (
              <Search
                key={component.name}
                placeholder={component.placeholder}
              />
            ),
          )}
          <Button variant={'blue'}>Search</Button>
        </div>
      )}
    </div>
  );
}
