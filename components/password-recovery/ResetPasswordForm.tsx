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
import { useResetPasswordForm } from '@/hooks/password-recovery/use-reset-password-form';

interface ResetPasswordFormProps {
  userType: UserType;
  userId: string;
}

export const ResetPasswordForm = ({
  userType,
  userId,
}: ResetPasswordFormProps) => {
  const { form, isLoading, onSubmit } = useResetPasswordForm({
    userType,
    userId,
  });
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl capitalize">
          Recuperar contraseña
        </CardTitle>
        <CardDescription>Ingrese su nueva contraseña</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nueva contraseña</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Mínimo 6 caracteres"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirme su contraseña</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Mínimo 6 caracteres"
                      type="password"
                      {...field}
                    />
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
