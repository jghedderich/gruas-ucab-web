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
import { UserType } from '@/types';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '../ui/input-otp';
import { useVerifyCodeForm } from '@/hooks/password-recovery/use-verify-code-form';

interface VerifyCodeFormProps {
  userType: UserType;
  email: string;
}

export const VerifyCodeForm = ({ userType, email }: VerifyCodeFormProps) => {
  const { form, isLoading, onSubmit } = useVerifyCodeForm({ userType, email });
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl capitalize">Ingresar código</CardTitle>
        <CardDescription>
          Ingrese el código de recuperación que recibió en su correo para
          restablecer su contraseña.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
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
