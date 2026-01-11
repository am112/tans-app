import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/ui/combobox'
import { Textarea } from '@/components/ui/textarea'
import ProductInformation from '@/components/applications/product-information'

export const Route = createFileRoute('/applications/personal-information')({
  component: RouteComponent,
})

function RouteComponent() {
  const {data: roles, isLoading, error} = useQuery({
    queryKey: ['roles'],
    queryFn: async () => {
      await new Promise<void>(resolve => setTimeout(resolve, 2000));
      return [
    { label: 'Developer', value: 'developer' },
    { label: 'Designer', value: 'designer' },
    { label: 'Manager', value: 'manager' },
    { label: 'Other', value: 'other' },
  ]
    },
  });

  const {data: user, isLoading: isUserLoading} = useQuery({
      queryKey: ['user'],
      queryFn: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        return await response.json();
      }
  });

  const frameworks = ['Next.js', 'SvelteKit', 'Nuxt.js', 'Remix', 'Astro']
  
  return (
    <div className=" container mx-auto content-center mt-16">
      <div className="grid grid-cols-12 gap-4">
        <Card className=" col-span-9">
          <CardHeader>
            <CardTitle>User Information</CardTitle>
            <CardDescription>Please fill in your details below</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <FieldGroup>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="small-form-name">Name</FieldLabel>
                    <Input
                      id="small-form-name"
                      placeholder="Enter your name"
                      required
                      defaultValue={user?.name}                      
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="small-form-role">Role</FieldLabel>
                    <Select items={roles} defaultValue={null} disabled={isLoading}>
                      <SelectTrigger id="small-form-role">
                        <SelectValue aria-placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {roles?.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="small-form-framework">
                    Framework
                  </FieldLabel>
                  <Combobox items={frameworks}>
                    <ComboboxInput
                      id="small-form-framework"
                      placeholder="Select a framework"
                      required
                    />
                    <ComboboxContent>
                      <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </Field>
                <Field>
                  <FieldLabel htmlFor="small-form-comments">
                    Comments
                  </FieldLabel>
                  <Textarea
                    id="small-form-comments"
                    placeholder="Add any additional comments"
                  />
                </Field>
                <Field orientation="horizontal">
                  <Button type="submit">Submit</Button>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
        <div className=" col-span-3">
          <ProductInformation />
        </div>
      </div>
    </div>
  )
}
