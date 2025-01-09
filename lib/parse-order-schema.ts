import { OrderFormData } from '@/schemas/order-schema';
import { ServerOrderFormData } from '@/schemas/server-order-schema';

export function transformOrderData(
  clientData: OrderFormData
): ServerOrderFormData {
  return {
    policyId: clientData.clientStep.policyId,
    driverId: clientData.incidentStep.driverId,
    client: {
      ...clientData.clientStep.client,
      clientVehicle: clientData.vehicleStep.clientVehicle,
    },
    incidentAddress: clientData.incidentStep.incidentAddress,
    destinationAddress: clientData.destinationStep.destinationAddress,
  };
}
