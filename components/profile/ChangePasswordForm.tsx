'use client';
import { useChangePasswordForm } from '@/hooks/profile/useChangePasswordForm';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { FormWrapper } from '../ui/FormWrapper';
import { Input } from '../ui/input';

export const ChangePasswordForm = () => {
  const { form, onSubmit, back, isSubmitting } = useChangePasswordForm();
  return (
    <FormWrapper
      form={form}
      isSubmitting={isSubmitting}
      onSubmit={onSubmit}
      back={back}
      isEditing={true}
      className="grid-cos-1"
    >
      <FormField
        control={form.control}
        name="currentPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contraseña actual</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div></div>
      <FormField
        control={form.control}
        name="newPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nueva contraseña</FormLabel>
            <FormControl>
              <Input placeholder="Mínimo 6 caracteres" {...field} />
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
            <FormLabel>Repita la nueva contraseña</FormLabel>
            <FormControl>
              <Input placeholder="Mínimo 6 caracteres" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormWrapper>
  );
};
