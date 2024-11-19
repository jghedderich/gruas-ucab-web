'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { availableRoles } from './available-roles';
import { UserType } from '@/types';
import { useLoginForm } from '@/hooks/auth/use-login-form';

interface LoginFormProps {
  userType: UserType;
}

export default function LoginForm({ userType }: LoginFormProps) {
  const { form, isLoading, onSubmit } = useLoginForm({ userType });
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl capitalize">{userType} login</CardTitle>
        <CardDescription>
          Ingrese sus credenciales para acceder al sistema.
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••" {...field} />
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
      <CardFooter className="flex flex-col justify-center">
        <p className="text-sm text-muted-foreground">
          ¿Olvidó su contraseña?{' '}
          <a href="#" className="underline">
            Recuperar
          </a>
        </p>
        <div className="flex justify-evenly w-full mt-3">
          {availableRoles.map((role) => {
            if (role !== userType) {
              return (
                <a
                  key={role}
                  href={`/login/${role}`}
                  className="w-fit underline capitalize text-sm text-muted-foreground"
                >
                  {role} Login
                </a>
              );
            }
          })}
        </div>
      </CardFooter>
    </Card>
  );
}
