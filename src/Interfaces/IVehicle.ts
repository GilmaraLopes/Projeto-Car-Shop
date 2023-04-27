interface IVehicle {
  id?: string | undefined,
  model: string,
  year: number,
  color: string,
  status?: boolean | undefined,
  buyValue: number,
}

export default IVehicle;