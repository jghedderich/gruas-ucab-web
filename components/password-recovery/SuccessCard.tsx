import { Button } from '../ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { UserType } from '@/types';

interface SuccessCardProps {
  userType: UserType;
}

export const SuccessCard = ({ userType }: SuccessCardProps) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-2xl">
          Su contraseña ha sido actualizada
        </CardTitle>
        <CardDescription>
          Puede volver a ingresar a su cuenta usando su correo electrónico y
          contraseña actualizada.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full mt-auto">
          <a href={`/login/${userType}`}>Volver al login</a>
        </Button>
      </CardFooter>
    </Card>
  );
};
