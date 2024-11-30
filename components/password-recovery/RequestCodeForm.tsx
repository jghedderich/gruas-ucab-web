'use client';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '../ui/form';
import { Input } from '../ui/input';
import { UserType } from '@/types';
import { useRequestCodeForm } from '@/hooks/password-recovery/use-request-code-form';

interface RequestCodeFormProps {
  userType: UserType;
}

export const RequestCodeForm = ({ userType }: RequestCodeFormProps) => {
  const { form, isLoading, onSubmit } = useRequestCodeForm({ userType });
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl capitalize">
          Recuperar contraseña
        </CardTitle>
        <CardDescription>
          Ingrese el correo de su cuenta para recibir el código de recuperación.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico</FormLabel>
                  <FormControl>
                    <Input placeholder="correo@ejemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Ingresando...' : 'Ingresar'}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <a
          href={`/login/${userType}`}
          className="w-fit underline text-sm text-muted-foreground"
        >
          Volver al login
        </a>
      </CardFooter>
    </Card>
  );
};
